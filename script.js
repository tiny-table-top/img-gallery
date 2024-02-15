document.addEventListener("DOMContentLoaded", function() {
  const images = [
    'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];
  
  let currentIndex = 0;
  const imgElement = document.getElementById("currentImg");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  // Function to update the displayed image
  function updateImage() {
    imgElement.src = images[currentIndex];
  }

  // Event listener for previous button
  prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  // Event listener for next button
  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Initially display the first image
  updateImage();
});
  