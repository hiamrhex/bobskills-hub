import { Router } from 'express';
import axios from 'axios';

const router = Router();

// Helper function to get IBM Cloud IAM access token
async function getIAMToken(apiKey) {
  try {
    const response = await axios.post(
      'https://iam.cloud.ibm.com/identity/token',
      new URLSearchParams({
        grant_type: 'urn:ibm:params:oauth:grant-type:apikey',
        apikey: apiKey
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }
    );
    return response.data.access_token;
  } catch (error) {
    const errorMsg = error.response?.data?.errorMessage || error.message;
    throw new Error(`IAM token error: ${errorMsg}`);
  }
}

// Helper function to call watsonx.ai text generation API
async function generateText(accessToken, watsonxUrl, projectId, skillMd, code) {
  const modelId = 'ibm/granite-3-8b-instruct';
  
  try {
    const response = await axios.post(
      `${watsonxUrl}/ml/v1/text/generation?version=2023-05-29`,
      {
        model_id: modelId,
        input: `System: ${skillMd}\n\nUser: ${code}\n\nAssistant:`,
        parameters: {
          max_new_tokens: 1000,
          temperature: 0.7,
          decoding_method: 'greedy',
          repetition_penalty: 1.0
        },
        project_id: projectId
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    return response.data.results[0].generated_text;
  } catch (error) {
    const errorMsg = error.response?.data?.error || error.response?.data?.message || error.message;
    throw new Error(`watsonx.ai error: ${errorMsg}`);
  }
}

router.post('/', async (req, res) => {
  try {
    // Read environment variables
    const { WATSONX_API_KEY, WATSONX_PROJECT_ID, WATSONX_URL } = process.env;

    // Validate environment variables
    if (!WATSONX_API_KEY || !WATSONX_PROJECT_ID || !WATSONX_URL) {
      return res.status(500).json({
        error: 'Missing required environment variables (WATSONX_API_KEY, WATSONX_PROJECT_ID, WATSONX_URL)'
      });
    }

    // Extract request body parameters
    const { skillMd, code } = req.body;

    // Validate request body
    if (!skillMd || !code) {
      return res.status(400).json({
        error: 'Missing required parameters: skillMd and code are required'
      });
    }

    // Input validation
    if (typeof skillMd !== 'string' || typeof code !== 'string') {
      return res.status(400).json({
        error: 'Invalid parameter types: skillMd and code must be strings'
      });
    }

    // Length validation to prevent abuse
    if (code.length > 50000) {
      return res.status(400).json({
        error: 'Code input too large. Maximum 50,000 characters allowed.'
      });
    }

    if (skillMd.length > 100000) {
      return res.status(400).json({
        error: 'Skill markdown too large. Maximum 100,000 characters allowed.'
      });
    }

    // Step 1: Get IAM access token
    const accessToken = await getIAMToken(WATSONX_API_KEY);

    // Step 2: Call watsonx.ai text generation API
    const generatedText = await generateText(
      accessToken,
      WATSONX_URL,
      WATSONX_PROJECT_ID,
      skillMd,
      code
    );

    // Step 3: Return the generated text
    res.json({ output: generatedText });

  } catch (error) {
    const statusCode = error.message.includes('IAM token') ? 401 : 500;
    res.status(statusCode).json({
      error: error.message || 'An error occurred while generating preview'
    });
  }
});

export default router;

// Made with Bob
