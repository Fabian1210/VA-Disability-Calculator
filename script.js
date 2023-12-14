//startup FX
startUp();

/*--------------------------------------------------*/
/*--------------------------------------------------*/
function startUp() {
  console.log("startup function is running");

  darkMode();
  hideGrid();
  gridBtns();
}
/*--------------------------------------------------*/
/*--------------------------------------------------*/

// toggle dark mode
function darkMode() {
  const body = document.body;
  const darkModeBtn = document.querySelector(".darkMode-btn");
  darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("darkMode-btn");
  });
}

// hide grid btn
function hideGrid() {
  const gridBtn = document.getElementById("hide-grid");
  const grid = document.getElementById("percentages-grid");
  gridBtn.addEventListener("click", function () {
    if (grid.style.display === "none") {
      grid.style.display = "block";
    } else {
      grid.style.display = "none";
    }
  });
}

//target button value when clicked
function gridBtns() {
  const gridBtns = document.querySelectorAll(".grid-btn");
  gridBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //grabs current value of button
      const value = this.value;
      addToList(value);
      console.log(value);
    });
  });
}
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

//dropdown percentages
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//replace button text with percentage
function selectPercentage(percentage) {
  const dropdownBtn = document.querySelector(".dropbtn");
  dropdownBtn.textContent = percentage + "%";
}

//close after clicked
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//Calculate percentages Button

//Reset Button to clear list
