document.addEventListener("DOMContentLoaded", function() {
  if (!document.body.classList.contains("second-page")) return;

  let slideIndex = 0;
  const slides = document.querySelectorAll("body.second-page .slide");

  function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 saniyede bir değişim
  }

  showSlides();
});
document.addEventListener("DOMContentLoaded", function() {
  if (!document.body.classList.contains("second-page")) return;

  let slideIndex = 1; // İlk slide
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
  }

  // Noktaya tıklama fonksiyonu
  window.currentSlide = function(n) {
    slideIndex = n;
    showSlides(slideIndex);
  }

  // Otomatik slider (3 saniye)
  function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 3000);
  }

  showSlides(slideIndex);
  autoSlide();
});
