/*Inicia contador del carrito (los productos q se van añadiendo)*/
let cartCount = 0;
/*Se agrega un listener al botón 'añadir al carrito' para q cada vez que
se hace click en el botón se ejecute la función*/
document.querySelector('.add-to-cart').addEventListener('click', function() {
    /*Incrementa el contador*/
    cartCount++;
    /*Se actualiza el texto del elemento con la clase cart-count*/
    document.querySelector('.cart-count').textContent = cartCount;
    /*Se asegura q el elemento sea visible*/
    document.querySelector('.cart-count').style.display = 'block';
    /*Se selecciona el contenedor de los ítems del carrito (cart items)*/
    const cartItems = document.querySelector('.cart-items');            
    const itemExists = cartItems.querySelector('li');
    /*Se verifica si ya existe un item en la lista itemExists*/
    if (itemExists) {
        /*Si ya existe un item se actualiza la cantidad*/
        itemExists.querySelector('.item-quantity').textContent = cartCount;
    } else {
        /*Si no existe se crea un nuevo ítem con la cantidad actual y se agrega a la
        lista del carrito*/
        const li = document.createElement('li');
        li.innerHTML = `Kebab Ali - Cantidad: <span class="item-quantity">${cartCount}</span>`;
        cartItems.appendChild(li);
    }
});
/*Se agrega un listener al ícono del carrito (cart-icon) que cuando se haga click al carrito
se muestre el contenedor de detalles del carrito (cart-details)*/
document.getElementById('cart-icon').addEventListener('click', function() {
    document.getElementById('cart-details').style.display = 'block';
});
/*Se agrega un listener al botón de cerrar dentro del carrito, q cuando se haga click
al boton de cerrar se oculten los detalles del carrito*/
document.querySelector('.close-cart').addEventListener('click', function() {
    document.getElementById('cart-details').style.display = 'none';
});