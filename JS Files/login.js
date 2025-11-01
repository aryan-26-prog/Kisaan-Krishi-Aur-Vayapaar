    // Saved credentials for demonstration
    const savedCredentials = {
      phone: '9805297267',
      password: '12345678'
    };

    // Add event listener to the form using the correct id "loginForm"
    document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Get the phone and password values from the correct input fields
      const phoneInput = document.getElementById('phone').value.trim();
      const passwordInput = document.getElementById('password').value;
      const errorMessage = document.getElementById('errorMessage');
      
      // Clear any previous error messages
      errorMessage.textContent = "";
      
      // Check if fields are empty
      if (!phoneInput || !passwordInput) {
        errorMessage.textContent = "Mobile number and password are required.";
        return;
      }
      
      // Validate credentials
      if (phoneInput === savedCredentials.phone && passwordInput === savedCredentials.password) {
        alert("Login successful!");
        window.location.href = "secondpage.html"; // Redirect to the next page
      } else {
        errorMessage.textContent = "Invalid mobile number or password.";
      }
    });