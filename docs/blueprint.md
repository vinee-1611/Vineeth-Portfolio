# **App Name**: GattuCloud

## Core Features:

- Home Page: Display a hero section with name, title, a brief introduction, and call-to-action buttons, including link to Resume. Has parallax effect in the background.
- Skills & Tools: Showcase a grid of skills and tools badges/chips, including AWS, Azure, GCP, Python, and more.
- AWS Confidence Highlight: Display a card highlighting AWS expertise with a checklist of core strengths.
- Personal Info: Display placeholders for location, email, phone, GitHub, and LinkedIn, accompanied by a circular headshot.
- Projects Page: Display featured project cards, each with title, impact summary, bullet points, tech stack tags, and action buttons. Displays projects from S3 Bucket Storage, IAM User Creations, and EC2 Instance Creations.
- Navigation: Implement a sticky top navbar with animated buttons/links for Home, Projects, Resume Download, and Personal Info. Has animated buttons/links.
- Interactivity: Smooth scroll for in-page anchor links, toast notification for resume download, modal for project details, and localStorage toggle for glow intensity. All respect reduce-motion preferences.

## Style Guidelines:

- Primary color: Blue-violet (#7350FF), drawing inspiration from futuristic UI and high technology.
- Background color: Deep navy, near-black (#0B1220).
- Accent color: Light Blue (#00E5FF) for highlights and interactive elements.
- Body and headline font: 'Inter', a sans-serif with a neutral, modern look that ensures readability and aligns with the professional tone of the portfolio.
- Use icons to visually represent skills, projects, and contact information. Uses a consistent, modern icon set with 'blue neon' accents.
- Create a two-page layout (Home and Projects) using Tailwind CSS for responsive design. Home contains: Hero, Skills & Tools, AWS Confidence highlight, Personal Info; Projects contains intro and project cards.
- Implement subtle animations, such as hover glows, scale effects, and parallax scrolling. These are performant and respect reduced-motion preferences.