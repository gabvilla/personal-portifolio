const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', (e) => {
   const navlist = document.querySelector('.navlist');

   navlist.classList.toggle('active');
})