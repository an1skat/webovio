const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

const toggleScrollToTopBtn = () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

window.addEventListener('scroll', toggleScrollToTopBtn);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
