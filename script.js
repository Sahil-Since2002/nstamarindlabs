document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".client-logos");
  const images = carousel.querySelectorAll("img");
  const totalImages = images.length;
  const imageWidth = carousel.clientWidth; // Get the carousel's width dynamically
  const indicatorsContainer = document.querySelector(".carousel-indicators");
  let currentIndex = 0;
  let interval;

  // Create dot indicators
  for (let i = 0; i < totalImages; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.dataset.index = i;
      indicatorsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".carousel-indicators .dot");

  function updateDots(index) {
      dots.forEach(dot => dot.classList.remove("active"));
      dots[index].classList.add("active");
  }

  function scrollToImage(index) {
      currentIndex = index;
      carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
      updateDots(currentIndex);
  }

  function autoScroll() {
      currentIndex = (currentIndex + 1) % totalImages;
      scrollToImage(currentIndex);
  }

  function startAutoScroll() {
      interval = setInterval(autoScroll, 3000);
  }

  function stopAutoScroll() {
      clearInterval(interval);
  }

  // Dot indicator click event
  dots.forEach(dot =>
      dot.addEventListener("click", () => {
          const index = parseInt(dot.dataset.index, 10);
          scrollToImage(index);
          stopAutoScroll(); // Stop auto-scroll temporarily
          startAutoScroll(); // Restart auto-scroll
      })
  );

  // Start the auto-scroll
  startAutoScroll();
});
