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

//target button value when clicked
const gridBtns = document.querySelectorAll(".grid-btn");

gridBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    //grabs current value of button
    const value = this.value;
    addToList(value);
    console.log(value);
  });
});

//add clicked percentages to list
function addToList(percentageVal) {
  const selectedPercentagesList = document.querySelector(
    ".percentage-list-info"
  );

  const newPercentage = document.createElement("li");
  newPercentage.style.backgroundColor = "lightblue";
  newPercentage.style.border = "solid red";
  newPercentage.textContent = percentageVal; //percentageVal
  selectedPercentagesList.appendChild(newPercentage);
}

//Reset Button to clear list
