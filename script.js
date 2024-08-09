// JavaScript file for your program

// Function to toggle a class on and off
function toggleClass(elementId, className) {
    var element = document.getElementById(elementId);
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  
  // Function to change the image source
  function changeImage(elementId, newImageUrl) {
    var imageElement = document.getElementById(elementId);
    imageElement.src = newImageUrl;
  }
  
  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Add your form submission logic here
    console.log("Form submitted!");
  }
  
  // Add event listeners or any other JavaScript logic as needed
  