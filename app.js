const openBar = document.getElementById('bar');
const closeBar = document.getElementById('close');
const navbarBar = document.getElementById('navbar');

if (openBar) {
  openBar.addEventListener('click',() => {
    navbarBar.classList.add('active');
  })
}
if (closeBar) {
  closeBar.addEventListener('click',() => {
    navbarBar.classList.remove('active');
  })
}
