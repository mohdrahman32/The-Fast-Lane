// JavaScript to move the car and navigate to the next page
function moveCar() {
    const car = document.getElementById('car-image');
    car.classList.add('move'); // Add animation class
  
    // Wait for animation to complete, then navigate
    setTimeout(() => {
      window.location.href = 'nextpage.html'; // Replace with your actual next page
    }, 1000); // Matches the CSS animation duration
  }
  