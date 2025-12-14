# 🌿 Plant Care - Disease Detection App

A modern web application for detecting plant diseases from leaf images using AI-powered analysis.

## ✨ Features

- 🔐 User authentication system
- 📸 Image upload with live preview
- 🤖 AI-powered disease detection
- 💊 Detailed treatment recommendations
- 📱 Fully responsive design
- 🎨 Modern, beautiful UI
- 📊 Comprehensive information sections

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation & Running

**Option 1: Using the batch script (Windows)**
```bash
# Double-click start_server.bat
# Or run in terminal:
start_server.bat
```

**Option 2: Manual setup**
```bash
# Install dependencies
npm install

# Start the server
npm start
```

The server will start on `http://127.0.0.1:8000`

### Opening the Frontend

**Option A: Using VS Code Live Server**
- Right-click `index.html` → "Open with Live Server"

**Option B: Using Python's built-in server**
```bash
python -m http.server 8080
```
Then open: `http://localhost:8080/index.html`

**Option C: Direct file open**
- Double-click `index.html` (may have CORS issues)

## 📁 Project Structure

```
.
├── index.html          # Login page
├── home.html           # Main page with upload & info
├── result.html         # Results display page
├── style.css           # Complete stylesheet
├── auth.js             # Authentication logic
├── api.js              # API communication
├── server.js           # Node.js/Express backend
├── package.json        # Node.js dependencies
├── start_server.bat   # Windows startup script
└── uploads/           # Temporary image storage (auto-created)
```

## 🔌 API Endpoints

### POST /predict
Upload an image for disease detection.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: `file` (image file, max 10MB)

**Response:**
```json
{
  "disease": "Early Blight",
  "confidence": 85,
  "medicine": "Apply fungicide containing chlorothalonil..."
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "message": "Plant Care API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🤖 Adding Your ML Model

To integrate your actual machine learning model:

1. Install ML libraries (TensorFlow.js, ONNX.js, etc.)
2. Save your trained model file
3. Update the `predictDisease()` function in `server.js`:

```javascript
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

async function predictDisease(imagePath) {
  // Load your model
  const model = await tf.loadLayersModel('file://./model/model.json');
  
  // Preprocess image
  const imageBuffer = fs.readFileSync(imagePath);
  const imageTensor = tf.node.decodeImage(imageBuffer);
  const resized = tf.image.resizeBilinear(imageTensor, [224, 224]);
  const normalized = resized.div(255.0);
  const batched = normalized.expandDims(0);
  
  // Predict
  const prediction = model.predict(batched);
  const probabilities = await prediction.data();
  
  // Process results
  const diseaseIndex = probabilities.indexOf(Math.max(...probabilities));
  const confidence = Math.max(...probabilities) * 100;
  const diseaseClass = DISEASE_CLASSES[diseaseIndex];
  const medicine = getTreatment(diseaseClass);
  
  return {
    disease: diseaseClass,
    confidence: Math.round(confidence),
    medicine: medicine
  };
}
```

## 🎨 Features Overview

### Home Page
- **Hero Section**: Prominent upload area with image preview
- **Features Section**: 6 key features with icons
- **How It Works**: 4-step process visualization
- **Common Diseases**: Information about detectable diseases
- **Best Practices**: Tips for better results
- **About Section**: Project information and statistics

### Navigation
- Sticky navigation bar
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Active link highlighting

### Footer
- Quick links
- Support information
- Social media links
- Copyright information

## 🛠️ Troubleshooting

### "Cannot connect to server" error
- ✅ Make sure Node.js server is running (`npm start`)
- ✅ Check server is on `http://127.0.0.1:8000`
- ✅ Verify no firewall is blocking port 8000
- ✅ Check browser console for detailed errors

### CORS errors
- ✅ Server includes CORS support
- ✅ Use a local web server instead of opening files directly
- ✅ Check that server.js has `app.use(cors())`

### Port already in use
- Change port in `server.js`: `app.listen(8001, ...)`
- Update API URL in `api.js`: `http://127.0.0.1:8001/predict`

### Module not found errors
- Run `npm install` to install dependencies
- Check `package.json` has all required packages

## 📝 Notes

- Current implementation uses mock predictions for demonstration
- Replace `predictDisease()` function with your actual ML model
- Images are temporarily stored and automatically deleted after processing
- Maximum file size is 10MB
- Supported formats: JPG, PNG, GIF, WEBP

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

---

**Made with 🌱 for farmers and gardeners worldwide**
