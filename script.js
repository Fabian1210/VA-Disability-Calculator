//startup FX
startUp();

/*--------------------------------------------------*/
/*--------------------------------------------------*/
function startUp() {
  console.log("startup function is running");

  darkMode();
  hideGrid();
  gridBtns();
  addBtn();
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

//add disability Button
function addBtn() {
  const addBtn = document.querySelector(".add-btn");
  const description = document.getElementById("user-input").textContent;
  const percentList = document.getElementsByTagName("li");

  addBtn.addEventListener("click", function () {
    //loop through list to get selected percentage text
    let percentage = "";
    for (let i = 0; i < percentList.length; i++) {
      percentage += percentList[i].textContent;
    }

    const val = description + percentage;
    addToList(val);
    console.log(description);
    console.log(percentage);
  });
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

//close dropdown after clicked
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

//Reset Button to clear list
