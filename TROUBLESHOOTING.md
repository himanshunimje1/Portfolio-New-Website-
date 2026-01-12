# Troubleshooting 404 Error

## Step 1: Test GitHub Pages URL First

Before testing the custom domain, verify the GitHub Pages URL works:

**Test this URL:** https://himanshunimje1.github.io/Portfolio-New-Website-/

### If GitHub Pages URL works:
- Your site is live, but custom domain needs time
- DNS propagation can take 24-48 hours
- Continue to Step 2

### If GitHub Pages URL also shows 404:
- GitHub Pages might still be building (wait 5-10 minutes)
- Check repository settings → Pages → verify "main" branch is selected
- Check Actions tab for any build errors

## Step 2: Verify GitHub Pages Settings

1. Go to: https://github.com/himanshunimje1/Portfolio-New-Website-/settings/pages
2. Verify:
   - ✅ Source: "Deploy from a branch"
   - ✅ Branch: "main" selected
   - ✅ Folder: "/ (root)" selected
   - ✅ Custom domain: `himanshunimje.com` is entered
3. If anything is wrong, fix it and click "Save"
4. Wait 2-3 minutes after saving

## Step 3: Check GitHub Actions

1. Go to: https://github.com/himanshunimje1/Portfolio-New-Website-/actions
2. Look for "pages build and deployment" workflow
3. Check if it's:
   - ✅ Green checkmark = Success (wait a few minutes)
   - ❌ Red X = Error (check the error message)
   - ⏳ Yellow circle = In progress (wait)

## Step 4: Verify DNS Configuration

### Check DNS Propagation:
Visit: https://dnschecker.org/#A/himanshunimje.com

Look for A records pointing to:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### If DNS shows different IPs or "Parked":
1. Go to GoDaddy DNS Management
2. Remove/update the A record with "Parked" data
3. Add 4 new A records:
   - Name: `@`
   - Type: `A`
   - Value: `185.199.108.153` (repeat for all 4 IPs)
   - TTL: 1 Hour
4. Save and wait 24-48 hours for propagation

## Step 5: Common Issues & Solutions

### Issue: "404 Site not found" on custom domain
**Solution:**
- First verify GitHub Pages URL works
- Wait 24-48 hours for DNS propagation
- Ensure CNAME file exists in repository (it does ✓)

### Issue: GitHub Pages URL also shows 404
**Solution:**
- Check Actions tab for build errors
- Verify index.html is in root directory (it is ✓)
- Wait 5-10 minutes after enabling Pages
- Try clearing browser cache

### Issue: "Not Secure" warning
**Solution:**
- This is normal initially
- GitHub will provision SSL certificate in 24-48 hours
- After certificate is ready, enable "Enforce HTTPS" in Pages settings

### Issue: Site works on GitHub URL but not custom domain
**Solution:**
- DNS is still propagating (normal, wait 24-48 hours)
- Verify DNS records in GoDaddy match GitHub Pages IPs
- Check DNS propagation status online

## Quick Checklist

- [ ] Test GitHub Pages URL first: https://himanshunimje1.github.io/Portfolio-New-Website-/
- [ ] Verify Pages settings: Branch = main, Folder = / (root)
- [ ] Check GitHub Actions for build status
- [ ] Verify DNS records in GoDaddy
- [ ] Check DNS propagation status
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Clear browser cache and try again

## Still Not Working?

If after 48 hours it's still not working:

1. **Remove and re-add custom domain:**
   - In GitHub Pages settings, click "Remove" on custom domain
   - Wait 1 minute
   - Re-enter `himanshunimje.com`
   - Click "Save"

2. **Verify CNAME file:**
   - Should contain only: `himanshunimje.com`
   - No trailing slash or spaces
   - File should be in root directory

3. **Contact GitHub Support** if issues persist

