// alert("Hello World");

// toggle dark mode
function darkMode() {
  const darkBtn = document.body;
  darkBtn.classList.toggle("dark-mode");
}

// hide grid btn
function hideGrid() {
  const grid = document.getElementById("percentages-grid");
  if (grid.style.display === "none") {
    grid.style.display = "block";
  } else {
    grid.style.display = "none";
  }
}
