# 🚀 QUICK START: Push LOGIN-pg to GitHub

## ⚠️ IMPORTANT: Install Git First

Your system doesn't have Git installed. Follow these steps:

### Step 1: Download & Install Git

1. Go to: **https://git-scm.com/download/win**
2. Click the **64-bit** or **32-bit** installer (usually 64-bit)
3. Run the installer and accept all default settings
4. **Restart your PowerShell terminal** after installation

### Step 2: Verify Git Installation

After restart, run:
```powershell
git --version
```

You should see: `git version 2.xx.x` (or similar)

---

## Step 3: Create Repository on GitHub

1. Go to: https://github.com/new
2. **Repository name**: `LOGIN-pg`
3. **Description**: `Premium UI/UX Login Page with Modern Animations`
4. Keep **Public** selected
5. Click **Create repository**

---

## Step 4: Push Your Code

Copy and paste these commands ONE BY ONE in PowerShell:

```powershell
# Navigate to your project
cd "c:\Users\ASUS GAMING\AppData\Local\Packages\5319275A.WhatsAppDesktop_cv1g1gvanyjgm\LocalState\sessions\EDBD9550DBBF2C905BC357BDA4AA29248B1E6733\transfers\2025-49\sri\login-page"

# Initialize Git
git init

# Configure Git (use your real details)
git config user.name "Your Name"
git config user.email "your.email@gmail.com"

# Add all files
git add .

# Create commit
git commit -m "Initial commit: Premium Login Page - Modern UI/UX with animations"

# Add remote (REPLACE: YourUsername with your actual GitHub username)
git remote add origin https://github.com/YourUsername/LOGIN-pg.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## ✅ That's It!

Your repository will be live at:
```
https://github.com/YourUsername/LOGIN-pg
```

---

## 💡 Pro Tips

- **Need help with GitHub?** Visit: https://github.com/signup
- **Lost your password?** https://github.com/password_reset
- **Want to make it look better?** Add images to your README!

---

**Stuck? Let me know and I'll help you troubleshoot!**
