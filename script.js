/* Objetos que mostraremos  */
const desktopMenu = document.querySelector('.desktop-menu');
const detailCart = document.querySelector('#shoppingCartContainer');
const mobileMenu = document.querySelector('.mobile-menu');
const cardContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');
const productDetail = document.querySelector('#product-detail');

/* botones */
const navEmail = document.querySelector('.navbar-email');
const btnMenuMobile = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const titleContainer = document.querySelector('.title-container');
const closeDetail = document.querySelector('.product-detail-close');

/* eventos de los botones */
navEmail.addEventListener('click', toggleMenuDesktop);
btnMenuMobile.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCart);
titleContainer.addEventListener('click', toggleCart);
cardContainer.addEventListener('click', createDetail);
closeDetail.addEventListener('click', closeDetails);

/* funciones*/ /* En cada función se hace un condicional para cuando se desplegue un menu el 
otro desaparezca */
function toggleMenuDesktop() {
  const isDetailCartOpen = !detailCart.classList.contains('inactive');
  const isProductDetail = !productDetail.classList.contains('inactive');

  if (isDetailCartOpen) {
    detailCart.classList.add('inactive');
  }

  if (isProductDetail) {
    productDetail.classList.add('inactive');
    mainContainer.classList.remove('reduce-main');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isDetailCartOpen = !detailCart.classList.contains('inactive');
  const isProductDetail = !productDetail.classList.contains('inactive');

  if (isDetailCartOpen) {
    detailCart.classList.add('inactive');
  }

  if (isProductDetail) {
    productDetail.classList.add('inactive');
    mainContainer.classList.remove('reduce-main');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  const isProductDetail = !productDetail.classList.contains('inactive');

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }

  if (isProductDetail) {
    productDetail.classList.add('inactive');
    mainContainer.classList.remove('reduce-main');
  }

  detailCart.classList.toggle('inactive');
}

/* function toggleDetails() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  const isDetailCartOpen = !detailCart.classList.contains('inactive');

  if (isDetailCartOpen) {
    detailCart.classList.add('inactive');
  }

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }

  productDetail.classList.remove('inactive');
  mainContainer.classList.add('reduce-main');
} */

function closeDetails() {
  productDetail.classList.add('inactive');
  mainContainer.classList.remove('reduce-main');
}

/* Creacion de productos con array y evitar el uso de dato HTML */

const productsList = [];

productsList.push({
  name: 'Bike',
  price: '120',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name: 'PS5',
  price: '600',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name: 'Control PS5',
  price: '59',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productsList.push({
  name: 'Bike',
  price: '120',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name: 'PS5',
  price: '600',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsList.push({
  name: 'Control PS5',
  price: '59',
  description:
    'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function creatorCards(arr) {
  /* Ciclo for donde product es el objeto de productList */
  /* Hicimos la maquetacion de las cards desde js */
  for (product of arr) {
    /* creacion del div con clase product-card */
    const productCard =
      document.createElement(
        'div'
      ); /* con document.createElement() se crean los elementos html que necesitemos */
    productCard.classList.add(
      'product-card'
    ); /* con nombreDelElemento.classList contamos con unos cuantos metodos por ejemple el toggle que lo utilizamos para 
    quitar o poner una clase a un elemento o el .add de este caso que es para agregarle una clase a nuestro elemento */

    /* creacion de la img */
    const productImg = document.createElement('img');
    productImg.setAttribute(
      'src',
      product.image
    ); /* con setAttribute le agregamos el atributo que le queremos agregar a nuestro elemento
    seguido de la ruta donde se encuetre nuestro recurso o en este caso que se llama desde el array */

    /* creacion del div de product-info */
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText =
      '$' +
      product.price; /* .innerText se utiliza para agregar texto a nuestros elementos
    en este caso se le agrega a una etiqueta de parrafo */
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productDiv.append(
      productPrice,
      productName
    ); /* con .append lo que hacemos es introducir los elementos hijos a un padre y podemos agregar varios en una sola 
    linea, con appendChild solo podemos agregar de uno en uno*/

    const productFigure = document.createElement('figure');
    const productCardIcon = document.createElement('img');
    productCardIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    productFigure.append(productCardIcon);

    productInfo.append(productDiv, productFigure);

    productCard.append(productImg, productInfo);

    cardContainer.append(
      productCard
    ); /* la clase card-container la traemos desde el html y es a donde iran todos los elementos que hemos creado con js */
  }
}

{
  /* <img
src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
alt="bike"
/>
<div class="product-info-details">
<p>$35,00</p>
<p>Bike</p>
<p>
  With its practical position, this bike also fulfills a decorative
  function, add your hall or workspace.
</p> */
}
function createDetail() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  const isDetailCartOpen = !detailCart.classList.contains('inactive');

  if (isDetailCartOpen) {
    detailCart.classList.add('inactive');
  }

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }

  productDetail.classList.remove('inactive');
  mainContainer.classList.add('reduce-main');

  function closeDetails() {
    productDetail.classList.add('inactive');
    mainContainer.classList.remove('reduce-main');
  }
}

creatorCards(productsList);
