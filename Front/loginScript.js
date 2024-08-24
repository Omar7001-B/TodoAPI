const baseUrl = "http://localhost:3000/users";

// Handle login
async function handleLogin(event) {
  event.preventDefault();
  const { email, password } = event.target.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      `${baseUrl}/${encodeURIComponent(emailValue)}`
    );
    const user = await response.json();

    if (user && user.password === passwordValue) {
      alert("Login successful!");
      // Store user ID or username in local storage to use in index.html
      localStorage.setItem("loggedInUser", user._id || user.username);
      // Redirect to index.html
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("An error occurred. Please try again.");
  }
}
