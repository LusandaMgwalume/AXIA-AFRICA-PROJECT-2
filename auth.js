document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    alert("Login failed: " + data.error);
  }
});

//signup
document.getElementById("forgotForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("forgotEmail").value;
  alert(`Password reset link sent to ${email} (mocked).`);
});

//forgot password
document.getElementById("forgotForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("forgotEmail").value;
  alert(`Password reset link sent to ${email} (mocked).`);
});

