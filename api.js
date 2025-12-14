function predict() {
  // Load translations
  const lang = localStorage.getItem('selectedLanguage') || 'en';
  const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : 
            (typeof window !== 'undefined' && window.translations && window.translations[lang]) ? window.translations[lang] : {};
  
  let file = document.getElementById("imageInput").files[0];

  if (!file) {
    showAlert("Please select an image first", "error");
    return;
  }

  // Validate file type
  if (!file.type.startsWith("image/")) {
    showAlert("Please select a valid image file", "error");
    return;
  }

  // Validate file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    showAlert("Image size should be less than 10MB", "error");
    return;
  }

  // Show loading state
  const loadingDiv = document.getElementById("loading");
  const predictBtn = document.getElementById("predictBtn");
  loadingDiv.style.display = "block";
  predictBtn.disabled = true;
  predictBtn.innerHTML = `<span class="btn-icon">⏳</span><span>${t.processing || "Processing..."}</span>`;

  let formData = new FormData();
  formData.append("file", file);

  fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    body: formData
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    // Validate response data
    if (!data || (!data.disease && !data.error)) {
      throw new Error("Invalid response from server");
    }
    
    // Store result
    localStorage.setItem("result", JSON.stringify(data));
    
    // Redirect to result page
    window.location.href = "result.html";
  })
  .catch(err => {
    console.error("Error:", err);
    loadingDiv.style.display = "none";
    predictBtn.disabled = false;
    predictBtn.innerHTML = `<span class="btn-icon">🔍</span><span>${t.detectDisease || "Detect Disease"}</span>`;
    
    let errorMsg = "Failed to connect to server. Please make sure the server is running.";
    if (err.message.includes("Failed to fetch") || err.message.includes("NetworkError")) {
      errorMsg = "Cannot connect to server. Please:\n1. Open terminal in this folder\n2. Run: npm install\n3. Run: npm start\n4. Wait for 'Server running' message\n5. Refresh this page";
    }
    showAlert(errorMsg, "error");
  });
}

// Make sure it's globally accessible
window.predict = predict;

function showAlert(message, type = "info") {
  // Remove existing alerts
  const existingAlert = document.querySelector(".alert");
  if (existingAlert) {
    existingAlert.remove();
  }

  // Create alert element
  const alert = document.createElement("div");
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  document.body.appendChild(alert);

  // Show alert
  setTimeout(() => alert.classList.add("show"), 10);

  // Remove alert after 4 seconds
  setTimeout(() => {
    alert.classList.remove("show");
    setTimeout(() => alert.remove(), 300);
  }, 4000);
}
