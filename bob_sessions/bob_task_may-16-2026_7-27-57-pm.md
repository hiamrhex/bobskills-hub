**User:**

<task>
i want to use a skill feature 
can you hekp me explain how to use it
</task>
<environment_details>
# VSCode Visible Files
client\src\components\BobPreview.jsx

# VSCode Open Tabs
client/src/components/SearchBar.jsx,client/src/components/CategoryFilter.jsx,client/src/components/SkillCard.jsx,client/src/components/SkillGrid.jsx,client/src/components/InstallCommand.jsx,server/routes/skills.js,server/data/skills.json,client/src/components/Icons.jsx,client/src/hooks/useScrollReveal.js,client/src/components/BobPreview.jsx,client/src/index.css,server/package.json,client/src/components/SkillModal.jsx,client/src/main.jsx,server/.env,server/routes/preview.js,server/index.js,client/index.html,client/package.json,README.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-16T18:26:46.067Z
User time zone: Africa/Lagos, UTC+1:00

# Current Cost
$0.00

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>ask</slug>
<name>❓ Ask</name>


# Current Workspace Directory (c:/Users/HP/bobskills) Files
.gitignore
LICENSE
package-lock.json
README.md
SETUP_GUIDE.md
bob_sessions/
bob_sessions/README.md
client/
client/.env.example
client/index.html
client/package-lock.json
client/package.json
client/vite.config.js
client/public/
client/src/
client/src/App.jsx
client/src/index.css
client/src/main.jsx
client/src/components/
client/src/components/BobPreview.jsx
client/src/components/CategoryFilter.jsx
client/src/components/Icons.jsx
client/src/components/InstallCommand.jsx
client/src/components/SearchBar.jsx
client/src/components/SkillCard.jsx
client/src/components/SkillGrid.jsx
client/src/components/SkillModal.jsx
client/src/hooks/
client/src/hooks/useScrollReveal.js
server/
server/.env.example
server/index.js
server/package-lock.json
server/package.json
server/data/
server/data/skills.json
server/routes/
server/routes/preview.js
server/routes/skills.js
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

I'll help you understand how to use the skill feature in this project! Let me first examine the relevant files to provide you with a comprehensive explanation.

<read_file>
<args>
  <file>
    <path>README.md</path>
  </file>
  <file>
    <path>client/src/components/SkillCard.jsx</path>
  </file>
  <file>
    <path>client/src/components/SkillModal.jsx</path>
  </file>
  <file>
    <path>server/data/skills.json</path>
  </file>
  <file>
    <path>client/src/App.jsx</path>
  </file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
<files>
<file><path>README.md</path>
<content lines="1-368">
  1 | # 🚀 BobSkills Hub
  2 | 
  3 | > **The missing layer for IBM Bob** — Discover, preview live, and install production-ready Bob Skills.
  4 | 
  5 | [![IBM Bob Hackathon 2026](https://img.shields.io/badge/IBM%20Bob-Hackathon%202026-7C6AF7?style=flat-square)](https://github.com/hiamrhex/bobskills-hub)
  6 | [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
  7 | [![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
  8 | [![Powered by watsonx.ai](https://img.shields.io/badge/Powered%20by-watsonx.ai-0F62FE?style=flat-square)](https://www.ibm.com/watsonx)
  9 | 
 10 | ---
 11 | 
 12 | ## 📖 Overview
 13 | 
 14 | **BobSkills Hub** is a centralized marketplace for IBM Bob Skills — custom instructions that supercharge Bob's capabilities. Built during the **IBM Bob Hackathon 2026**, this platform lets developers:
 15 | 
 16 | - 🔍 **Browse** a curated collection of production-ready Bob Skills
 17 | - 🎯 **Search & Filter** by category (Testing, Docs, Security, Onboarding, Refactor)
 18 | - ⚡ **Live Preview** skills with watsonx.ai integration before installing
 19 | - 📦 **One-Click Install** with copy-paste commands
 20 | - 🌓 **Dark/Light Mode** for comfortable browsing
 21 | 
 22 | Stop writing prompts from scratch — find the skill, ship the feature.
 23 | 
 24 | ---
 25 | 
 26 | ## ✨ Features
 27 | 
 28 | ### 🎨 Modern UI/UX
 29 | - **Glassmorphic Design** with smooth animations and scroll reveals
 30 | - **Responsive Layout** optimized for desktop and mobile
 31 | - **Theme Toggle** between dark and light modes
 32 | - **Ambient Gradients** for visual depth
 33 | 
 34 | ### 🔍 Smart Discovery
 35 | - **Real-time Search** across skill names and descriptions
 36 | - **Category Filtering** (All, Testing, Docs, Security, Onboarding, Refactor)
 37 | - **Skill Cards** with ratings, install counts, and compatibility info
 38 | - **Detailed Modal Views** with full skill documentation
 39 | 
 40 | ### ⚡ Live Preview with watsonx.ai
 41 | - **Interactive Testing** — paste your code and see the skill in action
 42 | - **IBM Granite 3 Model** (`ibm/granite-3-3-8b-instruct`) for accurate results
 43 | - **Real-time Generation** with streaming-like experience
 44 | - **Example Inputs** provided for each skill
 45 | 
 46 | ### 📦 Easy Installation
 47 | - **Copy-Paste Commands** for instant skill installation
 48 | - **Version Information** and compatibility details
 49 | - **Author Attribution** and last updated timestamps
 50 | 
 51 | ---
 52 | 
 53 | ## 🛠️ Tech Stack
 54 | 
 55 | ### Frontend
 56 | - **React 18** — Modern UI library
 57 | - **Vite** — Lightning-fast build tool
 58 | - **Axios** — HTTP client for API calls
 59 | - **CSS Variables** — Dynamic theming system
 60 | - **Custom Hooks** — `useScrollReveal` for animations
 61 | 
 62 | ### Backend
 63 | - **Node.js** — JavaScript runtime
 64 | - **Express** — Web framework
 65 | - **Axios** — HTTP client for watsonx.ai integration
 66 | - **CORS** — Cross-origin resource sharing
 67 | 
 68 | ### AI Integration
 69 | - **IBM watsonx.ai** — AI model inference
 70 | - **IBM Cloud IAM** — Authentication
 71 | - **Granite 3 Model** — Text generation (`ibm/granite-3-3-8b-instruct`)
 72 | 
 73 | ---
 74 | 
 75 | ## 📦 Installation
 76 | 
 77 | ### Prerequisites
 78 | - **Node.js** 18+ and npm
 79 | - **IBM Cloud Account** with watsonx.ai access
 80 | - **watsonx.ai API Key** and Project ID
 81 | 
 82 | ### 1. Clone the Repository
 83 | ```bash
 84 | git clone https://github.com/hiamrhex/bobskills-hub.git
 85 | cd bobskills-hub
 86 | ```
 87 | 
 88 | ### 2. Install Dependencies
 89 | 
 90 | #### Server
 91 | ```bash
 92 | cd server
 93 | npm install
 94 | ```
 95 | 
 96 | #### Client
 97 | ```bash
 98 | cd ../client
 99 | npm install
100 | ```
101 | 
102 | ### 3. Configure Environment Variables
103 | 
104 | Create a `.env` file in the `server/` directory:
105 | 
106 | ```env
107 | WATSONX_API_KEY=your_watsonx_api_key_here
108 | WATSONX_PROJECT_ID=your_project_id_here
109 | WATSONX_URL=https://us-south.ml.cloud.ibm.com
110 | ```
111 | 
112 | **How to get these values:**
113 | 
114 | 1. **WATSONX_API_KEY**: 
115 |    - Go to [IBM Cloud](https://cloud.ibm.com/)
116 |    - Navigate to **Manage** → **Access (IAM)** → **API keys**
117 |    - Create a new API key or use an existing one
118 | 
119 | 2. **WATSONX_PROJECT_ID**:
120 |    - Go to [watsonx.ai](https://dataplatform.cloud.ibm.com/wx/home)
121 |    - Open your project
122 |    - Copy the Project ID from the project settings
123 | 
124 | 3. **WATSONX_URL**:
125 |    - Use the regional endpoint for your watsonx.ai instance
126 |    - Default: `https://us-south.ml.cloud.ibm.com`
127 |    - Other regions: `https://eu-de.ml.cloud.ibm.com`, `https://jp-tok.ml.cloud.ibm.com`
128 | 
129 | ---
130 | 
131 | ## 🚀 Running Locally
132 | 
133 | ### Development Mode
134 | 
135 | Open **two terminal windows**:
136 | 
137 | #### Terminal 1: Start the Backend Server
138 | ```bash
139 | cd server
140 | npm run dev
141 | ```
142 | Server runs on `http://localhost:3001`
143 | 
144 | #### Terminal 2: Start the Frontend Client
145 | ```bash
146 | cd client
147 | npm run dev
148 | ```
149 | Client runs on `http://localhost:5173`
150 | 
151 | ### Production Build
152 | 
153 | #### Build the Client
154 | ```bash
155 | cd client
156 | npm run build
157 | ```
158 | 
159 | #### Start the Server
160 | ```bash
161 | cd server
162 | npm start
163 | ```
164 | 
165 | ---
166 | 
167 | ## 📁 Project Structure
168 | 
169 | ```
170 | bobskills-hub/
171 | ├── client/                 # React frontend
172 | │   ├── src/
173 | │   │   ├── components/     # React components
174 | │   │   │   ├── BobPreview.jsx       # Live preview with watsonx.ai
175 | │   │   │   ├── CategoryFilter.jsx   # Category filter buttons
176 | │   │   │   ├── Icons.jsx            # SVG icon components
177 | │   │   │   ├── InstallCommand.jsx   # Copy-paste install command
178 | │   │   │   ├── SearchBar.jsx        # Search input
179 | │   │   │   ├── SkillCard.jsx        # Individual skill card
180 | │   │   │   ├── SkillGrid.jsx        # Grid layout for skills
181 | │   │   │   └── SkillModal.jsx       # Detailed skill view
182 | │   │   ├── hooks/
183 | │   │   │   └── useScrollReveal.js   # Scroll animation hook
184 | │   │   ├── App.jsx         # Main app component
185 | │   │   ├── main.jsx        # React entry point
186 | │   │   └── index.css       # Global styles & theme
187 | │   ├── index.html
188 | │   ├── package.json
189 | │   └── vite.config.js      # Vite configuration
190 | │
191 | ├── server/                 # Express backend
192 | │   ├── data/
193 | │   │   └── skills.json     # Skills database
194 | │   ├── routes/
195 | │   │   ├── preview.js      # watsonx.ai preview endpoint
196 | │   │   └── skills.js       # Skills CRUD endpoints
197 | │   ├── index.js            # Server entry point
198 | │   ├── package.json
199 | │   └── .env                # Environment variables (not in git)
200 | │
201 | ├── .gitignore
202 | └── README.md
203 | ```
204 | 
205 | ---
206 | 
207 | ## 🔌 API Endpoints
208 | 
209 | ### Skills API
210 | 
211 | #### `GET /api/skills`
212 | Fetch all skills with optional filtering.
213 | 
214 | **Query Parameters:**
215 | - `search` (optional) — Search term for name/description
216 | - `category` (optional) — Filter by category (Testing, Docs, Security, etc.)
217 | 
218 | **Response:**
219 | ```json
220 | [
221 |   {
222 |     "id": "unit-test-generator",
223 |     "name": "Unit Test Generator",
224 |     "category": "Testing",
225 |     "description": "Generates comprehensive unit tests...",
226 |     "rating": 4.9,
227 |     "installs": 541,
228 |     "tags": ["testing", "jest", "vitest"],
229 |     "compatible_with": ["JavaScript", "TypeScript", "Python"],
230 |     "version": "1.2.0",
231 |     "author": "BobSkills Community",
232 |     "last_updated": "2026-05-12",
233 |     "example_input": "function calculateDiscount(...) {...}",
234 |     "skill_md": "---\nname: unit-test-generator\n..."
235 |   }
236 | ]
237 | ```
238 | 
239 | ### Preview API
240 | 
241 | #### `POST /api/preview`
242 | Generate live preview using watsonx.ai.
243 | 
244 | **Request Body:**
245 | ```json
246 | {
247 |   "skillMd": "---\nname: unit-test-generator\n...",
248 |   "code": "function calculateDiscount(price, userTier) {...}"
249 | }
250 | ```
251 | 
252 | **Response:**
253 | ```json
254 | {
255 |   "output": "Generated test cases:\n\ndescribe('calculateDiscount', () => {\n  test('applies 20% discount for premium users', () => {\n    expect(calculateDiscount(100, 'premium')).toBe(80);\n  });\n  ...\n});"
256 | }
257 | ```
258 | 
259 | ---
260 | 
261 | ## 🎯 How It Works
262 | 
263 | ### 1. Browse Skills
264 | - Skills are loaded from `server/data/skills.json`
265 | - Real-time search and category filtering on the frontend
266 | - Smooth scroll animations reveal content as you browse
267 | 
268 | ### 2. Preview with watsonx.ai
269 | - Click "Try Live Preview" on any skill card
270 | - Paste your code or use the provided example
271 | - Backend calls IBM watsonx.ai API with:
272 |   - **Model**: `ibm/granite-3-3-8b-instruct`
273 |   - **Input**: Skill markdown + your code
274 |   - **Parameters**: `max_new_tokens: 1000`, `temperature: 0.7`
275 | - Results stream back to the frontend
276 | 
277 | ### 3. Install Skills
278 | - Copy the install command from the modal
279 | - Paste into your Bob configuration
280 | - Start using the skill immediately
281 | 
282 | ---
283 | 
284 | ## 🧩 Adding New Skills
285 | 
286 | To add a new skill to the hub:
287 | 
288 | 1. Open `server/data/skills.json`
289 | 2. Add a new skill object with the following structure:
290 | 
291 | ```json
292 | {
293 |   "id": "your-skill-id",
294 |   "name": "Your Skill Name",
295 |   "category": "Testing|Docs|Security|Onboarding|Refactor",
296 |   "description": "Brief description of what the skill does",
297 |   "rating": 4.5,
298 |   "installs": 0,
299 |   "tags": ["tag1", "tag2"],
300 |   "compatible_with": ["JavaScript", "TypeScript"],
301 |   "version": "1.0.0",
302 |   "author": "Your Name",
303 |   "last_updated": "2026-05-16",
304 |   "example_input": "Sample code for preview",
305 |   "skill_md": "---\nname: your-skill-id\ndescription: ...\n---\n\nYour skill instructions here..."
306 | }
307 | ```
308 | 
309 | 3. Restart the server to see your new skill
310 | 
311 | ---
312 | 
313 | ## 🌟 Featured Skills
314 | 
315 | - **Unit Test Generator** — Comprehensive test coverage for any function
316 | - **Legacy Code Explainer** — Decode cryptic code in plain English
317 | - **API Documentation Writer** — Auto-generate API docs from route handlers
318 | - **PR Impact Analyzer** — Assess the blast radius of code changes
319 | - **Security Vulnerability Scanner** — Detect common security issues
320 | - **Onboarding Buddy** — Generate setup guides for new team members
321 | - **Code Smell Detector** — Identify anti-patterns and suggest refactors
322 | - **Dependency Updater** — Safe dependency upgrade recommendations
323 | 
324 | ---
325 | 
326 | ## 🤝 Contributing
327 | 
328 | Contributions are welcome! Here's how you can help:
329 | 
330 | 1. **Fork the repository**
331 | 2. **Create a feature branch** (`git checkout -b feature/amazing-skill`)
332 | 3. **Add your skill** to `server/data/skills.json`
333 | 4. **Test locally** to ensure it works
334 | 5. **Commit your changes** (`git commit -m 'Add amazing skill'`)
335 | 6. **Push to the branch** (`git push origin feature/amazing-skill`)
336 | 7. **Open a Pull Request**
337 | 
338 | ---
339 | 
340 | ## 📝 License
341 | 
342 | This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.
343 | 
344 | ---
345 | 
346 | ## 🙏 Acknowledgments
347 | 
348 | - **IBM Bob Team** — For creating an amazing AI coding assistant
349 | - **IBM watsonx.ai** — For powering the live preview feature
350 | - **IBM Cloud** — For hosting and infrastructure
351 | - **Hackathon Organizers** — For the opportunity to build this
352 | 
353 | ---
354 | 
355 | ## 📧 Contact
356 | 
357 | Built with ❤️ for the **IBM Bob Hackathon 2026**
358 | 
359 | - **GitHub**: [@hiamrhex](https://github.com/hiamrhex)
360 | - **Project**: [BobSkills Hub](https://github.com/hiamrhex/bobskills-hub)
361 | 
362 | ---
363 | 
364 | <div align="center">
365 |   <strong>Stop writing prompts from scratch — find the skill, ship the feature.</strong>
366 |   <br><br>
367 |   <sub>Made with Bob 🤖</sub>
368 | </div>
</content>
</file>
<file><path>client/src/components/SkillCard.jsx</path>
<content lines="1-142">
  1 | import { useState } from 'react';
  2 | import { useScrollReveal } from '../hooks/useScrollReveal';
  3 | import { StarIcon, ArrowRight } from './Icons';
  4 | 
  5 | const CAT = {
  6 |   Testing:    { color: 'var(--cat-testing)',   bg: 'rgba(74,222,128,0.07)'   },
  7 |   Docs:       { color: 'var(--cat-docs)',      bg: 'rgba(129,140,248,0.07)'  },
  8 |   Security:   { color: 'var(--cat-security)', bg: 'rgba(248,113,113,0.07)'  },
  9 |   Onboarding: { color: 'var(--cat-onboard)',  bg: 'rgba(251,146,60,0.07)'   },
 10 |   Refactor:   { color: 'var(--cat-refactor)', bg: 'rgba(96,165,250,0.07)'   },
 11 | };
 12 | 
 13 | export default function SkillCard({ skill, onClick, index = 0 }) {
 14 |   const [hovered, setHovered] = useState(false);
 15 |   const [ref, visible] = useScrollReveal(index * 50);
 16 |   const cat = CAT[skill.category] || CAT.Docs;
 17 | 
 18 |   return (
 19 |     <div
 20 |       ref={ref}
 21 |       className={`reveal ${visible ? 'visible' : ''}`}
 22 |       onClick={onClick}
 23 |       onMouseEnter={() => setHovered(true)}
 24 |       onMouseLeave={() => setHovered(false)}
 25 |       style={{
 26 |         background: hovered ? 'var(--bg-hover)' : 'var(--bg-card)',
 27 |         border: `1px solid ${hovered ? 'var(--border-hover)' : 'var(--border)'}`,
 28 |         borderRadius: 14,
 29 |         padding: '1.4rem 1.5rem',
 30 |         cursor: 'pointer',
 31 |         position: 'relative',
 32 |         overflow: 'hidden',
 33 |         transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
 34 |         boxShadow: hovered ? 'var(--shadow-lift)' : 'var(--shadow-card)',
 35 |         transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
 36 |         transitionDelay: `${index * 0.025}s`,
 37 |         display: 'flex', flexDirection: 'column',
 38 |       }}
 39 |     >
 40 |       {/* Top accent line — animated opacity */}
 41 |       <div style={{
 42 |         position: 'absolute', top: 0, left: 0, right: 0, height: 1.5,
 43 |         background: `linear-gradient(90deg, transparent 0%, ${cat.color} 40%, ${cat.color} 60%, transparent 100%)`,
 44 |         opacity: hovered ? 0.9 : 0.3,
 45 |         transition: 'opacity 0.3s',
 46 |       }} />
 47 | 
 48 |       {/* Subtle glow on hover */}
 49 |       {hovered && (
 50 |         <div style={{
 51 |           position: 'absolute', top: 0, left: '50%',
 52 |           transform: 'translateX(-50%)',
 53 |           width: '60%', height: 80,
 54 |           background: `radial-gradient(ellipse at 50% 0%, ${cat.color}18 0%, transparent 70%)`,
 55 |           pointerEvents: 'none',
 56 |         }} />
 57 |       )}
 58 | 
 59 |       {/* Header row */}
 60 |       <div style={{
 61 |         display: 'flex', alignItems: 'center',
 62 |         justifyContent: 'space-between',
 63 |         marginBottom: 13,
 64 |       }}>
 65 |         <span style={{
 66 |           display: 'inline-flex', alignItems: 'center', gap: 5,
 67 |           fontSize: 9, fontWeight: 600,
 68 |           fontFamily: 'var(--mono)', letterSpacing: '0.9px',
 69 |           textTransform: 'uppercase',
 70 |           color: cat.color,
 71 |           background: cat.bg,
 72 |           padding: '3px 9px', borderRadius: 5,
 73 |           border: `1px solid ${cat.color}22`,
 74 |         }}>
 75 |           {skill.category}
 76 |         </span>
 77 |         <span style={{
 78 |           display: 'flex', alignItems: 'center', gap: 3.5,
 79 |           fontSize: 11, color: 'var(--text-3)',
 80 |           fontFamily: 'var(--mono)',
 81 |         }}>
 82 |           <StarIcon size={9} />
 83 |           {skill.rating}
 84 |         </span>
 85 |       </div>
 86 | 
 87 |       {/* Title */}
 88 |       <h3 style={{
 89 |         fontSize: 14.5, fontWeight: 600,
 90 |         color: 'var(--text-1)',
 91 |         letterSpacing: '-0.3px',
 92 |         lineHeight: 1.4,
 93 |         marginBottom: 9,
 94 |       }}>
 95 |         {skill.name}
 96 |       </h3>
 97 | 
 98 |       {/* Description */}
 99 |       <p style={{
100 |         fontSize: 12.5,
101 |         color: 'var(--text-2)',
102 |         lineHeight: 1.75,
103 |         flex: 1,
104 |         marginBottom: 18,
105 |       }}>
106 |         {skill.description}
107 |       </p>
108 | 
109 |       {/* Footer */}
110 |       <div style={{
111 |         display: 'flex', alignItems: 'center',
112 |         justifyContent: 'space-between',
113 |         paddingTop: 13,
114 |         borderTop: '1px solid var(--border)',
115 |       }}>
116 |         <span style={{
117 |           fontSize: 10.5, color: 'var(--text-3)',
118 |           fontFamily: 'var(--mono)',
119 |         }}>
120 |           {skill.installs?.toLocaleString() ?? '0'} installs
121 |         </span>
122 | 
123 |         <div style={{
124 |           display: 'flex', alignItems: 'center', gap: 5,
125 |           fontSize: 11, fontFamily: 'var(--mono)',
126 |           color: hovered ? cat.color : 'var(--text-3)',
127 |           fontWeight: 500,
128 |           transition: 'color 0.22s',
129 |         }}>
130 |           Preview
131 |           <div style={{
132 |             transform: hovered ? 'translateX(4px)' : 'translateX(0)',
133 |             transition: 'transform 0.22s cubic-bezier(0.16,1,0.3,1)',
134 |             display: 'flex', alignItems: 'center',
135 |           }}>
136 |             <ArrowRight size={10} />
137 |           </div>
138 |         </div>
139 |       </div>
140 |     </div>
141 |   );
142 | }
</content>
</file>
<file><path>client/src/components/SkillModal.jsx</path>
<content lines="1-235">
  1 | import { useEffect, useState } from 'react';
  2 | import BobPreview from './BobPreview';
  3 | import InstallCommand from './InstallCommand';
  4 | import { CloseIcon, StarIcon } from './Icons';
  5 | 
  6 | const CAT_COLOR = {
  7 |   Testing:    '#4ade80',
  8 |   Docs:       '#818cf8',
  9 |   Security:   '#f87171',
 10 |   Onboarding: '#fb923c',
 11 |   Refactor:   '#60a5fa',
 12 | };
 13 | 
 14 | const TABS = ['Overview', 'SKILL.md', 'Preview', 'Install'];
 15 | 
 16 | export default function SkillModal({ skill, onClose }) {
 17 |   const [tab, setTab] = useState('Overview');
 18 |   const [code, setCode] = useState(skill.example_input || '');
 19 |   const color = CAT_COLOR[skill.category] || '#818cf8';
 20 | 
 21 |   useEffect(() => {
 22 |     const fn = e => e.key === 'Escape' && onClose();
 23 |     document.addEventListener('keydown', fn);
 24 |     document.body.style.overflow = 'hidden';
 25 |     return () => {
 26 |       document.removeEventListener('keydown', fn);
 27 |       document.body.style.overflow = '';
 28 |     };
 29 |   }, [onClose]);
 30 | 
 31 |   return (
 32 |     <div
 33 |       className="fade-in"
 34 |       onClick={e => e.target === e.currentTarget && onClose()}
 35 |       style={{
 36 |         position: 'fixed', inset: 0, zIndex: 100,
 37 |         background: 'rgba(0,0,0,0.75)',
 38 |         backdropFilter: 'blur(12px)',
 39 |         WebkitBackdropFilter: 'blur(12px)',
 40 |         display: 'flex', alignItems: 'center', justifyContent: 'center',
 41 |         padding: '1.5rem',
 42 |       }}
 43 |     >
 44 |       <div
 45 |         className="scale-in"
 46 |         style={{
 47 |           background: 'var(--bg-modal)',
 48 |           border: '1px solid var(--border-hover)',
 49 |           borderRadius: 18,
 50 |           width: '100%', maxWidth: 720,
 51 |           maxHeight: '88vh',
 52 |           position: 'relative',
 53 |           display: 'flex', flexDirection: 'column',
 54 |           boxShadow: 'var(--shadow-modal)',
 55 |           overflow: 'hidden',
 56 |         }}
 57 |       >
 58 |         {/* Top accent line */}
 59 |         <div style={{
 60 |           height: 2,
 61 |           background: `linear-gradient(90deg, transparent 0%, ${color} 30%, ${color} 70%, transparent 100%)`,
 62 |           opacity: 0.7,
 63 |           flexShrink: 0,
 64 |         }} />
 65 | 
 66 |         {/* Header */}
 67 |         <div style={{
 68 |           padding: '1.4rem 1.75rem 0',
 69 |           borderBottom: '1px solid var(--border)',
 70 |           flexShrink: 0,
 71 |         }}>
 72 |           <div style={{
 73 |             display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
 74 |             marginBottom: '1.1rem',
 75 |           }}>
 76 |             <div style={{ flex: 1, minWidth: 0 }}>
 77 |               <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
 78 |                 <span style={{
 79 |                   fontSize: 9, fontWeight: 600, textTransform: 'uppercase',
 80 |                   color, fontFamily: 'var(--mono)', letterSpacing: '0.9px',
 81 |                   background: color + '12',
 82 |                   border: `1px solid ${color}30`,
 83 |                   padding: '2px 8px', borderRadius: 5,
 84 |                 }}>
 85 |                   {skill.category}
 86 |                 </span>
 87 |                 <span style={{
 88 |                   display: 'flex', alignItems: 'center', gap: 3,
 89 |                   fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--mono)',
 90 |                 }}>
 91 |                   <StarIcon size={9} />
 92 |                   {skill.rating}
 93 |                 </span>
 94 |                 <span style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>
 95 |                   · {skill.installs?.toLocaleString() ?? '0'} installs
 96 |                 </span>
 97 |               </div>
 98 |               <h2 style={{
 99 |                 fontSize: 19, fontWeight: 700,
100 |                 letterSpacing: '-0.5px',
101 |                 color: 'var(--text-1)',
102 |                 lineHeight: 1.3,
103 |               }}>
104 |                 {skill.name}
105 |               </h2>
106 |             </div>
107 | 
108 |             <button
109 |               onClick={onClose}
110 |               style={{
111 |                 width: 32, height: 32, borderRadius: 8, flexShrink: 0, marginLeft: 16,
112 |                 border: '1px solid var(--border)',
113 |                 background: 'transparent', cursor: 'pointer',
114 |                 color: 'var(--text-3)',
115 |                 display: 'flex', alignItems: 'center', justifyContent: 'center',
116 |                 transition: 'all 0.15s',
117 |               }}
118 |               onMouseEnter={e => {
119 |                 e.currentTarget.style.borderColor = 'var(--border-hover)';
120 |                 e.currentTarget.style.color = 'var(--text-1)';
121 |                 e.currentTarget.style.background = 'var(--bg-surface)';
122 |               }}
123 |               onMouseLeave={e => {
124 |                 e.currentTarget.style.borderColor = 'var(--border)';
125 |                 e.currentTarget.style.color = 'var(--text-3)';
126 |                 e.currentTarget.style.background = 'transparent';
127 |               }}
128 |             >
129 |               <CloseIcon size={13} />
130 |             </button>
131 |           </div>
132 | 
133 |           {/* Tabs */}
134 |           <div style={{ display: 'flex', gap: 2, marginBottom: -1 }}>
135 |             {TABS.map(t => (
136 |               <button
137 |                 key={t}
138 |                 onClick={() => setTab(t)}
139 |                 className={`tab-btn ${tab === t ? 'active' : ''}`}
140 |                 style={{
141 |                   borderBottom: tab === t
142 |                     ? `2px solid ${color}`
143 |                     : '2px solid transparent',
144 |                   borderRadius: '7px 7px 0 0',
145 |                 }}
146 |               >
147 |                 {t}
148 |               </button>
149 |             ))}
150 |           </div>
151 |         </div>
152 | 
153 |         {/* Content */}
154 |         <div style={{
155 |           padding: '1.6rem 1.75rem',
156 |           overflowY: 'auto',
157 |           flex: 1,
158 |         }}>
159 |           {tab === 'Overview' && (
160 |             <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
161 |               <p style={{
162 |                 fontSize: 13.5, color: 'var(--text-2)',
163 |                 lineHeight: 1.8, marginBottom: '1.5rem',
164 |               }}>
165 |                 {skill.description}
166 |               </p>
167 | 
168 |               {/* Tags */}
169 |               {skill.tags?.length > 0 && (
170 |                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
171 |                   {skill.tags.map(tag => (
172 |                     <span key={tag} style={{
173 |                       fontSize: 11, fontFamily: 'var(--mono)',
174 |                       color: 'var(--text-3)',
175 |                       background: 'var(--bg-surface)',
176 |                       border: '1px solid var(--border)',
177 |                       padding: '3px 10px', borderRadius: 6,
178 |                     }}>
179 |                       #{tag}
180 |                     </span>
181 |                   ))}
182 |                 </div>
183 |               )}
184 |             </div>
185 |           )}
186 | 
187 |           {tab === 'SKILL.md' && (
188 |             <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
189 |               <pre style={{
190 |                 background: '#03030c',
191 |                 border: '1px solid var(--border)',
192 |                 borderRadius: 10, padding: '1.25rem',
193 |                 fontSize: 11.5, color: '#a5b4fc',
194 |                 overflowX: 'auto', lineHeight: 1.85,
195 |                 fontFamily: 'var(--mono)', whiteSpace: 'pre-wrap',
196 |               }}>
197 |                 {skill.skill_md}
198 |               </pre>
199 |             </div>
200 |           )}
201 | 
202 |           {tab === 'Preview' && (
203 |             <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
204 |               <BobPreview skill={skill} code={code} setCode={setCode} />
205 |             </div>
206 |           )}
207 | 
208 |           {tab === 'Install' && (
209 |             <div style={{ animation: 'fadeUp 0.3s cubic-bezier(0.16,1,0.3,1) both' }}>
210 |               <p style={{
211 |                 fontSize: 13, color: 'var(--text-2)',
212 |                 lineHeight: 1.75, marginBottom: '1.25rem',
213 |               }}>
214 |                 Run this command in your terminal to install this skill globally.
215 |                 Bob will auto-activate it when a task matches the skill description.
216 |               </p>
217 |               <InstallCommand skillId={skill.id} />
218 | 
219 |               <div style={{
220 |                 marginTop: '1.25rem', padding: '1rem 1.25rem',
221 |                 background: 'var(--bg-surface)',
222 |                 border: '1px solid var(--border)',
223 |                 borderRadius: 10, fontSize: 12,
224 |                 color: 'var(--text-2)', lineHeight: 1.7,
225 |                 fontFamily: 'var(--mono)',
226 |               }}>
227 |                 <span style={{ color: 'var(--accent)' }}>~/.bob/skills/</span>{skill.id}/SKILL.md
228 |               </div>
229 |             </div>
230 |           )}
231 |         </div>
232 |       </div>
233 |     </div>
234 |   );
235 | }
</content>
</file>
<file><path>server/data/skills.json</path>
<content lines="1-152">
  1 | [
  2 |   {
  3 |     "id": "legacy-code-explainer",
  4 |     "name": "Legacy Code Explainer",
  5 |     "category": "Docs",
  6 |     "description": "Explains what legacy or unfamiliar code does in plain English — functions, side effects, and gotchas included.",
  7 |     "rating": 4.8,
  8 |     "installs": 312,
  9 |     "tags": ["legacy", "documentation", "onboarding"],
 10 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Java"],
 11 |     "version": "1.0.0",
 12 |     "author": "BobSkills Community",
 13 |     "last_updated": "2026-05-10",
 14 |     "example_input": "function x(a,b){var c=[];for(var i=0;i<a.length;i++){if(a[i]>b)c.push(a[i]);}return c;}",
 15 |     "skill_md": "---\nname: legacy-code-explainer\ndescription: Explains what legacy or unfamiliar code does in plain English\nauthor: BobSkills Community\nversion: 1.0.0\n---\n\nAnalyze the provided code and produce a clear explanation:\n\n- What this code does (1-2 sentence summary)\n- Function-by-function or block-by-block breakdown\n- Any hidden side effects or global state mutations\n- Known risks or code smells\n- Suggested renames for clarity if names are cryptic\n\n<Steps>\n  <Step>Read through the full code without assumptions</Step>\n  <Step>Identify the entry point and execution flow</Step>\n  <Step>Document each logical block in plain English</Step>\n  <Step>Flag anything dangerous or surprising</Step>\n  <Step>Return structured explanation</Step>\n</Steps>"
 16 |   },
 17 |   {
 18 |     "id": "unit-test-generator",
 19 |     "name": "Unit Test Generator",
 20 |     "category": "Testing",
 21 |     "description": "Generates comprehensive unit tests for any function or module — happy path, edge cases, and error conditions.",
 22 |     "rating": 4.9,
 23 |     "installs": 541,
 24 |     "tags": ["testing", "jest", "vitest", "qa", "coverage"],
 25 |     "compatible_with": ["JavaScript", "TypeScript", "Python"],
 26 |     "version": "1.2.0",
 27 |     "author": "BobSkills Community",
 28 |     "last_updated": "2026-05-12",
 29 |     "example_input": "function calculateDiscount(price, userTier) {\n  if (userTier === 'premium') return price * 0.8;\n  if (userTier === 'basic') return price * 0.9;\n  return price;\n}",
 30 |     "skill_md": "---\nname: unit-test-generator\ndescription: Generates comprehensive unit tests for any function or module\nauthor: BobSkills Community\nversion: 1.2.0\n---\n\nGenerate unit tests for the provided code:\n\n- Detect the language and testing framework in use (Jest, Vitest, Mocha, pytest)\n- Cover: happy path, boundary values, null/undefined inputs, error throwing\n- Use descriptive test names that read like documentation\n- Mock external dependencies where appropriate\n- Output a ready-to-run test file\n\n<Steps>\n  <Step>Identify language, framework, and function signatures</Step>\n  <Step>List all meaningful test cases before writing code</Step>\n  <Step>Write happy path tests first</Step>\n  <Step>Add edge case and error condition tests</Step>\n  <Step>Output complete test file with imports</Step>\n</Steps>"
 31 |   },
 32 |   {
 33 |     "id": "api-documentation-writer",
 34 |     "name": "API Documentation Writer",
 35 |     "category": "Docs",
 36 |     "description": "Produces clean, structured API documentation from route handlers or controller code — with params, responses, and examples.",
 37 |     "rating": 4.7,
 38 |     "installs": 289,
 39 |     "tags": ["documentation", "api", "readme", "swagger"],
 40 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Go"],
 41 |     "version": "1.0.0",
 42 |     "author": "BobSkills Community",
 43 |     "last_updated": "2026-05-09",
 44 |     "example_input": "router.post('/login', async (req, res) => {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  if (!user) return res.status(404).json({ error: 'User not found' });\n  res.json({ token: generateToken(user) });\n});",
 45 |     "skill_md": "---\nname: api-documentation-writer\ndescription: Produces clean, structured API documentation from route handlers or controller code\nauthor: BobSkills Community\nversion: 1.0.0\n---\n\nGenerate API documentation for the provided route or controller:\n\n- Endpoint: method + path\n- Description: what this route does\n- Request: headers, params, query, body with types\n- Response: status codes, response shape, example JSON\n- Error cases: what fails and why\n- Output in Markdown format suitable for README or Notion\n\n<Steps>\n  <Step>Identify all routes and HTTP methods</Step>\n  <Step>Extract request parameters and body schema</Step>\n  <Step>Document all response shapes and status codes</Step>\n  <Step>Write example request and response blocks</Step>\n  <Step>Output clean Markdown documentation</Step>\n</Steps>"
 46 |   },
 47 |   {
 48 |     "id": "pr-impact-analyzer",
 49 |     "name": "PR Impact Analyzer",
 50 |     "category": "Refactor",
 51 |     "description": "Analyzes a code diff or PR and summarizes the impact — what changed, what could break, and what reviewers should focus on.",
 52 |     "rating": 4.6,
 53 |     "installs": 198,
 54 |     "tags": ["pull request", "code review", "git", "diff"],
 55 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Java", "Go"],
 56 |     "version": "1.0.0",
 57 |     "author": "BobSkills Community",
 58 |     "last_updated": "2026-05-08",
 59 |     "example_input": "- removed: if (user.role === 'admin') return next();\n+ added: if (user.role === 'admin' || user.beta === true) return next();",
 60 |     "skill_md": "---\nname: pr-impact-analyzer\ndescription: Analyzes a code diff or PR and summarizes impact\nauthor: BobSkills Community\nversion: 1.0.0\n---\n\nAnalyze the provided diff or PR code:\n\n- Summarize what changed in plain English (2-3 sentences)\n- Identify files or modules with highest blast radius\n- Flag any deleted or modified public interfaces\n- Highlight anything requiring a migration or config change\n- Suggest what tests should be run or added\n- Rate risk level: Low / Medium / High\n\n<Steps>\n  <Step>Parse the diff and categorize changes by type</Step>\n  <Step>Identify public-facing changes vs internal refactors</Step>\n  <Step>Assess downstream impact on callers and consumers</Step>\n  <Step>Flag missing tests or documentation updates</Step>\n  <Step>Output structured impact report with risk rating</Step>\n</Steps>"
 61 |   },
 62 |   {
 63 |     "id": "security-vulnerability-scanner",
 64 |     "name": "Security Vulnerability Scanner",
 65 |     "category": "Security",
 66 |     "description": "Scans code for common security vulnerabilities — injection, auth flaws, exposed secrets, and OWASP Top 10 patterns.",
 67 |     "rating": 4.9,
 68 |     "installs": 467,
 69 |     "tags": ["security", "vulnerability", "owasp", "audit", "injection"],
 70 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Java"],
 71 |     "version": "1.3.0",
 72 |     "author": "BobSkills Community",
 73 |     "last_updated": "2026-05-14",
 74 |     "example_input": "app.get('/user', (req, res) => {\n  const id = req.query.id;\n  db.query('SELECT * FROM users WHERE id = ' + id, (err, result) => {\n    res.json(result);\n  });\n});",
 75 |     "skill_md": "---\nname: security-vulnerability-scanner\ndescription: Scans code for common security vulnerabilities — injection, auth flaws, exposed secrets, OWASP Top 10\nauthor: BobSkills Community\nversion: 1.3.0\n---\n\nScan the provided code for security issues:\n\n- SQL / NoSQL / command injection vectors\n- Hardcoded secrets, tokens, or credentials\n- Insecure direct object references\n- Missing input validation or sanitization\n- Auth and authz bypass risks\n- Output: severity (Critical / High / Medium / Low) + line reference + fix suggestion\n\n<Steps>\n  <Step>Scan for injection patterns and unsanitized inputs</Step>\n  <Step>Search for hardcoded credentials or env leaks</Step>\n  <Step>Check authentication and authorization logic</Step>\n  <Step>Review third-party imports for known risk patterns</Step>\n  <Step>Output prioritized vulnerability report with fixes</Step>\n</Steps>"
 76 |   },
 77 |   {
 78 |     "id": "feature-implementation-planner",
 79 |     "name": "Feature Implementation Planner",
 80 |     "category": "Onboarding",
 81 |     "description": "Takes a feature description and produces a step-by-step implementation plan with file changes, risks, and time estimates.",
 82 |     "rating": 4.5,
 83 |     "installs": 156,
 84 |     "tags": ["planning", "architecture", "feature", "roadmap"],
 85 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Any"],
 86 |     "version": "1.0.0",
 87 |     "author": "BobSkills Community",
 88 |     "last_updated": "2026-05-07",
 89 |     "example_input": "Feature: Add JWT authentication to an Express API. Users should be able to register, login, and access protected routes.",
 90 |     "skill_md": "---\nname: feature-implementation-planner\ndescription: Takes a feature description and produces a step-by-step implementation plan\nauthor: BobSkills Community\nversion: 1.0.0\n---\n\nProduce an implementation plan for the described feature:\n\n- Break feature into discrete, sequenced tasks\n- For each task: what files change, what the change is, estimated effort\n- Identify blockers and dependencies between tasks\n- Flag integration risks or areas needing extra care\n- Suggest a testing strategy\n- Output as a numbered checklist ready to execute\n\n<Steps>\n  <Step>Parse the feature description and identify scope boundaries</Step>\n  <Step>List all affected modules, routes, components, or schemas</Step>\n  <Step>Sequence tasks in dependency order</Step>\n  <Step>Estimate effort per task as S, M, or L</Step>\n  <Step>Output executable checklist with risk flags</Step>\n</Steps>"
 91 |   },
 92 |   {
 93 |     "id": "bug-root-cause-tracer",
 94 |     "name": "Bug Root Cause Tracer",
 95 |     "category": "Testing",
 96 |     "description": "Given a bug description and relevant code, traces the root cause, explains the failure chain, and suggests a fix.",
 97 |     "rating": 4.8,
 98 |     "installs": 334,
 99 |     "tags": ["debugging", "bug", "root cause", "fix"],
100 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Java"],
101 |     "version": "1.1.0",
102 |     "author": "BobSkills Community",
103 |     "last_updated": "2026-05-11",
104 |     "example_input": "Bug: JWT token is valid but /api/profile returns 401. Code:\nconst token = req.headers.authorization;\nconst decoded = jwt.verify(token, process.env.SECRET);",
105 |     "skill_md": "---\nname: bug-root-cause-tracer\ndescription: Traces a bug to its root cause, explains the failure chain, and suggests a fix\nauthor: BobSkills Community\nversion: 1.1.0\n---\n\nTrace the root cause of the described bug:\n\n- Restate what the bug actually is, not just symptoms\n- Walk through the failure chain: what triggers what\n- Identify the exact line or condition causing the failure\n- Explain why the current code behaves this way\n- Propose a minimal fix\n- Note any related code that may have the same issue\n\n<Steps>\n  <Step>Understand the expected vs actual behavior</Step>\n  <Step>Trace execution path from trigger to failure</Step>\n  <Step>Identify the root cause line or condition</Step>\n  <Step>Propose fix with minimal side effects</Step>\n  <Step>Check for similar patterns elsewhere in code</Step>\n</Steps>"
106 |   },
107 |   {
108 |     "id": "onboarding-guide-builder",
109 |     "name": "Onboarding Guide Builder",
110 |     "category": "Onboarding",
111 |     "description": "Reads a codebase or module and generates a new-developer onboarding guide — architecture, setup steps, and where to start.",
112 |     "rating": 4.6,
113 |     "installs": 223,
114 |     "tags": ["onboarding", "documentation", "new developer", "setup"],
115 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Any"],
116 |     "version": "1.0.0",
117 |     "author": "BobSkills Community",
118 |     "last_updated": "2026-05-06",
119 |     "example_input": "Project: Express REST API with MongoDB. Stack: Node.js, Express, Mongoose, ESM. Has routes for users, products, orders.",
120 |     "skill_md": "---\nname: onboarding-guide-builder\ndescription: Generates a new-developer onboarding guide from a codebase or module description\nauthor: BobSkills Community\nversion: 1.0.0\n---\n\nGenerate an onboarding guide for the provided codebase or module:\n\n- Project purpose in 2 sentences\n- Tech stack summary\n- Local setup steps (numbered, copy-pasteable)\n- Folder structure walkthrough: what lives where and why\n- Key files every dev must understand first\n- Common tasks: how to add a route, component, or test\n- Where NOT to touch and why\n\n<Steps>\n  <Step>Identify the tech stack and project type</Step>\n  <Step>Extract setup requirements from config files</Step>\n  <Step>Map the folder structure to responsibilities</Step>\n  <Step>Identify the 5 most important files for a new dev</Step>\n  <Step>Output complete onboarding guide in Markdown</Step>\n</Steps>"
121 |   },
122 |   {
123 |     "id": "code-review-assistant",
124 |     "name": "Code Review Assistant",
125 |     "category": "Refactor",
126 |     "description": "Reviews any code submission like a senior engineer — flags bugs, bad patterns, naming issues, and suggests concrete improvements.",
127 |     "rating": 4.9,
128 |     "installs": 612,
129 |     "tags": ["code review", "refactor", "best practices", "senior engineer"],
130 |     "compatible_with": ["JavaScript", "TypeScript", "Python", "Java", "Go"],
131 |     "version": "1.1.0",
132 |     "author": "BobSkills Community",
133 |     "last_updated": "2026-05-13",
134 |     "example_input": "function getData(u) {\n  var d = db.find(u);\n  if (d != null) {\n    return d;\n  } else {\n    return null;\n  }\n}",
135 |     "skill_md": "---\nname: code-review-assistant\ndescription: Reviews code like a senior engineer — bugs, bad patterns, naming issues, concrete improvements\nauthor: BobSkills Community\nversion: 1.1.0\n---\n\nReview the provided code as a senior engineer would:\n\n- Identify bugs or logic errors\n- Flag violations of clean code principles (naming, single responsibility, DRY)\n- Spot performance issues or unnecessary complexity\n- Note missing error handling or edge case gaps\n- Suggest concrete rewrites for the worst offenders\n- Rate overall code quality: Poor / Needs Work / Good / Excellent\n\n<Steps>\n  <Step>Read the full code and understand its intent</Step>\n  <Step>List all bugs and logic errors found</Step>\n  <Step>Flag style, naming, and structural issues</Step>\n  <Step>Identify missing error handling or edge cases</Step>\n  <Step>Write improved version of the worst sections</Step>\n  <Step>Output structured review with overall quality rating</Step>\n</Steps>"
136 |   },
137 |   {
138 |     "id": "database-schema-designer",
139 |     "name": "Database Schema Designer",
140 |     "category": "Docs",
141 |     "description": "Takes a plain English description of your data and produces a clean, normalized database schema with field types, relationships, and indexes.",
142 |     "rating": 4.7,
143 |     "installs": 378,
144 |     "tags": ["database", "schema", "sql", "mongodb", "design"],
145 |     "compatible_with": ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
146 |     "version": "1.0.0",
147 |     "author": "BobSkills Community",
148 |     "last_updated": "2026-05-15",
149 |     "example_input": "I need a database for a food delivery app. Users can place orders containing multiple items from restaurants. Each restaurant has a menu. Riders deliver orders.",
150 |     "skill_md": "---\nname: database-schema-designer\ndescription: Converts plain English data descriptions into clean, normalized database schemas\nauthor: BobSkills Community\nversion: 1.0.0\n---\n\nDesign a database schema for the described system:\n\n- Identify all entities and their attributes\n- Define relationships: one-to-one, one-to-many, many-to-many\n- Choose appropriate field types for each column\n- Apply normalization (avoid redundancy)\n- Suggest indexes for performance-critical fields\n- Output as SQL CREATE TABLE statements or Mongoose schemas depending on DB choice\n- Include an entity relationship summary in plain English\n\n<Steps>\n  <Step>Extract all entities from the description</Step>\n  <Step>Define attributes and data types for each entity</Step>\n  <Step>Map relationships and foreign keys</Step>\n  <Step>Normalize to at least 3NF where applicable</Step>\n  <Step>Suggest indexes on frequently queried fields</Step>\n  <Step>Output schema in the requested format with ER summary</Step>\n</Steps>"
151 |   }
152 | ]
</content>
</file>
<file><path>client/src/App.jsx</path>
<content lines="1-348">
  1 | import { useState, useEffect } from 'react';
  2 | import axios from 'axios';
  3 | import SearchBar from './components/SearchBar';
  4 | import CategoryFilter from './components/CategoryFilter';
  5 | import SkillGrid from './components/SkillGrid';
  6 | import SkillModal from './components/SkillModal';
  7 | import { GithubIcon, SunIcon, MoonIcon, GridIcon } from './components/Icons';
  8 | import { useScrollReveal } from './hooks/useScrollReveal';
  9 | 
 10 | const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
 11 | const CATEGORIES = ['All', 'Testing', 'Docs', 'Security', 'Onboarding', 'Refactor'];
 12 | 
 13 | const STATS = [
 14 |   { value: '8+',   label: 'Curated Skills'  },
 15 |   { value: '100%', label: 'Bob Native'       },
 16 |   { value: '48h',  label: 'Hackathon Built'  },
 17 | ];
 18 | 
 19 | export default function App() {
 20 |   const [skills, setSkills]     = useState([]);
 21 |   const [search, setSearch]     = useState('');
 22 |   const [category, setCategory] = useState('All');
 23 |   const [selected, setSelected] = useState(null);
 24 |   const [theme, setTheme]       = useState('dark');
 25 |   const [loading, setLoading]   = useState(true);
 26 | 
 27 |   const [heroRef,  heroVisible]  = useScrollReveal(0);
 28 |   const [statsRef, statsVisible] = useScrollReveal(100);
 29 |   const [gridRef,  gridVisible]  = useScrollReveal(60);
 30 | 
 31 |   useEffect(() => {
 32 |     document.documentElement.setAttribute('data-theme', theme);
 33 |   }, [theme]);
 34 | 
 35 |   useEffect(() => {
 36 |     setLoading(true);
 37 |     axios
 38 |       .get(`${API_URL}/api/skills?search=${search}&category=${category}`)
 39 |       .then(r => { setSkills(r.data); setLoading(false); })
 40 |       .catch(() => setLoading(false));
 41 |   }, [search, category]);
 42 | 
 43 |   const isDark = theme === 'dark';
 44 | 
 45 |   return (
 46 |     <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>
 47 | 
 48 |       {/* Deep ambient glow */}
 49 |       <div style={{
 50 |         position: 'fixed', top: 0, left: '50%',
 51 |         transform: 'translateX(-50%)',
 52 |         width: 900, height: 600,
 53 |         background: 'radial-gradient(ellipse at 50% 0%, rgba(124,106,247,0.1) 0%, transparent 65%)',
 54 |         pointerEvents: 'none', zIndex: 0,
 55 |       }} />
 56 |       <div style={{
 57 |         position: 'fixed', bottom: 0, right: 0,
 58 |         width: 500, height: 400,
 59 |         background: 'radial-gradient(ellipse at 100% 100%, rgba(124,106,247,0.05) 0%, transparent 70%)',
 60 |         pointerEvents: 'none', zIndex: 0,
 61 |       }} />
 62 | 
 63 |       {/* ── Nav ── */}
 64 |       <nav style={{
 65 |         position: 'sticky', top: 0, zIndex: 50,
 66 |         height: 54,
 67 |         background: 'var(--nav-bg)',
 68 |         backdropFilter: 'blur(28px)',
 69 |         WebkitBackdropFilter: 'blur(28px)',
 70 |         borderBottom: '1px solid var(--border)',
 71 |         padding: '0 2rem',
 72 |         display: 'flex', alignItems: 'center', justifyContent: 'space-between',
 73 |         transition: 'background 0.4s',
 74 |       }}>
 75 |         {/* Logo */}
 76 |         <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
 77 |           <div style={{
 78 |             width: 26, height: 26, borderRadius: 8,
 79 |             background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
 80 |             display: 'flex', alignItems: 'center', justifyContent: 'center',
 81 |             boxShadow: '0 0 16px var(--accent-glow)',
 82 |             flexShrink: 0,
 83 |           }}>
 84 |             <GridIcon size={13} />
 85 |           </div>
 86 |           <span style={{
 87 |             fontSize: 14.5, fontWeight: 700,
 88 |             letterSpacing: '-0.4px',
 89 |             color: 'var(--text-1)',
 90 |           }}>
 91 |             BobSkills Hub
 92 |           </span>
 93 |           <span style={{
 94 |             fontSize: 9, fontFamily: 'var(--mono)',
 95 |             color: 'var(--accent)', letterSpacing: '0.8px',
 96 |             background: 'var(--accent-dim)',
 97 |             border: '1px solid rgba(124,106,247,0.18)',
 98 |             padding: '2px 7px', borderRadius: 4,
 99 |             textTransform: 'uppercase',
100 |           }}>
101 |             beta
102 |           </span>
103 |         </div>
104 | 
105 |         {/* Right */}
106 |         <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
107 |           {/* IBM BOB · HACKATHON 2026 */}
108 |           <span style={{
109 |             fontSize: 9.5, fontFamily: 'var(--mono)',
110 |             color: 'var(--text-3)', letterSpacing: '0.8px',
111 |             textTransform: 'uppercase',
112 |             display: 'none',
113 |           }}
114 |           className="nav-hack-label"
115 |           >
116 |             IBM BOB · HACKATHON 2026
117 |           </span>
118 | 
119 |           <a
120 |             href="https://github.com/hiamrhex/bobskills-hub"
121 |             target="_blank"
122 |             rel="noreferrer"
123 |             title="View on GitHub"
124 |             style={{
125 |               display: 'flex', alignItems: 'center', gap: 6,
126 |               padding: '6px 12px', borderRadius: 8,
127 |               border: '1px solid var(--border)',
128 |               color: 'var(--text-2)',
129 |               fontSize: 12, fontWeight: 500,
130 |               textDecoration: 'none',
131 |               transition: 'all 0.2s',
132 |               background: 'transparent',
133 |             }}
134 |             onMouseEnter={e => {
135 |               e.currentTarget.style.borderColor = 'var(--border-hover)';
136 |               e.currentTarget.style.color = 'var(--text-1)';
137 |               e.currentTarget.style.background = 'var(--bg-surface)';
138 |             }}
139 |             onMouseLeave={e => {
140 |               e.currentTarget.style.borderColor = 'var(--border)';
141 |               e.currentTarget.style.color = 'var(--text-2)';
142 |               e.currentTarget.style.background = 'transparent';
143 |             }}
144 |           >
145 |             <GithubIcon size={14} />
146 |             <span>GitHub</span>
147 |           </a>
148 | 
149 |           <button
150 |             onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
151 |             title="Toggle theme"
152 |             style={{
153 |               width: 34, height: 34, borderRadius: 8,
154 |               border: '1px solid var(--border)',
155 |               background: 'transparent',
156 |               cursor: 'pointer',
157 |               color: 'var(--text-2)',
158 |               display: 'flex', alignItems: 'center', justifyContent: 'center',
159 |               transition: 'all 0.2s',
160 |             }}
161 |             onMouseEnter={e => {
162 |               e.currentTarget.style.borderColor = 'var(--border-hover)';
163 |               e.currentTarget.style.color = 'var(--text-1)';
164 |               e.currentTarget.style.background = 'var(--bg-surface)';
165 |             }}
166 |             onMouseLeave={e => {
167 |               e.currentTarget.style.borderColor = 'var(--border)';
168 |               e.currentTarget.style.color = 'var(--text-2)';
169 |               e.currentTarget.style.background = 'transparent';
170 |             }}
171 |           >
172 |             {isDark ? <SunIcon size={14} /> : <MoonIcon size={14} />}
173 |           </button>
174 |         </div>
175 |       </nav>
176 | 
177 |       {/* ── Hero ── */}
178 |       <section
179 |         ref={heroRef}
180 |         className={`reveal ${heroVisible ? 'visible' : ''}`}
181 |         style={{
182 |           position: 'relative', zIndex: 1,
183 |           maxWidth: 820, margin: '0 auto',
184 |           padding: '96px 2rem 56px',
185 |           textAlign: 'center',
186 |         }}
187 |       >
188 |         {/* Badge */}
189 |         <div className="fade-up" style={{
190 |           display: 'inline-flex', alignItems: 'center', gap: 8,
191 |           fontSize: 10, fontFamily: 'var(--mono)',
192 |           color: 'var(--accent)', letterSpacing: '1.2px',
193 |           textTransform: 'uppercase',
194 |           background: 'var(--accent-dim)',
195 |           border: '1px solid rgba(124,106,247,0.2)',
196 |           padding: '5px 13px', borderRadius: 100,
197 |           marginBottom: 34,
198 |         }}>
199 |           <span style={{
200 |             width: 5, height: 5, borderRadius: '50%',
201 |             background: 'var(--accent)',
202 |             display: 'inline-block',
203 |             animation: 'pulse 2.2s ease infinite',
204 |           }} />
205 |           IBM Bob Hackathon 2026
206 |         </div>
207 | 
208 |         {/* Headline */}
209 |         <h1 className="fade-up" style={{
210 |           fontSize: 'clamp(38px, 6.5vw, 66px)',
211 |           fontWeight: 700,
212 |           letterSpacing: '-3px',
213 |           lineHeight: 1.07,
214 |           color: 'var(--text-1)',
215 |           marginBottom: 20,
216 |           animationDelay: '0.07s',
217 |         }}>
218 |           The missing layer
219 |           <br />
220 |           <span style={{
221 |             background: 'linear-gradient(128deg, var(--accent) 0%, var(--accent-2) 55%, var(--accent-3) 100%)',
222 |             WebkitBackgroundClip: 'text',
223 |             WebkitTextFillColor: 'transparent',
224 |             backgroundClip: 'text',
225 |           }}>
226 |             for IBM Bob.
227 |           </span>
228 |         </h1>
229 | 
230 |         {/* Sub */}
231 |         <p className="fade-up" style={{
232 |           fontSize: 15.5,
233 |           color: 'var(--text-2)',
234 |           lineHeight: 1.85,
235 |           maxWidth: 440,
236 |           margin: '0 auto 50px',
237 |           animationDelay: '0.14s',
238 |         }}>
239 |           Discover, preview live, and install production-ready Bob Skills.
240 |           Stop writing prompts from scratch — find the skill, ship the feature.
241 |         </p>
242 | 
243 |         {/* Search */}
244 |         <div className="fade-up" style={{ animationDelay: '0.2s' }}>
245 |           <SearchBar value={search} onChange={setSearch} />
246 |         </div>
247 | 
248 |         {/* Filters */}
249 |         <div className="fade-up" style={{ marginTop: 16, animationDelay: '0.26s' }}>
250 |           <CategoryFilter categories={CATEGORIES} active={category} onChange={setCategory} />
251 |         </div>
252 |       </section>
253 | 
254 |       {/* ── Stats ── */}
255 |       <div
256 |         ref={statsRef}
257 |         style={{
258 |           position: 'relative', zIndex: 1,
259 |           maxWidth: 820, margin: '0 auto',
260 |           padding: '0 2rem 52px',
261 |         }}
262 |       >
263 |         <div style={{
264 |           display: 'flex',
265 |           border: '1px solid var(--border)',
266 |           borderRadius: 12, overflow: 'hidden',
267 |           background: 'var(--bg-card)',
268 |         }}>
269 |           {STATS.map((s, i) => (
270 |             <div
271 |               key={s.label}
272 |               className={`reveal ${statsVisible ? 'visible' : ''}`}
273 |               style={{
274 |                 flex: 1, padding: '18px 0',
275 |                 textAlign: 'center',
276 |                 borderRight: i < STATS.length - 1 ? '1px solid var(--border)' : 'none',
277 |                 transitionDelay: `${i * 70}ms`,
278 |               }}
279 |             >
280 |               <div style={{
281 |                 fontSize: 21, fontWeight: 700,
282 |                 letterSpacing: '-0.8px',
283 |                 color: 'var(--text-1)',
284 |                 marginBottom: 3,
285 |                 fontFamily: 'var(--mono)',
286 |               }}>
287 |                 {s.value}
288 |               </div>
289 |               <div style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '0.3px' }}>
290 |                 {s.label}
291 |               </div>
292 |             </div>
293 |           ))}
294 |         </div>
295 |       </div>
296 | 
297 |       {/* ── Grid ── */}
298 |       <section
299 |         ref={gridRef}
300 |         className={`reveal ${gridVisible ? 'visible' : ''}`}
301 |         style={{
302 |           position: 'relative', zIndex: 1,
303 |           maxWidth: 1080, margin: '0 auto',
304 |           padding: '0 2rem 10rem',
305 |         }}
306 |       >
307 |         {/* Section header */}
308 |         <div style={{
309 |           display: 'flex', alignItems: 'center',
310 |           justifyContent: 'space-between',
311 |           marginBottom: 20, paddingBottom: 16,
312 |           borderBottom: '1px solid var(--border)',
313 |         }}>
314 |           <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
315 |             <span style={{
316 |               fontSize: 10.5, fontFamily: 'var(--mono)',
317 |               color: 'var(--text-3)', letterSpacing: '0.6px',
318 |               textTransform: 'uppercase',
319 |             }}>
320 |               Skills
321 |             </span>
322 |             <span style={{
323 |               fontSize: 9.5, fontFamily: 'var(--mono)',
324 |               color: 'var(--accent)',
325 |               background: 'var(--accent-dim)',
326 |               padding: '1.5px 7px', borderRadius: 4,
327 |               border: '1px solid rgba(124,106,247,0.15)',
328 |             }}>
329 |               {skills.length}
330 |             </span>
331 |           </div>
332 |           <span style={{
333 |             fontSize: 9.5, fontFamily: 'var(--mono)',
334 |             color: 'var(--text-3)', letterSpacing: '0.5px',
335 |           }}>
336 |             BOBSKILLS HUB · v1.0
337 |           </span>
338 |         </div>
339 | 
340 |         <SkillGrid skills={skills} loading={loading} onSelect={setSelected} />
341 |       </section>
342 | 
343 |       {selected && (
344 |         <SkillModal skill={selected} onClose={() => setSelected(null)} />
345 |       )}
346 |     </div>
347 |   );
348 | }
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
client\src\components\BobPreview.jsx

# VSCode Open Tabs
client/src/components/SearchBar.jsx,client/src/components/CategoryFilter.jsx,client/src/components/SkillCard.jsx,client/src/components/SkillGrid.jsx,client/src/components/InstallCommand.jsx,server/routes/skills.js,server/data/skills.json,client/src/components/Icons.jsx,client/src/hooks/useScrollReveal.js,client/src/components/BobPreview.jsx,client/src/index.css,server/package.json,client/src/components/SkillModal.jsx,client/src/main.jsx,server/.env,server/routes/preview.js,server/index.js,client/index.html,client/package.json,README.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-16T18:27:02.928Z
User time zone: Africa/Lagos, UTC+1:00

# Current Cost
$0.02

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>ask</slug>
<name>❓ Ask</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

# How to Use the BobSkills Hub Skill Feature

Based on the codebase, here's a comprehensive guide on how to use the skill feature in BobSkills Hub:

## 🎯 Overview

BobSkills Hub is a marketplace for IBM Bob Skills — custom instructions that enhance Bob's capabilities. The platform allows you to **browse**, **preview**, **and install** production-ready skills.

---

## 📋 Using Skills: Step-by-Step

### 1. **Browse Available Skills**

The platform displays skills in a grid layout with the following information:
- **Category badge** (Testing, Docs, Security, Onboarding, Refactor)
- **Rating** (out of 5 stars)
- **Skill name** and description
- **Install count**

**Available Skills Include:**
- Unit Test Generator
- Legacy Code Explainer
- API Documentation Writer
- Security Vulnerability Scanner
- Bug Root Cause Tracer
- Code Review Assistant
- Database Schema Designer
- And more...

### 2. **Search & Filter Skills**

**Search:**
- Use the search bar to find skills by name or description
- Real-time filtering as you type

**Filter by Category:**
- Click category buttons: All, Testing, Docs, Security, Onboarding, Refactor
- Instantly filters the skill grid

### 3. **View Skill Details**

Click any skill card to open a detailed modal with **4 tabs**:

#### **Overview Tab**
- Full description of what the skill does
- Tags showing compatible technologies
- Use cases and capabilities

#### **SKILL.md Tab**
- Complete skill markdown file
- Shows the exact instructions Bob will use
- Includes steps and implementation details

#### **Preview Tab** ⚡
- **Live testing with IBM watsonx.ai**
- Paste your code or use the provided example
- Click "Generate Preview" to see the skill in action
- Powered by IBM Granite 3 model (`ibm/granite-3-3-8b-instruct`)
- Real-time AI-generated results

#### **Install Tab** 📦
- Copy-paste installation command
- Shows where the skill will be installed: `~/.bob/skills/{skill-id}/SKILL.md`

### 4. **Test a Skill (Live Preview)**

```mermaid
graph LR
    A[Select Skill] --> B[Click Preview Tab]
    B --> C[Paste Your Code]
    C --> D[Click Generate Preview]
    D --> E[watsonx.ai Processes]
    E --> F[View Results]
    F --> G{Satisfied?}
    G -->|Yes| H[Install Skill]
    G -->|No| C
```

**Example Flow:**
1. Open "Unit Test Generator" skill
2. Navigate to "Preview" tab
3. Paste your function code (or use the example)
4. Click "Generate Preview"
5. See comprehensive unit tests generated instantly

### 5. **Install a Skill**

Once you've tested and are satisfied:

1. Go to the **Install** tab
2. Copy the installation command (format: `bob install {skill-id}`)
3. Run it in your terminal
4. The skill is now available in your Bob configuration

**Installation Path:**
```
~/.bob/skills/{skill-id}/SKILL.md
```

---

## 🔧 Technical Details

### How Skills Work

Each skill contains:
- **Metadata**: name, category, version, author, compatibility
- **Instructions**: Step-by-step guidance for Bob
- **Example Input**: Sample code for testing
- **SKILL.md**: The actual skill file Bob reads

### API Integration

The platform uses two main endpoints:

**GET `/api/skills`**
- Fetches all skills
- Supports `?search=` and `?category=` parameters

**POST `/api/preview`**
- Sends skill markdown + your code to watsonx.ai
- Returns AI-generated output
- Uses IBM Granite 3 model with:
  - `max_new_tokens: 1000`
  - `temperature: 0.7`

---

## 💡 Best Practices

1. **Always preview before installing** — Test with your actual code
2. **Check compatibility** — Ensure the skill supports your language/framework
3. **Read the SKILL.md** — Understand what instructions Bob will follow
4. **Start with high-rated skills** — Community-validated quality
5. **Use category filters** — Quickly find skills for your specific need

---

## 🎨 UI Features

- **Dark/Light Mode** — Toggle in the top-right corner
- **Smooth Animations** — Scroll reveals and hover effects
- **Responsive Design** — Works on desktop and mobile
- **Glassmorphic Cards** — Modern, clean interface

---

## 📊 Skill Categories Explained

| Category | Purpose | Example Skills |
|----------|---------|----------------|
| **Testing** | Generate tests, find bugs | Unit Test Generator, Bug Root Cause Tracer |
| **Docs** | Create documentation | API Documentation Writer, Legacy Code Explainer |
| **Security** | Find vulnerabilities | Security Vulnerability Scanner |
| **Onboarding** | Help new developers | Onboarding Guide Builder, Feature Implementation Planner |
| **Refactor** | Improve code quality | Code Review Assistant, PR Impact Analyzer |

---

## 🚀 Quick Start Example

Let's say you want to generate unit tests:

1. **Search** for "test" or filter by "Testing" category
2. **Click** "Unit Test Generator" card
3. **Navigate** to "Preview" tab
4. **Paste** your function:
   ```javascript
   function calculateDiscount(price, userTier) {
     if (userTier === 'premium') return price * 0.8;
     if (userTier === 'basic') return price * 0.9;
     return price;
   }
   ```
5. **Click** "Generate Preview"
6. **Review** the generated tests
7. **Go to** "Install" tab
8. **Copy** and run: `bob install unit-test-generator`
9. **Done!** Bob can now generate tests automatically

---

## 🔗 Additional Resources

- **GitHub Repository**: [hiamrhex/bobskills-hub](https://github.com/hiamrhex/bobskills-hub)
- **Setup Guide**: See [`SETUP_GUIDE.md`](SETUP_GUIDE.md) for local development
- **Add New Skills**: Edit [`server/data/skills.json`](server/data/skills.json)

---

The skill feature is designed to be intuitive — browse, preview with AI, and install with one command. The live preview powered by watsonx.ai ensures you know exactly what you're getting before installation! 🎉

---

**User:**

[ERROR] You did not use a tool in your previous response! Please retry with a tool use.

# Reminder: Instructions for Tool Use

Tool uses are formatted using XML-style tags. The tool name itself becomes the XML tag name. Each parameter is enclosed within its own set of tags. Here's the structure:

<actual_tool_name>
<parameter1_name>value1</parameter1_name>
<parameter2_name>value2</parameter2_name>
...
</actual_tool_name>

For example, to use the attempt_completion tool:

<attempt_completion>
<result>
I have completed the task...
</result>
</attempt_completion>

Always use the actual tool name as the XML tag name for proper parsing and execution.

# Next Steps

If you have completed the user's task, use the attempt_completion tool.
If you require additional information from the user, use the ask_followup_question tool.
Otherwise, if you have not completed the task and do not need additional information, then proceed with the next step of the task.
(This is an automated message, so do not respond to it conversationally.)
<environment_details>
# VSCode Visible Files
client\src\components\BobPreview.jsx

# VSCode Open Tabs
client/src/components/SearchBar.jsx,client/src/components/CategoryFilter.jsx,client/src/components/SkillCard.jsx,client/src/components/SkillGrid.jsx,client/src/components/InstallCommand.jsx,server/routes/skills.js,server/data/skills.json,client/src/components/Icons.jsx,client/src/hooks/useScrollReveal.js,client/src/components/BobPreview.jsx,client/src/index.css,server/package.json,client/src/components/SkillModal.jsx,client/src/main.jsx,server/.env,server/routes/preview.js,server/index.js,client/index.html,client/package.json,README.md

# Current Time
Current time in ISO 8601 UTC format: 2026-05-16T18:27:42.650Z
User time zone: Africa/Lagos, UTC+1:00

# Current Cost
$0.10

# Review Exclusions
The following file patterns are excluded from code reviews:
- .vscode/**

# Current Mode
<slug>ask</slug>
<name>❓ Ask</name>
You have not created a todo list yet. Create one with `update_todo_list` if your task is complicated or involves multiple steps.
</environment_details>

---

**Assistant:**

<attempt_completion>
<result>
I've explained how to use the BobSkills Hub skill feature:

**Core Workflow:**
1. **Browse** skills in the grid (10 production-ready skills available)
2. **Search/Filter** by keyword or category (Testing, Docs, Security, Onboarding, Refactor)
3. **Click** any skill card to open detailed modal with 4 tabs:
   - Overview: Description and tags
   - SKILL.md: Full skill instructions
   - Preview: Live AI testing with watsonx.ai
   - Install: Copy-paste command
4. **Test** skills with your code using the Preview tab (powered by IBM Granite 3)
5. **Install** via command: `bob install {skill-id}`

**Key Features:**
- Live preview with IBM watsonx.ai before installing
- Real-time search and category filtering
- Dark/light mode toggle
- Responsive glassmorphic UI
- 10 curated skills covering testing, documentation, security, onboarding, and refactoring

The platform makes it easy to discover, test, and install Bob Skills without writing prompts from scratch.
</result>
</attempt_completion>

