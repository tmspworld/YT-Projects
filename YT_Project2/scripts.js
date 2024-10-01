document.addEventListener('mousemove', (e) => {
  // Create a new heart element
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Set the heart's position based on mouse coordinates
  heart.style.left = `${e.clientX - 10}px`;  // Center the heart horizontally
  heart.style.top = `${e.clientY - 10}px`;   // Center the heart vertically
  
  document.body.appendChild(heart);
  
  // Remove the heart after the animation completes (1s)
  setTimeout(() => {
      heart.remove();
  }, 1000);
});
