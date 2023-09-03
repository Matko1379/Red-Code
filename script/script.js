const revealElements = document.querySelectorAll('[data-reveal]')
const BackToTopBtn = document.querySelector('.top');

const scrollReveal = () => {
  revealElements.forEach(element => {
    const isElementOnScreen = element.getBoundingClientRect().top <
      window.innerHeight;

    if (isElementOnScreen) {
      element.classList.add('revealed');
    } else {
      element.classList.remove('revealed');
    }
  })
}

const BackToTop = () => {
  window.scrollTo(0, 0);
}

const BackToTopBtnStyle = () => {
  if (window.scrollY > 500) {
    BackToTopBtn.classList.add('show');
  } else {
    BackToTopBtn.classList.remove('show');
  }
}

window.addEventListener('load', scrollReveal);
window.addEventListener('scroll', scrollReveal);
BackToTopBtn.addEventListener('click', BackToTop);
window.addEventListener('scroll', BackToTopBtnStyle);