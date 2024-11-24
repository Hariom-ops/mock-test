document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const message = document.getElementById('message');
  
    // Display the success message
    message.style.color = 'green';
    message.textContent = '✅ Login successful!';
  
    // Redirect to dashboard.html after 3 seconds
    setTimeout(() => {
      window.location.href = 'dashboard.html'; // Replace with your target URL
    }, 2000); // 3000 milliseconds = 3 seconds
  });
  
  