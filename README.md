# 🚀 BobSkills Hub

> **The missing layer for IBM Bob** — Discover, preview live, and install production-ready Bob Skills.

[![IBM Bob Hackathon 2026](https://img.shields.io/badge/IBM%20Bob-Hackathon%202026-7C6AF7?style=flat-square)](https://github.com/hiamrhex/bobskills-hub)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Powered by watsonx.ai](https://img.shields.io/badge/Powered%20by-watsonx.ai-0F62FE?style=flat-square)](https://www.ibm.com/watsonx)

---

## 📖 Overview

**BobSkills Hub** is a centralized marketplace for IBM Bob Skills — custom instructions that supercharge Bob's capabilities. Built during the **IBM Bob Hackathon 2026**, this platform lets developers:

- 🔍 **Browse** a curated collection of production-ready Bob Skills
- 🎯 **Search & Filter** by category (Testing, Docs, Security, Onboarding, Refactor)
- ⚡ **Live Preview** skills with watsonx.ai integration before installing
- 📦 **One-Click Install** with copy-paste commands
- 🌓 **Dark/Light Mode** for comfortable browsing

Stop writing prompts from scratch — find the skill, ship the feature.

---

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphic Design** with smooth animations and scroll reveals
- **Responsive Layout** optimized for desktop and mobile
- **Theme Toggle** between dark and light modes
- **Ambient Gradients** for visual depth

### 🔍 Smart Discovery
- **Real-time Search** across skill names and descriptions
- **Category Filtering** (All, Testing, Docs, Security, Onboarding, Refactor)
- **Skill Cards** with ratings, install counts, and compatibility info
- **Detailed Modal Views** with full skill documentation

### ⚡ Live Preview with watsonx.ai
- **Interactive Testing** — paste your code and see the skill in action
- **IBM Granite 3 Model** (`ibm/granite-3-3-8b-instruct`) for accurate results
- **Real-time Generation** with streaming-like experience
- **Example Inputs** provided for each skill

### 📦 Easy Installation
- **Copy-Paste Commands** for instant skill installation
- **Version Information** and compatibility details
- **Author Attribution** and last updated timestamps

---

## 🛠️ Tech Stack

### Frontend
- **React 18** — Modern UI library
- **Vite** — Lightning-fast build tool
- **Axios** — HTTP client for API calls
- **CSS Variables** — Dynamic theming system
- **Custom Hooks** — `useScrollReveal` for animations

### Backend
- **Node.js** — JavaScript runtime
- **Express** — Web framework
- **Axios** — HTTP client for watsonx.ai integration
- **CORS** — Cross-origin resource sharing

### AI Integration
- **IBM watsonx.ai** — AI model inference
- **IBM Cloud IAM** — Authentication
- **Granite 3 Model** — Text generation (`ibm/granite-3-3-8b-instruct`)

---

## 📦 Installation

### Prerequisites
- **Node.js** 18+ and npm
- **IBM Cloud Account** with watsonx.ai access
- **watsonx.ai API Key** and Project ID

### 1. Clone the Repository
```bash
git clone https://github.com/hiamrhex/bobskills-hub.git
cd bobskills-hub
```

### 2. Install Dependencies

#### Server
```bash
cd server
npm install
```

#### Client
```bash
cd ../client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `server/` directory:

```env
WATSONX_API_KEY=your_watsonx_api_key_here
WATSONX_PROJECT_ID=your_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com
```

**How to get these values:**

1. **WATSONX_API_KEY**: 
   - Go to [IBM Cloud](https://cloud.ibm.com/)
   - Navigate to **Manage** → **Access (IAM)** → **API keys**
   - Create a new API key or use an existing one

2. **WATSONX_PROJECT_ID**:
   - Go to [watsonx.ai](https://dataplatform.cloud.ibm.com/wx/home)
   - Open your project
   - Copy the Project ID from the project settings

3. **WATSONX_URL**:
   - Use the regional endpoint for your watsonx.ai instance
   - Default: `https://us-south.ml.cloud.ibm.com`
   - Other regions: `https://eu-de.ml.cloud.ibm.com`, `https://jp-tok.ml.cloud.ibm.com`

---

## 🚀 Running Locally

### Development Mode

Open **two terminal windows**:

#### Terminal 1: Start the Backend Server
```bash
cd server
npm run dev
```
Server runs on `http://localhost:3001`

#### Terminal 2: Start the Frontend Client
```bash
cd client
npm run dev
```
Client runs on `http://localhost:5173`

### Production Build

#### Build the Client
```bash
cd client
npm run build
```

#### Start the Server
```bash
cd server
npm start
```

---

## 📁 Project Structure

```
bobskills-hub/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── BobPreview.jsx       # Live preview with watsonx.ai
│   │   │   ├── CategoryFilter.jsx   # Category filter buttons
│   │   │   ├── Icons.jsx            # SVG icon components
│   │   │   ├── InstallCommand.jsx   # Copy-paste install command
│   │   │   ├── SearchBar.jsx        # Search input
│   │   │   ├── SkillCard.jsx        # Individual skill card
│   │   │   ├── SkillGrid.jsx        # Grid layout for skills
│   │   │   └── SkillModal.jsx       # Detailed skill view
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js   # Scroll animation hook
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Global styles & theme
│   ├── index.html
│   ├── package.json
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Express backend
│   ├── data/
│   │   └── skills.json     # Skills database
│   ├── routes/
│   │   ├── preview.js      # watsonx.ai preview endpoint
│   │   └── skills.js       # Skills CRUD endpoints
│   ├── index.js            # Server entry point
│   ├── package.json
│   └── .env                # Environment variables (not in git)
│
├── .gitignore
└── README.md
```

---

## 🔌 API Endpoints

### Skills API

#### `GET /api/skills`
Fetch all skills with optional filtering.

**Query Parameters:**
- `search` (optional) — Search term for name/description
- `category` (optional) — Filter by category (Testing, Docs, Security, etc.)

**Response:**
```json
[
  {
    "id": "unit-test-generator",
    "name": "Unit Test Generator",
    "category": "Testing",
    "description": "Generates comprehensive unit tests...",
    "rating": 4.9,
    "installs": 541,
    "tags": ["testing", "jest", "vitest"],
    "compatible_with": ["JavaScript", "TypeScript", "Python"],
    "version": "1.2.0",
    "author": "BobSkills Community",
    "last_updated": "2026-05-12",
    "example_input": "function calculateDiscount(...) {...}",
    "skill_md": "---\nname: unit-test-generator\n..."
  }
]
```

### Preview API

#### `POST /api/preview`
Generate live preview using watsonx.ai.

**Request Body:**
```json
{
  "skillMd": "---\nname: unit-test-generator\n...",
  "code": "function calculateDiscount(price, userTier) {...}"
}
```

**Response:**
```json
{
  "output": "Generated test cases:\n\ndescribe('calculateDiscount', () => {\n  test('applies 20% discount for premium users', () => {\n    expect(calculateDiscount(100, 'premium')).toBe(80);\n  });\n  ...\n});"
}
```

---

## 🎯 How It Works

### 1. Browse Skills
- Skills are loaded from `server/data/skills.json`
- Real-time search and category filtering on the frontend
- Smooth scroll animations reveal content as you browse

### 2. Preview with watsonx.ai
- Click "Try Live Preview" on any skill card
- Paste your code or use the provided example
- Backend calls IBM watsonx.ai API with:
  - **Model**: `ibm/granite-3-3-8b-instruct`
  - **Input**: Skill markdown + your code
  - **Parameters**: `max_new_tokens: 1000`, `temperature: 0.7`
- Results stream back to the frontend

### 3. Install Skills
- Copy the install command from the modal
- Paste into your Bob configuration
- Start using the skill immediately

---

## 🧩 Adding New Skills

To add a new skill to the hub:

1. Open `server/data/skills.json`
2. Add a new skill object with the following structure:

```json
{
  "id": "your-skill-id",
  "name": "Your Skill Name",
  "category": "Testing|Docs|Security|Onboarding|Refactor",
  "description": "Brief description of what the skill does",
  "rating": 4.5,
  "installs": 0,
  "tags": ["tag1", "tag2"],
  "compatible_with": ["JavaScript", "TypeScript"],
  "version": "1.0.0",
  "author": "Your Name",
  "last_updated": "2026-05-16",
  "example_input": "Sample code for preview",
  "skill_md": "---\nname: your-skill-id\ndescription: ...\n---\n\nYour skill instructions here..."
}
```

3. Restart the server to see your new skill

---

## 🌟 Featured Skills

- **Unit Test Generator** — Comprehensive test coverage for any function
- **Legacy Code Explainer** — Decode cryptic code in plain English
- **API Documentation Writer** — Auto-generate API docs from route handlers
- **PR Impact Analyzer** — Assess the blast radius of code changes
- **Security Vulnerability Scanner** — Detect common security issues
- **Onboarding Buddy** — Generate setup guides for new team members
- **Code Smell Detector** — Identify anti-patterns and suggest refactors
- **Dependency Updater** — Safe dependency upgrade recommendations

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-skill`)
3. **Add your skill** to `server/data/skills.json`
4. **Test locally** to ensure it works
5. **Commit your changes** (`git commit -m 'Add amazing skill'`)
6. **Push to the branch** (`git push origin feature/amazing-skill`)
7. **Open a Pull Request**

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **IBM Bob Team** — For creating an amazing AI coding assistant
- **IBM watsonx.ai** — For powering the live preview feature
- **IBM Cloud** — For hosting and infrastructure
- **Hackathon Organizers** — For the opportunity to build this

---

## 📧 Contact

Built with ❤️ for the **IBM Bob Hackathon 2026**

- **GitHub**: [@hiamrhex](https://github.com/hiamrhex)
- **Project**: [BobSkills Hub](https://github.com/hiamrhex/bobskills-hub)

---

<div align="center">
  <strong>Stop writing prompts from scratch — find the skill, ship the feature.</strong>
  <br><br>
  <sub>Made with Bob 🤖</sub>
</div>