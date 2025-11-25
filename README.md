# 🌧️ Rainy Day Development - Portfolio

A modern, responsive portfolio website showcasing programming competency through design and interactive demonstrations. Built with React and Vite, featuring smooth animations, dark/light mode theming, and a rain-themed visual aesthetic.

## 🎯 Purpose

This portfolio demonstrates:
- **Clean, modern UI/UX design** with attention to visual details
- **Frontend development skills** using React, CSS3, and modern JavaScript
- **Responsive design principles** that work across all devices
- **Interactive animations** and scroll-based effects
- **State management** with React Context API
- **Performance optimization** with Vite and lazy loading

## ✨ Features

- **🌙 Dark/Light Mode** - Seamless theme switching with persistent user preference
- **🎬 Video Background** - Animated rain background in hero section
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile
- **🎨 Smooth Animations** - Intersection Observer-based scroll animations
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **♿ Accessible** - Semantic HTML and ARIA-compliant components

## 🛠️ Tech Stack

- **React 19** - Modern UI library with latest features
- **Vite 7** - Next-generation frontend tooling
- **CSS3** - Custom animations and modern layouts
- **JavaScript (ES6+)** - Clean, maintainable code
- **Context API** - State management for theming

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/jrainey456/portfolio-vibe.git

# Navigate to project directory
cd portfolio-vibe

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio-vibe/
├── public/              # Static assets
├── src/
│   ├── components/      # React components (Header, About, Projects, etc.)
│   ├── contexts/        # React Context providers (ThemeContext)
│   ├── hooks/           # Custom hooks (useIntersectionObserver)
│   ├── App.jsx          # Main app component
│   ├── App.css          # Global styles and animations
│   └── main.jsx         # App entry point
├── index.html           # HTML template
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/App.css` (`:root` and `:root.dark-mode`)
- **Content**: Update component files in `src/components/`
- **Animations**: Modify keyframes and transitions in `src/App.css`
- **Video Background**: Replace `public/rain-background.mp4` with your own video

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**John Rainey**
- GitHub: [@jrainey456](https://github.com/jrainey456)
- LinkedIn: [John Rainey](https://www.linkedin.com/in/john-rainey-a324309a/)

---

*Built with ☔ by Rainy Day Development*
