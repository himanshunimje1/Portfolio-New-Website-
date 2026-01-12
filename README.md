# Portfolio Website

A modern, dynamic, and visually stunning portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern and responsive design
- ✨ Smooth animations and transitions
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Fast loading and optimized performance
- 🎯 Interactive elements and dynamic effects
- 🌈 Beautiful gradient backgrounds
- 📊 Animated statistics counters
- 💼 Project showcase section
- 📧 Contact form

## Sections

1. **Hero Section** - Eye-catching introduction with animated elements
2. **About** - Personal information and statistics
3. **Skills** - Technical skills and technologies
4. **Projects** - Featured projects showcase
5. **Contact** - Contact form and social links

## Deployment to GitHub Pages

### Step 1: Initialize Git Repository (if not already done)
```bash
git init
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/himanshunimje1/Portfolio-New-Website-.git
```

### Step 3: Add All Files
```bash
git add .
```

### Step 4: Commit Changes
```bash
git commit -m "Initial portfolio website deployment"
```

### Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select **main** branch
5. Click **Save**

### Step 7: Configure Custom Domain

1. In GitHub Pages settings, enter your custom domain: `himanshunimje.com`
2. The CNAME file is already included in the repository
3. Configure DNS settings in GoDaddy:
   - Add an **A Record** pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a **CNAME Record** pointing to: `himanshunimje1.github.io`

## Customization

### Update Personal Information

1. **Email**: Update the email in `index.html` (search for `your.email@example.com`)
2. **Social Links**: Update GitHub and LinkedIn links in the contact section
3. **Projects**: Replace placeholder projects with your actual projects
4. **Skills**: Modify the skills section to match your expertise
5. **About Section**: Update the about text with your personal information
6. **Statistics**: Update the numbers in the stats section

### Color Scheme

The color scheme can be customized in `styles.css` by modifying the CSS variables in the `:root` selector:

```css
:root {
    --primary-color: #0176D3;
    --primary-dark: #014486;
    --primary-light: #1589EE;
    --accent-color: #0176D3;
    /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, feel free to reach out!


