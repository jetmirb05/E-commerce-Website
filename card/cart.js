document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    const updateTotalAndDisplay = () => {
        totalAmount.innerText = 'Total: $' + total.toFixed(2);
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            let div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <img src="${item.imgUrl}" alt="${item.name}" width="100px" height="100px">
                </div>
                <div>
                    <h3 class="cart-h3">${item.name}</h3>
                    <p class="cart-p">Price: ${item.price}</p>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });
    };

    cartItems.forEach(item => {
        total += item.price;
    });

    updateTotalAndDisplay();

    cartItemsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const itemIndex = event.target.getAttribute('data-index');
            cartItems.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            total = cartItems.reduce((acc, item) => acc + item.price, 0);
            updateTotalAndDisplay();
        }
    });

    document.getElementById('clear-cart').addEventListener('click', function() {
        localStorage.removeItem('cart');
        cartItems = [];
        total = 0;
        updateTotalAndDisplay();
    });
});


let mainContent = document.getElementById('whyCeraVe-popup');

let firstpurchaseButton = document.getElementById('purchase-btn').addEventListener('click', function(e){
    e.preventDefault(e);
    mainContent= document.getElementById('whyCeraVe-popup').style.display='flex';
})

let content = document.getElementById('whyCeraVe-popup-content');
let doneImg = document.getElementById('done-img');

let secondpurchaseButton = document.getElementById('popup-btn').addEventListener('click',function(e){
    e.preventDefault();
    content.style.display='none';  
    doneImg.style.display='flex';
    
})
