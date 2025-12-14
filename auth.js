function login() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  if (!email || !password) {
    showAlert("Please enter both email and password", "error");
    return;
  }

  // Basic email/phone validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  
  if (!emailRegex.test(email) && !phoneRegex.test(email.replace(/\s/g, ""))) {
    showAlert("Please enter a valid email or phone number", "error");
    return;
  }

  if (password.length < 4) {
    showAlert("Password must be at least 4 characters", "error");
    return;
  }

  // Show loading state
  const loginBtn = document.querySelector(".primary-btn");
  const originalText = loginBtn.textContent;
  loginBtn.disabled = true;
  loginBtn.textContent = "Logging in...";

  // Simulate login (in production, this would be an API call)
  setTimeout(() => {
    // Store login info
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Always redirect to language selection first (user can change or confirm)
    window.location.href = "language-select.html";
  }, 500);
}

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

// Allow Enter key to submit login
document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("password");
  if (passwordInput) {
    passwordInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        login();
      }
    });
  }
});
