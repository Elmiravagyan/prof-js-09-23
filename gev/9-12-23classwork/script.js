document.addEventListener('DOMContentLoaded', () => {
  const square1 = document.getElementById('square');
  const square2 = document.getElementById('square2')

  // Initial position
  let positionX = 50;

  // Function to move the square
  function moveSquare(square) {
    positionX += 200;
    square.style.left = `${positionX}px`;
  }

  // Click event handler
  square1.addEventListener('click', () => {
    // Use a promise to create a smooth animation
    const movePromise = new Promise(resolve => {
      const start = positionX;
      const target = start + 200;

      const animation = setInterval(() => {
        positionX += 5; // Adjust the speed of animation as needed
        moveSquare(square1);

        if (positionX >= target) {
          clearInterval(animation);
          resolve();
        }
      }, 10);
    });

    movePromise.then(() => {
      moveSquare(square2);
      console.log('Square moved!');
    });
  });
});
