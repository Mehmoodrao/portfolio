# 🚀 Professional Portfolio Website

A beautiful, responsive portfolio website built with React and Node.js, featuring custom CSS styling without Tailwind.

## ✨ Features

- **Sticky Navigation Header** - Beautiful gradient header with smooth scrolling navigation
- **Introduction Section** - Eye-catching hero section with call-to-action buttons
- **Experience & Qualifications** - Timeline-based layout for work experience and education
- **Skills Section** - Interactive skill cards with progress bars and technical proficiency
- **Projects Gallery** - Showcase your work with project cards, technologies, and links
- **Contact Form** - Functional contact form with social media links
- **Fully Responsive** - Mobile-friendly design that works on all devices
- **Custom CSS** - Beautiful animations and transitions without any framework

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Custom CSS with animations
- **Build Tool**: React Scripts
- **Node.js**: For running the development server

## 📦 Installation

1. **Navigate to the project folder**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Getting Started

### Development Mode
```bash
npm start
```
The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Introduction.js & Introduction.css
│   │   ├── Experience.js & Experience.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   └── Contact.js & Contact.css
│   ├── App.js & App.css
│   ├── index.js
│── package.json
└── README.md
```

## 🎨 Customization

### Update Your Information

1. **Introduction Section** - Edit `src/components/Introduction.js`:
   - Change your name and title
   - Update the description
   - Modify button links

2. **Experience Section** - Edit `src/components/Experience.js`:
   - Add your work experiences
   - Add your qualifications
   - Update dates and descriptions

3. **Skills Section** - Edit `src/components/Skills.js`:
   - Add your technical skills
   - Update skill categories
   - Modify proficiency percentages

4. **Projects Section** - Edit `src/components/Projects.js`:
   - Add your projects
   - Update project descriptions
   - Add demo and GitHub links

5. **Contact Section** - Edit `src/components/Contact.js`:
   - Update contact details
   - Add social media links
   - Set up form submission

## 🎨 Color Scheme

The portfolio uses a beautiful purple gradient:
- Primary: `#667eea` (Indigo)
- Secondary: `#764ba2` (Purple)
- Accent: `#ffd700` (Gold)

To change colors, update the CSS gradient values in the component CSS files.

## 📱 Responsive Design

The website is fully responsive and includes breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (<768px)

## 🌟 Features Highlights

- **Sticky Header** with smooth navigation
- **Smooth Scrolling** between sections
- **Animated Elements** for visual appeal
- **Progress Bars** for skill representation
- **Timeline Layout** for experience
- **Social Media Links** with hover effects
- **Contact Form** with validation
- **Mobile Hamburger Menu** for small screens

## 📝 Notes

- The contact form currently logs data to the console. Integrate with a backend service (Nodemailer, Formspree, etc.) for email functionality
- Replace placeholder data with your actual information
- Update social media and demo links in each section
- Add your actual profile image/avatar

## 🚀 Deployment

To deploy your portfolio:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to:
   - Vercel (recommended for React)
   - Netlify
   - GitHub Pages
   - Any static hosting service

## 📞 Support

Feel free to customize the colors, fonts, and layout to match your personal brand!

---

**Happy coding! 🎉**
