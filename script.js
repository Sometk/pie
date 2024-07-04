// Function to handle Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-R6EQLRKR1B');

// Function to set the initial background image
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  setInitialBackground();

  // Other initializations or event listeners can be added here
});

// Function to set the initial background image
function setInitialBackground() {
  document.body.style.backgroundImage = "url('images/1.png')";
  document.body.style.backgroundSize = "100% 100%";  // Cover entire screen
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.position = "fixed";
  document.body.style.top = "0";
  document.body.style.left = "0";
  document.body.style.width = "100vw";  // Viewport width
  document.body.style.height = "100vh"; // Viewport height
  document.body.style.margin = "0";     // Remove any default margin
  document.body.style.zIndex = "-1";
}

// Function to handle dropdown menu
function myFunction() {
  console.log("Dropdown button clicked");
  document.getElementById("myDropdown").classList.toggle("show");
}

// Function to change the selected option in the dropdown and set background image
function changeOption(option) {
  console.log(`Option selected: ${option}`);
  const dropdownButton = document.getElementById("dropdownButton");
  const selectedOption = `<span class="selected-option">${option} ⌄</span>`;
  dropdownButton.innerHTML = selectedOption;

  const imagePath = {
    'applepie': 'images/applepie.png',
    'pumpkinpie': 'images/pumpkinpie.png',
    'cutiepie': 'images/cutiepie.png'
  };

  if (imagePath[option]) {
    console.log(`Setting background image to: ${imagePath[option]}`);
    document.body.style.backgroundImage = `url('${imagePath[option]}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
  }

  document.getElementById("myDropdown").classList.remove("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
