const tekstjeFade = document.querySelectorAll('.jsFade');
// selecteer de h2 tekst
const logo = document.querySelector('header img');
// selecteerd de logo in de nav
function checkScroll() {
  tekstjeFade.forEach(tekstje => {
    const box = tekstje.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.8) {
      tekstje.classList.add('TekstFadeIn');
    }
  });
}

function toggleLogoSize() {
  if (!logo) return; 
  if (window.scrollY > 10) {
    logo.classList.add('logoShrink');
  } else {
    logo.classList.remove('logoShrink');
  }
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
//  ik krijg deze niet bij elkaar gevoegt dan werkt het niet meer ???
window.addEventListener('scroll', toggleLogoSize);
window.addEventListener('load', toggleLogoSize);



