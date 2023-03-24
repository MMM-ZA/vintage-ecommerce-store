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

// Add a click event listener to the icon
const iconNavigation = documet.getElementById('shopping-icon');
iconNavigation.addEventListener('click',()=> {
    window.location.href = 'sproduct.html';
});
