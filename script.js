/* Menus */
const desktopMenu = document.querySelector('.desktop-menu');
const detailCart = document.querySelector('.product-detail');
const mobileMenu = document.querySelector('.mobile-menu');

/* botones */
const navEmail = document.querySelector('.navbar-email');
const btnMenuMobile = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const titleContainer = document.querySelector('.title-container');

/* eventos de los botones */
navEmail.addEventListener('click', toggleMenuDesktop);
btnMenuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCart);
titleContainer.addEventListener('click', toggleCart);

/* funciones*/
function toggleMenuDesktop() {
  const isDetailCartOpen = !detailCart.classList.contains('inactive');

  if (isDetailCartOpen) {
    detailCart.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isDetailCartOpen = !detailCart.classList.contains('inactive');

  if (isDetailCartOpen) {
    detailCart.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }

  detailCart.classList.toggle('inactive');
}
