# Professional Card Maker 


![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
[![GitHub License](https://img.shields.io/github/license/Rohit03022006/Professional_Card_Maker)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/Rohit03022006/Professional_Card_Maker)](https://github.com/Rohit03022006/Professional_Card_Maker/issues)

---
A modern React application for creating professional digital business cards with QR code functionality, built with Vite and containerized with Docker for optimal performance.
---
![App Screenshot](https://github.com/Rohit03022006/Professional_Card_Maker/blob/main/Screenshot%20from%202025-07-26%2004-22-45.png?raw=true)


## Features
- Dynamic business card form with real-time preview
- Drag & drop profile photo upload
- QR code generation with customization options
- Fully responsive design (mobile-first approach)
- Docker container support for easy deployment
- Comprehensive form validation
- Blazing fast performance with Vite
- Theme customization support

## Quick Start

### Prerequisites
- Node.js v18+
- Docker v20+
- npm v9+ or pnpm v8+
---
### Project Structure
```
professional-card-maker/
├── src/
│ ├── assets/ # Static assets
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom React hooks
│ ├── styles/ # Global styles
│ ├── utils/ # Utility functions
│ ├── App.jsx # Main application component
│ └── main.jsx # Application entry point
├── public/ # Public assets
├── .dockerignore
├── Dockerfile
├── vite.config.js # Vite configuration
└── package.json
```
---

### Local Development
```bash

git clone https://github.com/Rohit03022006/Professional_Card_Maker.git
cd Professional_Card_Maker

npm install  # or pnpm install

npm run dev
```
---

### Docker Deployment
- Building and Running
```
docker build -t professional_card .
docker run -d -p 3000:80 --name pro_card professional_card:latest
docker ps          # Verify container is running

http://localhost:3000
```
---

## Future Improvements
### Core Features
| Feature               | Status     | Tech Stack          |
|-----------------------|------------|---------------------|
| PDF Export           | Planned    | `react-pdf`         |
| Dark Mode            | In Progress| CSS Variables       |
| Social Media Links   | Backlog    | Icon Library        |
| AI Bio Generator     | Research   | OpenAI API          |

---

### Technical Roadmap
```mermaid
gantt
    title Development Timeline
    dateFormat  YYYY-MM-DD
    section v1.3
    PDF Export       :done, 2024-09-01, 14d
    section v1.4
    Dark Mode       :active, 2024-10-01, 7d
    Performance Opt :2024-10-08, 10d
    section v2.0
    AI Integration   :2024-11-01, 21d
```
### Infrastructure Upgrades
- [ ] Multi-arch Docker builds (`docker buildx`)
- [ ] Kubernetes Helm charts
- [ ] GitHub Actions CI/CD pipeline
---
