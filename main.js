// Get the necessary elements
const spinButton = document.getElementById('spinButton');
const resultDisplay = document.getElementById('result');
const spinWheel = document.getElementById('spinWheel');

// Array of prizes
const prizes = ["10% Off", "20% Off", "Free Shipping", "25% Off", "Free Gift", "10% Off"];

// Function to generate a random angle for the wheel spin
function spinWheelFunction() {
  // Random degree for spin (between 2 to 3 full rotations, or 720 to 1080 degrees)
  const randomDegree = Math.floor(Math.random() * 361) + 720; // Spin at least 2 full rotations

  // Apply the spin
  spinWheel.style.transition = 'transform 3s ease-out'; // Smooth transition for 3 seconds
  spinWheel.style.transform = `rotate(${randomDegree}deg)`; // Apply the rotation

  // Get the prize after the spin is complete
  setTimeout(() => {
    // Randomly select a prize based on the wheel's stopping position
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    resultDisplay.textContent = `You won: ${prizes[prizeIndex]}`;
  }, 3000); // Wait 3 seconds until the wheel stops spinning
}

// Add event listener to the spin button
spinButton.addEventListener('click', spinWheelFunction);
