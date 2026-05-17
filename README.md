# 🚀 BobSkills Hub

> **The missing layer for IBM Bob** — Discover, preview live, and install production-ready Bob Skills.

[![IBM Bob Hackathon 2026](https://img.shields.io/badge/IBM%20Bob-Hackathon%202026-7C6AF7?style=flat-square)](https://github.com/hiamrhex/bobskills-hub)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Powered by watsonx.ai](https://img.shields.io/badge/Powered%20by-watsonx.ai-0F62FE?style=flat-square)](https://www.ibm.com/watsonx)

**🌐 Live Demo:** [https://bobskills-hub.vercel.app](https://bobskills-hub.vercel.app) *(placeholder - update with actual URL)*

**📦 GitHub Repository:** [https://github.com/hiamrhex/bobskills-hub](https://github.com/hiamrhex/bobskills-hub)

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
- **Theme Toggle** between dark and light modes with persistent preferences
- **Ambient Gradients** for visual depth and modern aesthetics
- **Typewriter Animation** for live preview output (10ms per character)

### 🔍 Smart Discovery
- **Real-time Search** across skill names and descriptions
- **Category Filtering** (All, Testing, Docs, Security, Onboarding, Refactor)
- **Skill Cards** with ratings, install counts, and compatibility info
- **Detailed Modal Views** with full skill documentation
- **Scroll Reveal Animations** for engaging user experience

### ⚡ Live Preview with watsonx.ai
- **Interactive Testing** — paste your code and see the skill in action
- **IBM Granite 3 Model** (`ibm/granite-3-3-8b-instruct`) for accurate results
- **Streaming-like Experience** with character-by-character reveal
- **Raw & Rendered Views** — toggle between markdown and plain text
- **Error Handling** with clear, actionable feedback

### 📦 Easy Installation
- **Copy-Paste Commands** for instant skill installation
- **Version Information** and compatibility details
- **Author Attribution** and last updated timestamps
- **Installation Instructions** directly in the modal

---

## 🎬 Screenshots

### Homepage - Dark Mode
*Glassmorphic hero section with ambient gradients and smooth animations*

### Skill Grid - Light Mode
*Browse curated skills with real-time search and category filtering*

### Live Preview Modal
*Test skills with watsonx.ai integration before installing*

### Typewriter Animation
*Character-by-character output reveal for streaming-like experience*

---

## 🛠️ Tech Stack

### Frontend
- **React 18** — Modern UI library with hooks
- **Vite** — Lightning-fast build tool and dev server
- **Axios** — HTTP client for API calls
- **Marked** — Markdown parser for rendered output
- **CSS Variables** — Dynamic theming system
- **Custom Hooks** — `useScrollReveal` for scroll animations

### Backend
- **Node.js 18+** — JavaScript runtime
- **Express** — Minimal web framework
- **Axios** — HTTP client for watsonx.ai integration
- **CORS** — Cross-origin resource sharing
- **Nodemon** — Auto-restart during development

### AI Integration
- **IBM watsonx.ai** — AI model inference platform
- **IBM Cloud IAM** — Authentication and authorization
- **Granite 3 Model** — Text generation (`ibm/granite-3-3-8b-instruct`)

### Development Tools
- **ESLint** — Code linting
- **Git** — Version control
- **VS Code** — Recommended IDE

---

## 🚀 How to Run Locally

Follow these step-by-step instructions to get BobSkills Hub running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **IBM Cloud Account** with watsonx.ai access ([Sign up](https://cloud.ibm.com/))

### Step 1: Clone the Repository

```bash
git clone https://github.com/hiamrhex/bobskills-hub.git
cd bobskills-hub
```

### Step 2: Install Dependencies

Install dependencies for both the server and client:

#### Server Dependencies
```bash
cd server
npm install
```

#### Client Dependencies
```bash
cd ../client
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `server/` directory with your IBM watsonx.ai credentials:

```bash
cd ../server
cp .env.example .env
```

Edit the `.env` file and add your credentials:

```env
WATSONX_API_KEY=your_watsonx_api_key_here
WATSONX_PROJECT_ID=your_project_id_here
WATSONX_URL=https://us-south.ml.cloud.ibm.com
```

See the [Environment Variables](#-environment-variables) section below for detailed instructions on obtaining these values.

### Step 4: Start the Development Servers

Open **two terminal windows** and run the following commands:

#### Terminal 1: Start the Backend Server
```bash
cd server
npm run dev
```

The server will start on `http://localhost:3001`

#### Terminal 2: Start the Frontend Client
```bash
cd client
npm run dev
```

The client will start on `http://localhost:5173`

### Step 5: Open in Browser

Navigate to `http://localhost:5173` in your web browser to see BobSkills Hub in action!

---

## 🔐 Environment Variables

The following environment variables are required for the backend server:

### Server Environment Variables (`server/.env`)

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `WATSONX_API_KEY` | Your IBM Cloud API key for watsonx.ai authentication | ✅ Yes | `abc123...xyz789` |
| `WATSONX_PROJECT_ID` | Your watsonx.ai project ID | ✅ Yes | `12345678-abcd-1234-efgh-123456789012` |
| `WATSONX_URL` | Regional endpoint for your watsonx.ai instance | ✅ Yes | `https://us-south.ml.cloud.ibm.com` |

### How to Obtain These Values

#### 1. WATSONX_API_KEY

1. Go to [IBM Cloud](https://cloud.ibm.com/)
2. Log in to your account
3. Navigate to **Manage** → **Access (IAM)** → **API keys**
4. Click **Create** to generate a new API key
5. Copy the API key and save it securely (you won't be able to see it again)
6. Paste it into your `.env` file

#### 2. WATSONX_PROJECT_ID

1. Go to [watsonx.ai](https://dataplatform.cloud.ibm.com/wx/home)
2. Log in to your IBM Cloud account
3. Open your watsonx.ai project (or create a new one)
4. Click on the **Manage** tab
5. Find the **Project ID** in the project details
6. Copy the Project ID and paste it into your `.env` file

#### 3. WATSONX_URL

Use the regional endpoint that corresponds to your watsonx.ai instance location:

- **US South:** `https://us-south.ml.cloud.ibm.com` (default)
- **EU Germany:** `https://eu-de.ml.cloud.ibm.com`
- **Japan Tokyo:** `https://jp-tok.ml.cloud.ibm.com`

### Client Environment Variables (Optional)

If you need to customize the API URL for the client:

Create a `.env` file in the `client/` directory:

```env
VITE_API_URL=http://localhost:3001
```

This is optional — the client defaults to `http://localhost:3001` in development.

---

## 📊 Bob Sessions

BobSkills Hub was built entirely using IBM Bob, and this repository includes exported Bob session reports that document the development process.

### What are Bob Sessions?

Bob sessions are exported reports that capture the entire conversation and development workflow between the developer and IBM Bob. These sessions provide:

- **Complete Development History** — Every prompt, response, and code change
- **Problem-Solving Process** — How challenges were identified and resolved
- **Best Practices** — Patterns and techniques used throughout development
- **Learning Resource** — Educational material for other developers

### Session Reports in This Repository

The `.bob/` directory contains:

- **Skill Definitions** — Custom Bob skills created for this project
- **Session Exports** — Markdown files documenting development sessions
- **Configuration Files** — Bob configuration and settings

### How to Use Bob Sessions

1. **Review Development Process** — See how features were built step-by-step
2. **Learn Bob Techniques** — Understand effective prompting strategies
3. **Reproduce Results** — Follow the same workflow for similar projects
4. **Contribute Skills** — Use existing skills as templates for new ones

### Example: js-to-typescript Skill

Located in `.bob/skills/js-to-typescript/`, this skill demonstrates:

- Converting JavaScript code to TypeScript
- Adding proper type annotations
- Ensuring type safety
- Following TypeScript best practices

This skill was used during development and is available for reuse in other projects.

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
├── .bob/                   # Bob sessions and skills
│   └── skills/
│       └── js-to-typescript/
│           └── SKILL.md    # TypeScript conversion skill
│
├── .gitignore
├── LICENSE
├── README.md
└── SETUP_GUIDE.md          # Detailed setup instructions
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
  "skillId": "unit-test-generator",
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

**Error Response:**
```json
{
  "error": "Failed to generate preview. Please check your input and try again."
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
- Results stream back with typewriter animation (10ms per character)

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

## 🏆 Hackathon Submission

This project was built for the **IBM Bob Hackathon 2026** and demonstrates:

- **Innovation** — First centralized marketplace for Bob Skills
- **Technical Excellence** — Modern tech stack with watsonx.ai integration
- **User Experience** — Polished UI with smooth animations and interactions
- **Practical Value** — Solves real developer pain points
- **Scalability** — Extensible architecture for future growth

### Key Achievements

- ✅ **Live Preview Integration** — Real-time skill testing with watsonx.ai
- ✅ **Typewriter Animation** — Streaming-like experience for better UX
- ✅ **Theme Support** — Dark/light mode with persistent preferences
- ✅ **Responsive Design** — Works seamlessly on all devices
- ✅ **Production Ready** — Clean code, error handling, and documentation

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **IBM Bob Team** — For creating an amazing AI coding assistant
- **IBM watsonx.ai** — For powering the live preview feature
- **IBM Cloud** — For hosting and infrastructure
- **Hackathon Organizers** — For the opportunity to build this
- **Open Source Community** — For the amazing tools and libraries

---

## 📧 Contact

Built with ❤️ for the **IBM Bob Hackathon 2026**

- **GitHub**: [@hiamrhex](https://github.com/hiamrhex)
- **Project**: [BobSkills Hub](https://github.com/hiamrhex/bobskills-hub)
- **Demo**: [https://bobskills-hub.vercel.app](https://bobskills-hub.vercel.app) *(update with actual URL)*

---

<div align="center">
  <strong>Stop writing prompts from scratch — find the skill, ship the feature.</strong>
  <br><br>
  <sub>Made with Bob 🤖 | Powered by watsonx.ai 🚀</sub>
</div>