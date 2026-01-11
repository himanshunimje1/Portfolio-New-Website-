# GitHub Pages Setup Guide

## Enable GitHub Pages

Your portfolio is currently disabled. Follow these steps to enable it:

### Step 1: Enable GitHub Pages

1. Go to your repository: https://github.com/himanshunimje1/Portfolio-New-Website-
2. Click on **Settings** (top navigation)
3. Scroll down to **Pages** (left sidebar, under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` from the dropdown
   - **Folder**: Select `/ (root)`
5. Click **Save**

### Step 2: Wait for Deployment

- GitHub Pages will take 1-2 minutes to build and deploy
- You'll see a green checkmark when it's ready
- Your site will be live at: `https://himanshunimje1.github.io/Portfolio-New-Website-/`

### Step 3: Configure Custom Domain

1. Still in the **Pages** settings, scroll to **Custom domain**
2. Enter: `himanshunimje.com`
3. Check **Enforce HTTPS** (will be available after DNS is configured)
4. Click **Save**

### Step 4: Verify DNS Configuration

Make sure your GoDaddy DNS is configured with:

**A Records** (Name: `@`):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME Record** (Name: `www`):
- Points to: `himanshunimje1.github.io`

### Step 5: Test Your Site

1. **GitHub Pages URL**: https://himanshunimje1.github.io/Portfolio-New-Website-/
   - Should work immediately after enabling Pages

2. **Custom Domain**: https://himanshunimje.com
   - May take 24-48 hours for DNS to propagate globally
   - Check propagation: https://dnschecker.org/#A/himanshunimje.com

## Troubleshooting

### Site shows 404
- Wait 1-2 minutes after enabling Pages
- Check that `main` branch is selected
- Verify files are in the root directory

### Custom domain not working
- Verify DNS records in GoDaddy
- Wait up to 48 hours for DNS propagation
- Check DNS propagation status online

### Images not showing
- Make sure images are in the `images/` folder
- Check image file names match exactly (case-sensitive)
- Verify images are committed and pushed to GitHub

## Quick Checklist

- [ ] GitHub Pages enabled with `main` branch
- [ ] Custom domain configured in GitHub
- [ ] DNS A records added in GoDaddy
- [ ] CNAME file exists in repository (already done ✓)
- [ ] Images added to `images/` folder (optional)
- [ ] Site tested on GitHub Pages URL
- [ ] Custom domain tested (after DNS propagation)

