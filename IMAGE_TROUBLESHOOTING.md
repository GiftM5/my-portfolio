# 🔧 Screenshot Troubleshooting Guide

## ❌ **Common Issues & Solutions:**

### **Issue 1: Screenshots Don't Appear**
**Symptoms:** Placeholder images show instead of your screenshots
**Solutions:**

1. **Check File Location:**
   ```
   ✅ Correct: public/assets/img/cloudsec/week1-aws-console.png
   ❌ Wrong: src/assets/img/cloudsec/week1-aws-console.png
   ```

2. **Move Images to Public Folder:**
   ```bash
   # Create the directory
   mkdir -p public/assets/img/cloudsec
   
   # Copy your images there
   cp your-screenshot.png public/assets/img/cloudsec/week1-aws-console.png
   ```

3. **Check File Names (Case Sensitive):**
   ```
   ✅ week1-aws-console.png
   ❌ Week1-AWS-Console.png
   ❌ week1_aws_console.png
   ```

### **Issue 2: Layout Keeps "Tweaking" (Jumping)**
**Symptoms:** Cards or modal content jumps around
**Solutions:**

1. **Fixed with CSS updates** - I've added:
   - Fixed heights for screenshot containers
   - Stable transform states for hover effects
   - Proper image loading transitions

### **Issue 3: Images Are Too Large/Small**
**Solutions:**
1. **Resize your images** to reasonable dimensions (800x600 or similar)
2. **Compress large files** to under 2MB each

## 🔍 **Quick Test:**

1. **Check if image exists:**
   ```bash
   ls -la public/assets/img/cloudsec/week1-aws-console.png
   ```

2. **Test in browser:**
   - Start your app: `npm start`
   - Go to: `http://localhost:3000/assets/img/cloudsec/week1-aws-console.png`
   - You should see your image directly

## 📁 **Correct File Structure:**

```
my-portfolio/
├── public/
│   └── assets/
│       └── img/
│           └── cloudsec/
│               ├── week1-aws-console.png          ← Your screenshots go here
│               ├── week1-billing-dashboard.png
│               ├── week2-identity-center.png
│               └── ... (all other screenshots)
├── src/
│   └── components/
└── package.json
```

## 🚀 **Step-by-Step Fix:**

### **Step 1: Move Your Screenshots**
```bash
# Navigate to your project
cd my-portfolio

# Create the public directory
mkdir -p public/assets/img/cloudsec

# Copy ALL your screenshots to the public folder
cp /path/to/your/screenshots/* public/assets/img/cloudsec/
```

### **Step 2: Rename Files Correctly**
Make sure each file matches exactly:
- `week1-aws-console.png`
- `week1-billing-dashboard.png`
- `week2-identity-center.png`
- `week2-user-permissions.png`
- etc.

### **Step 3: Test**
```bash
npm start
```
Then:
1. Go to Projects → CloudSec Network tab
2. Click on Week 1
3. Your screenshots should appear in the modal

## 🎯 **Pro Tips:**

### **Image Optimization:**
- **Format:** PNG for screenshots with text, JPG for photos
- **Size:** Keep under 2MB each
- **Dimensions:** 800-1200px width is usually good
- **Compression:** Use tools like TinyPNG if files are too large

### **File Naming:**
- Use **lowercase** letters
- Use **hyphens** instead of spaces or underscores
- Keep names **short but descriptive**
- Match the **exact** names in the code

### **Testing Individual Images:**
You can test each image by going to:
`http://localhost:3000/assets/img/cloudsec/[filename].png`

If the image loads there, it will work in your portfolio!

## 🆘 **Still Having Issues?**

1. **Check browser console** (F12) for error messages
2. **Verify file permissions** - make sure files are readable
3. **Clear browser cache** (Ctrl+F5)
4. **Restart the development server** (Ctrl+C, then `npm start`)

## ✅ **Success Checklist:**
- [ ] Images are in `public/assets/img/cloudsec/`
- [ ] File names match exactly (case-sensitive)
- [ ] Images are under 2MB each
- [ ] Browser console shows no errors
- [ ] Individual image URLs work in browser
- [ ] Portfolio modal shows your screenshots
