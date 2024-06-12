const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', (e) => {
   navlist.classList.toggle('active');
})

hamburger.addEventListener('mouseout', () => {
   navlist.classList.toggle('active')
})
