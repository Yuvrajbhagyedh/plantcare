# 🚀 Quick Start Guide

## Fixing "Cannot connect to server" Error

### Step 1: Install Node.js (if not installed)
1. Download from: https://nodejs.org/
2. Install the LTS version
3. Restart your computer if needed

### Step 2: Start the Server

**Option A: Using the batch file (Easiest)**
1. Double-click `start_server.bat`
2. Wait for "Server running on http://127.0.0.1:8000"
3. Keep the window open

**Option B: Using Command Line**
1. Open terminal in this folder
2. Run: `npm install`
3. Run: `npm start`
4. Wait for "Server running" message

### Step 3: Open the App
1. Open `index.html` in your browser
2. Login (any email/password works)
3. Try uploading an image

## Fixing Camera Issues

### On Mobile Devices:
- The "Open Camera" button will request camera permission
- Allow camera access when prompted
- The camera will open automatically

### On Desktop:
- The "Open Camera" button uses your webcam
- Allow camera access when prompted
- Or use "Select from Gallery" to choose a file

### Troubleshooting Camera:
- **Camera not opening**: Check browser permissions in settings
- **Permission denied**: Allow camera access in browser settings
- **Use file upload**: Click "Select from Gallery" instead

## Testing Server Connection

Run this command to test if server is running:
```bash
npm test
```

Or visit: http://127.0.0.1:8000/health

## Common Issues

### Port 8000 already in use
- Close other applications using port 8000
- Or change port in `server.js` (line 8)

### npm command not found
- Install Node.js from nodejs.org
- Restart terminal after installation

### Dependencies not installing
- Check internet connection
- Try: `npm cache clean --force`
- Then: `npm install`

## Need Help?

1. Check server is running (you should see "Server running" message)
2. Check browser console for errors (F12)
3. Make sure port 8000 is not blocked by firewall
4. Try refreshing the page after starting server

