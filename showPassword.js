document.addEventListener("DOMContentLoaded", function () {
  var passwordInput = document.getElementById("password");
  var eyeIconOpen = document.getElementById("eyeIconOpen");
  var eyeIconClosed = document.getElementById("eyeIconClosed");

  passwordInput.type = "password"; //Initially hide the password
  eyeIconOpen.style.display = "inline"; //Show the open eye icon
  eyeIconClosed.style.display = "none"; //Hide the closed eye icon

  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIconOpen.style.display = "none";
        eyeIconClosed.style.display = "inline";
      } else {
        passwordInput.type = "password";
        eyeIconOpen.style.display = "inline";
        eyeIconClosed.style.display = "none";
      }
    });
});
