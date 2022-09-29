const navlinks = document.querySelectorAll('.mem');

for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener('click', () => {
    for (let i = 0; i < navlinks.length; i++) {
      if (navlinks[i].classList.contains('active')) {
        navlinks[i].removeChild(navlinks[i].children[1]);
        navlinks[i].insertAdjacentHTML(
          'beforeend',
          '<i class="fa-solid fa-square-plus"></i>'
        );
      } else {
        navlinks[i].removeChild(navlinks[i].children[1]);
        navlinks[i].insertAdjacentHTML(
          'beforeend',
          '<i class="fa-regular fa-square-plus"></i>'
        );
      }
    }
  });
}
