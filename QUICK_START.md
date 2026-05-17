# 🚀 Quick Start Guide - BobSkills Hub

## ⚠️ Important: Configure Your Credentials

The application requires valid IBM watsonx.ai credentials to function. The `.env` file currently contains placeholder values that must be replaced with your actual credentials.

## Step-by-Step Setup

### 1. Get Your IBM watsonx.ai Credentials

#### A. Get Your API Key
1. Go to [IBM Cloud](https://cloud.ibm.com/)
2. Log in to your account
3. Navigate to **Manage** → **Access (IAM)** → **API keys**
4. Click **Create** to generate a new API key
5. Copy the API key (you won't be able to see it again!)

#### B. Get Your Project ID
1. Go to [watsonx.ai](https://dataplatform.cloud.ibm.com/wx/home)
2. Log in to your IBM Cloud account
3. Open your watsonx.ai project (or create a new one)
4. Click on the **Manage** tab
5. Find and copy the **Project ID**

### 2. Update Your Environment Variables

Open `server/.env` and replace the placeholder values:

```env
# Replace these with your actual credentials:
WATSONX_API_KEY=your_actual_api_key_here
WATSONX_PROJECT_ID=your_actual_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com

# Keep this as is:
PORT=3001
```

### 3. Start the Application

#### Terminal 1 - Start Backend Server
```bash
cd server
npm install
npm run dev
```

Wait for: `✅ Server running on http://localhost:3001`

#### Terminal 2 - Start Frontend Client
```bash
cd client
npm install
npm run dev
```

Wait for: `Local: http://localhost:5173`

### 4. Test the Application

1. Open your browser to `http://localhost:5173`
2. Click on any skill card
3. Go to the **Preview** tab
4. Paste some code and click **Preview with Bob**
5. You should see the AI-generated output!

## 🔍 Troubleshooting

### Error: "IAM token error: Provided API key could not be found"
**Solution:** Your API key is invalid or not set correctly
- Double-check you copied the entire API key from IBM Cloud
- Make sure there are no extra spaces or quotes around the key
- Verify the key is active in your IBM Cloud account

### Error: "Missing required environment variables"
**Solution:** Your `.env` file is not configured
- Make sure `server/.env` exists (not just `.env.example`)
- Verify all three required variables are set:
  - `WATSONX_API_KEY`
  - `WATSONX_PROJECT_ID`
  - `WATSONX_URL`

### Error: "Failed to connect to server"
**Solution:** Backend server is not running
- Make sure you started the server with `npm run dev` in the `server` directory
- Check that port 3001 is not being used by another application
- Look for error messages in the server terminal

### Error: "watsonx.ai error"
**Solution:** Check your project ID and model access
- Verify your Project ID is correct
- Ensure your watsonx.ai project has access to the Granite models
- Check that your IBM Cloud account has active watsonx.ai service

## 📋 Checklist

Before running the application, ensure:

- [ ] You have an IBM Cloud account
- [ ] You have access to watsonx.ai
- [ ] You've created an API key
- [ ] You've copied your Project ID
- [ ] You've updated `server/.env` with real credentials
- [ ] You've installed dependencies (`npm install` in both directories)
- [ ] Both servers are running (backend on 3001, frontend on 5173)

## 🔐 Security Reminder

**Never commit your `.env` file to git!**

The `.env` file is already in `.gitignore`, but always double-check before committing:

```bash
git status
# Make sure .env is NOT listed in "Changes to be committed"
```

## 🆘 Still Having Issues?

1. Check the server terminal for detailed error messages
2. Verify your IBM Cloud credentials are active
3. Ensure you have network connectivity to IBM Cloud services
4. Review the `SECURITY_FIXES.md` file for additional configuration details

## 📚 Additional Resources

- [IBM watsonx.ai Documentation](https://www.ibm.com/docs/en/watsonx-as-a-service)
- [IBM Cloud API Keys](https://cloud.ibm.com/docs/account?topic=account-userapikey)
- [Project README](README.md) - Full project documentation
- [Security Fixes](SECURITY_FIXES.md) - Security improvements made

---

**Ready to go?** Follow the steps above and you'll be up and running in minutes! 🚀