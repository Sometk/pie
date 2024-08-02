// Function to set the initial background image
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  setInitialBackground();

  // Other initializations or event listeners can be added here
});

// Function to set initial background image
function setInitialBackground() {
    const initialBackground = 'images/sky.png';
    document.querySelector('.background-container').style.backgroundImage = `url('${initialBackground}')`;
}

// Function to handle dropdown menu
function myFunction() {
  console.log("Dropdown button clicked");
  document.getElementById("myDropdown").classList.toggle("show");
}

// Function to change the selected option in the dropdown and set image overlay
function changeOption(option) {
  const imagePath = {
      'applepie': 'images/applepie.png',
      'pumpkinpie': 'images/pumpkinpie.png',
      'cutiepie': 'images/cutiepie.png'
  };

  const imageContainer = document.querySelector('.image-container');
  
  // Remove existing image
  imageContainer.innerHTML = '';

  if (imagePath[option]) {
      console.log(`Setting overlay image to: ${imagePath[option]}`);
      const img = document.createElement('img');
      img.src = imagePath[option];
      img.alt = option;
      imageContainer.appendChild(img);
  }

  // Update the button text to show the selected option
  const dropdownButton = document.querySelector('.dropbtn');
  dropdownButton.innerHTML = `${option} ⌄`;

  // Hide the dropdown after selection
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
