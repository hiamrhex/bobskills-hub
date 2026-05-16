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
    console.error('IAM token error details:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    const errorMsg = error.response?.data?.errorMessage || error.message;
    throw new Error(`IAM token error: ${errorMsg}`);
  }
}

// Helper function to call watsonx.ai text generation API
async function generateText(accessToken, watsonxUrl, projectId, skillMd, code) {
  const modelId = 'ibm/granite-4-h-small';
  
  try {
    console.log(`Using model: ${modelId}`);
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
    console.log(`✅ Success with model: ${modelId}`);
    return response.data.results[0].generated_text;
  } catch (error) {
    console.error('watsonx.ai error details:', {
      model: modelId,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      message: error.message
    });
    const errorMsg = error.response?.data?.error || error.response?.data?.message || error.message;
    throw new Error(`watsonx.ai error with ${modelId}: ${errorMsg}`);
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
    console.error('Preview route error:', error.message);
    res.status(500).json({
      error: error.message || 'An error occurred while generating preview'
    });
  }
});

export default router;

// Made with Bob
