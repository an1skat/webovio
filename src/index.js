// scroll to top button
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
};

scrollToTopBtn.addEventListener('click', scrollToTop);

// MEGALODON
document.addEventListener('DOMContentLoaded', function () {
  const playLink1 = document.getElementById('playLink1');
  const playLink2 = document.getElementById('playLink2');
  const playLink3 = document.getElementById('playLink3');
  const audioPlayer = document.getElementById('audioPlayer'); 
  const flyingImage = document.getElementById('megalodonImage');

  const megalodon = event => {
    event.preventDefault();

    audioPlayer.volume = 0.7;

    audioPlayer.play();

    flyingImage.classList.add('active');

    setTimeout(function () {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      flyingImage.classList.remove('active');
    }, 7900);
  };

  playLink1.addEventListener('click', megalodon);
  playLink2.addEventListener('click', megalodon);
  playLink3.addEventListener('click', megalodon);
});
