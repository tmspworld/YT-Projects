window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const circleSection = document.querySelector('.circle-section');
  const circleSectionHeight = circleSection.offsetHeight;

  if (scrollY > circleSectionHeight * 0.1) {
      document.body.classList.add('scrolled');
  } else {
      document.body.classList.remove('scrolled');
  }
});
