# 🚀 Deploy to Hugging Face Spaces

This guide will help you deploy your portfolio to Hugging Face Spaces.

## 📋 Prerequisites

1. **Hugging Face Account**: Create an account at [huggingface.co](https://huggingface.co)
2. **Git**: Make sure Git is installed on your system
3. **Node.js**: Ensure Node.js is installed (version 16 or higher)

## 🛠️ Deployment Steps

### Step 1: Create a New Space

1. Go to [Hugging Face Spaces](https://huggingface.co/spaces)
2. Click **"Create new Space"**
3. Fill in the details:
   - **Space name**: `mohamed-muhusin-portfolio` (or your preferred name)
   - **License**: MIT
   - **SDK**: Static
   - **Hardware**: CPU Basic (free tier)
4. Click **"Create Space"**

### Step 2: Clone Your Space Repository

```bash
# Clone the empty space repository
git clone https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME
cd YOUR_SPACE_NAME
```

### Step 3: Copy Your Portfolio Files

Copy all files from your portfolio directory to the cloned space directory:

```bash
# Copy all files except node_modules and dist
cp -r /path/to/your/portfolio/* .
```

### Step 4: Initialize Git and Push

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio deployment"

# Add Hugging Face remote
git remote add origin https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME

# Push to Hugging Face
git push -u origin main
```

### Step 5: Configure Space Settings

1. Go to your Space settings
2. Set **"SDK"** to **"Static"**
3. Set **"Hardware"** to **"CPU Basic"** (free tier)
4. Save settings

## 🔧 Alternative: Direct Upload Method

If you prefer not to use Git:

1. **Build your project locally**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your Hugging Face Space
3. **Upload the `README.md`** file to the root of your Space
4. **Upload `package.json`** and other necessary files

## 📁 Required Files for Hugging Face Spaces

Make sure these files are in your Space:

- ✅ `README.md` (with proper frontmatter)
- ✅ `package.json`
- ✅ `vite.config.ts`
- ✅ `tsconfig.json`
- ✅ `tailwind.config.js`
- ✅ `postcss.config.js`
- ✅ All source files in `src/` directory
- ✅ `index.html`

## 🌐 Your Portfolio URL

Once deployed, your portfolio will be available at:
```
https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME
```

## 🔄 Updating Your Portfolio

To update your portfolio:

1. Make changes to your local files
2. Build the project: `npm run build`
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

## 🎯 Benefits of Hugging Face Spaces

- ✅ **Free hosting** for static sites
- ✅ **Custom domain** support
- ✅ **Automatic HTTPS**
- ✅ **Global CDN**
- ✅ **Easy updates** via Git
- ✅ **Professional URL** format

## 🆘 Troubleshooting

### Build Issues
- Make sure all dependencies are in `package.json`
- Check that TypeScript compilation passes
- Ensure all imports are correct

### Deployment Issues
- Verify your Space is set to "Static" SDK
- Check that all required files are uploaded
- Ensure your README.md has proper frontmatter

### Performance Issues
- Optimize images and assets
- Use proper caching headers
- Minimize bundle size

---

🎉 **Your portfolio will be live and accessible to recruiters worldwide!**
