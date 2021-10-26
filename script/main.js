const darkMode = document.getElementById("dark-mode");
const body = document.body;
function toggleDarkMode() {
  body.classList.toggle("dark-mode");
}

darkMode.addEventListener("click", toggleDarkMode);
