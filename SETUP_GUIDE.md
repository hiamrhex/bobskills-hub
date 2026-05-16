# 🚀 BobSkills Hub - Setup & Testing Guide

## Quick Setup

### 1. Server Setup

```bash
cd server
npm install
```

Create `.env` file from template:
```bash
cp .env.example .env
```

Edit `server/.env` and add your credentials:
```env
WATSONX_API_KEY=your_actual_api_key
WATSONX_PROJECT_ID=your_actual_project_id
WATSONX_URL=https://us-south.ml.cloud.ibm.com
PORT=3001
```

Start the server:
```bash
npm run dev
```

### 2. Client Setup

```bash
cd client
npm install
```

Create `.env` file from template:
```bash
cp .env.example .env
```

The default configuration should work for local development:
```env
VITE_API_URL=http://localhost:3001
```

Start the client:
```bash
npm run dev
```

## Testing Checklist

### ✅ Environment Variables
- [ ] Server `.env` file created with watsonx.ai credentials
- [ ] Client `.env` file created (or using defaults)
- [ ] Server starts without errors on port 3001
- [ ] Client starts without errors on port 5173

### ✅ Core Features
- [ ] Homepage loads with all skills displayed
- [ ] Search bar filters skills in real-time
- [ ] Category filters work (Testing, Docs, Security, etc.)
- [ ] Theme toggle switches between dark/light mode
- [ ] Clicking a skill card opens the modal

### ✅ Skill Modal
- [ ] Modal displays skill details correctly
- [ ] All tabs work (Overview, SKILL.md, Preview, Install)
- [ ] Install command can be copied
- [ ] Modal closes with ESC key or clicking outside

### ✅ Live Preview Feature
- [ ] Preview tab loads without errors
- [ ] Example input is pre-filled
- [ ] "Preview with Bob" button is enabled when code is present
- [ ] Clicking preview button shows loading state
- [ ] Success: Bob's output is displayed in formatted code block
- [ ] Error: Clear error message is shown (e.g., missing credentials)
- [ ] Copy button works for output

### ✅ Error Handling
- [ ] Backend connection errors show helpful message with API URL
- [ ] Missing watsonx.ai credentials show clear error
- [ ] Invalid API responses are handled gracefully
- [ ] Network errors don't crash the app

## Common Issues

### "Failed to connect to server"
- Ensure backend is running on port 3001
- Check `VITE_API_URL` in `client/.env`
- Verify CORS is enabled on the server

### "Missing required environment variables"
- Check `server/.env` has all three variables:
  - WATSONX_API_KEY
  - WATSONX_PROJECT_ID
  - WATSONX_URL

### Preview returns error
- Verify watsonx.ai credentials are correct
- Check IBM Cloud API key has watsonx.ai access
- Ensure project ID is from a valid watsonx.ai project

## Production Deployment

### Environment Variables

**Server (Backend):**
```env
WATSONX_API_KEY=<your-production-key>
WATSONX_PROJECT_ID=<your-project-id>
WATSONX_URL=https://us-south.ml.cloud.ibm.com
PORT=3001
```

**Client (Frontend):**
```env
VITE_API_URL=https://your-backend-url.com
```

### Build Commands

**Client:**
```bash
cd client
npm run build
# Output: client/dist/
```

**Server:**
```bash
cd server
npm start
# Runs on PORT from .env
```

## Changes Made

### ✅ Completed Tasks

1. **Environment Configuration**
   - Created `server/.env.example` with watsonx.ai setup instructions
   - Created `client/.env.example` with API URL configuration
   - Added environment variable support to both client and server

2. **Fixed Hardcoded URLs**
   - Updated `client/src/App.jsx` to use `VITE_API_URL`
   - Updated `client/src/components/BobPreview.jsx` to use `VITE_API_URL`
   - Both now support production deployment with custom URLs

3. **Improved Error Handling**
   - Added detailed error messages in `BobPreview.jsx`
   - Displays API URL in connection errors for easier debugging
   - Shows server errors with status codes
   - Added visual error UI with red styling

4. **Added MIT License**
   - Created `LICENSE` file as mentioned in README
   - Standard MIT license for open source distribution

## Next Steps

- [ ] Test all features locally
- [ ] Deploy to production (Vercel + Railway/Render)
- [ ] Add your watsonx.ai credentials to production environment
- [ ] Update README with production URL
- [ ] Submit to IBM Bob Hackathon 2026

---

**Made with Bob 🤖**