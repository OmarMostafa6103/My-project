// ?==================START Image Header======================
// const imgList = Array.from(document.querySelectorAll('.item img'));
// const nextBtn = document.querySelector('#next');
// const prevBtn = document.querySelector('#prev');

// function nextSlide() {
//     indexImg++;
//     if (indexImg == imgList.length) {
//         indexImg = 0;
//     }
//     const imgSrc = imgList[indexImg].getAttribute('src');
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
// }
// function prevSlide() {
//     indexImg--;
//     if (indexImg < 0) {
//         indexImg = imgList.length - 1;
//     }
//     const imgSrc = imgList[indexImg].getAttribute('src');
//     lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
// }
// document.addEventListener('keydown', function (e) {
//     if (e.key == 'ArrowRight') {
//         nextSlide(1)
//     } else if (e.key == 'ArrowLeft') {
//         prevSlide(-1)
//     }
// })

const images = document.querySelectorAll('.image');
const prevButton = document.querySelector('.arrow.left');
const nextButton = document.querySelector('.arrow.right');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 7000);

showImage(currentIndex);

// ?==================END Image Header======================


// !==================START whatsappIcon======================
// const whatsappIcon = document.getElementById('whatsappIcon');
// let isDragging = false;
// let startX, startY, initialLeft, initialTop;
// let wasDragging = false;

// function getPointerEvent(e) {
//     return e.touches ? e.touches[0] : e;
// }

// const startDrag = (e) => {
//     isDragging = true;
//     wasDragging = false;
//     const pointer = getPointerEvent(e);
//     startX = pointer.clientX;
//     startY = pointer.clientY;
//     const rect = whatsappIcon.getBoundingClientRect();
//     initialLeft = rect.left;
//     initialTop = rect.top;
//     whatsappIcon.style.transition = 'none';
// };

// const drag = (e) => {
//     if (isDragging) {
//         wasDragging = true;
//         const pointer = getPointerEvent(e);
//         const deltaX = pointer.clientX - startX;
//         const deltaY = pointer.clientY - startY;
//         whatsappIcon.style.left = `${initialLeft + deltaX}px`;
//         whatsappIcon.style.top = `${initialTop + deltaY}px`;
//     }
// };

// const endDrag = (e) => {
//     if (isDragging) {
//         isDragging = false;
//         whatsappIcon.style.transition = 'transform 0.2s ease-out';
//         if (wasDragging) {
//             e.preventDefault();
//             wasDragging = false;
//         }
//     }
// };

// whatsappIcon.addEventListener('click', (e) => {
//     if (wasDragging) {
//         e.preventDefault();
//         wasDragging = false;
//     }
// });

// whatsappIcon.addEventListener('mousedown', startDrag);
// document.addEventListener('mousemove', drag);
// document.addEventListener('mouseup', endDrag);

// whatsappIcon.addEventListener('touchstart', startDrag);
// document.addEventListener('touchmove', drag);
// document.addEventListener('touchend', endDrag);



const whatsappIcon = document.getElementById('whatsappIcon');
let isDragging = false;
let startX, startY, initialLeft, initialTop;
let wasDragging = false;
const padding = 10;

function getPointerEvent(e) {
    return e.touches ? e.touches[0] : e;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

const startDrag = (e) => {
    isDragging = true;
    wasDragging = false;
    const pointer = getPointerEvent(e);
    startX = pointer.clientX;
    startY = pointer.clientY;

    const rect = whatsappIcon.getBoundingClientRect();
    initialLeft = rect.left;
    initialTop = rect.top;

    whatsappIcon.style.transition = 'none';
};

const drag = (e) => {
    if (isDragging) {
        wasDragging = true;
        const pointer = getPointerEvent(e);
        const deltaX = pointer.clientX - startX;
        const deltaY = pointer.clientY - startY;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const iconWidth = whatsappIcon.offsetWidth;
        const iconHeight = whatsappIcon.offsetHeight;

        const newLeft = clamp(initialLeft + deltaX, padding, viewportWidth - iconWidth - padding);
        const newTop = clamp(initialTop + deltaY, padding, viewportHeight - iconHeight - padding);

        whatsappIcon.style.left = `${newLeft}px`;
        whatsappIcon.style.top = `${newTop}px`;
    }
};

const endDrag = (e) => {
    if (isDragging) {
        isDragging = false;

        const viewportWidth = window.innerWidth;
        const iconWidth = whatsappIcon.offsetWidth;

        const rect = whatsappIcon.getBoundingClientRect();
        const snapLeft = rect.left < viewportWidth / 2;

        whatsappIcon.style.left = snapLeft ? `${padding}px` : `${viewportWidth - iconWidth - padding}px`;
        whatsappIcon.style.transition = 'left 0.3s ease-out, top 0.3s ease-out';

        if (wasDragging) {
            e.preventDefault();
            wasDragging = false;
        }
    }
};

whatsappIcon.addEventListener('click', (e) => {
    if (wasDragging) {
        e.preventDefault();
        wasDragging = false;
    }
});

whatsappIcon.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', endDrag);

whatsappIcon.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', endDrag);

//!==================END whatsappIcon======================

// ?==============START Loaders===================

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            preloader.style.display = 'none';
            content.style.display = 'block';
        }, 500);
    }, 3000);
});

// ?==============END Loaders===================

// *===============START card-box-search==================
document.getElementById('search-icon').addEventListener('click', function () {
    document.getElementById('search-input').focus();
});

const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('close-input-search');
const closeIcon = document.getElementById('close-icon');

searchIcon.addEventListener('click', (event) => {
    event.preventDefault();
    searchContainer.classList.remove('d-none');
});

closeIcon.addEventListener('click', () => {
    searchContainer.classList.add('d-none');
});

function searchProduct() {
    const searchQuery = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.querySelector(".search-results");
    const allProducts = document.querySelectorAll("#productContainer .card");

    if (!searchQuery) {
        resultsContainer.innerHTML = '';
        resultsContainer.style.display = 'none';
        return;
    }

    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'flex';

    allProducts.forEach((product) => {
        const productName = product.getAttribute("data-product-name").toLowerCase();

        if (productName.includes(searchQuery)) {
            const newProductCard = product.cloneNode(true);
            resultsContainer.appendChild(newProductCard);

            const productTitle = newProductCard.querySelector("h3");
            const highlightedText = productTitle.innerHTML.replace(
                new RegExp(searchQuery, "gi"),
                (match) => `<span style="background-color: rgb(164, 140, 0);">${match}</span>`
            );
            productTitle.innerHTML = highlightedText;
        }
    });

    if (resultsContainer.innerHTML === '') {
        resultsContainer.innerHTML = '<p>No products found</p>';
    }
}
document.getElementById("close-icon").addEventListener("click", function () {
    document.getElementById("close-input-search").classList.add("d-none");
    document.querySelector(".search-results").innerHTML = '';
    document.getElementById("search-input").value = '';
    document.querySelector(".search-results").style.display = 'none';
});

// *===============END card-box-search==================

// ?===============START card-box-cart==================

// const cartIcon = document.getElementById('cart-icon'),
//     cartContainer = document.getElementById('cart-container'),
//     closeCartMenu = document.getElementById('close-cart-menio'),
//     cartItemCount = cartIcon.querySelector('span'),
//     addCartBtns = document.querySelectorAll('.add-cart-btn'),
//     contetCart = document.getElementById('content-cart'),
//     totalPriceElement = document.getElementById('total-price'),
//     checkoutBtn = document.getElementById('email-btn');

// let totalPrice = 0;
// let totalItems = 0;
// let cartData = JSON.parse(localStorage.getItem('cart')) || [];

// cartIcon.addEventListener('click', function (e) {
//     e.preventDefault();
//     cartContainer.style.display = 'block';
// });

// closeCartMenu.addEventListener('click', function () {
//     cartContainer.style.display = 'none';
// });


// function updateCartUI() {
//     contetCart.innerHTML = '';
//     totalPrice = 0;
//     totalItems = 0;

//     cartData.forEach(product => {
//         const productItem = document.createElement('div');
//         productItem.classList.add('cart-item');
//         productItem.innerHTML = `
//           <div class="cart-item-content">
//             <img src="${product.image}" alt="${product.name}" class="cart-item-image">
//             <p class="cart-item-name">${product.name}</p>
//             <p class="cart-item-price">${product.price} EGP</p>
//             <div class="quantity-controls">
//               <button class="decrease-item">-</button>
//               <span class="item-quantity">${product.quantity}</span>
//               <button class="increase-item">+</button>
//             </div>
//           </div>
//         `;
//         contetCart.appendChild(productItem);

//         totalPrice += product.price * product.quantity;
//         totalItems += product.quantity;
//     });

//     cartItemCount.textContent = totalItems;
//     totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)} EGP`;

//     if (cartData.length === 0) {
//         contetCart.innerHTML = '<p>Your cart is empty!</p>';
//     }
// }

// addCartBtns.forEach((btn) => {
//     btn.addEventListener('click', function (e) {
//         e.preventDefault();
//         const card = btn.closest('.card');
//         const productName = card.getAttribute('data-product-name');
//         const productPrice = parseFloat(card.getAttribute('data-product-price'));
//         const productImage = card.querySelector('img').src;

//         const existingProduct = cartData.find(item => item.name === productName);
//         if (existingProduct) {
//             existingProduct.quantity += 1;
//         } else {
//             cartData.push({
//                 name: productName,
//                 price: productPrice,
//                 image: productImage,
//                 quantity: 1
//             });
//         }

//         localStorage.setItem('cart', JSON.stringify(cartData));
//         updateCartUI();
//     });
// });

// contetCart.addEventListener('click', function (e) {
//     const item = e.target.closest('.cart-item');
//     const productName = item?.querySelector('.cart-item-name')?.textContent;

//     if (e.target.classList.contains('increase-item')) {
//         const product = cartData.find(p => p.name === productName);
//         product.quantity += 1;
//         localStorage.setItem('cart', JSON.stringify(cartData));
//         updateCartUI();
//     }

//     if (e.target.classList.contains('decrease-item')) {
//         const product = cartData.find(p => p.name === productName);
//         if (product.quantity > 1) {
//             product.quantity -= 1;
//         } else {
//             cartData = cartData.filter(p => p.name !== productName);
//         }
//         localStorage.setItem('cart', JSON.stringify(cartData));
//         updateCartUI();
//     }
// });

// checkoutBtn.addEventListener('click', function () {
//     alert('Thank you for your purchase!');
//     cartData = [];
//     localStorage.setItem('cart', JSON.stringify(cartData));
//     updateCartUI();
//     cartContainer.style.display = 'none';
// });

// document.addEventListener('click', function (e) {
//     if (!cartContainer.contains(e.target) && !cartIcon.contains(e.target)) {
//         if (!e.target.classList.contains('increase-item') &&
//             !e.target.classList.contains('decrease-item') &&
//             !e.target.closest('.cart-item')) {
//             cartContainer.style.display = 'none';
//         }
//     }
// });

// updateCartUI();

// ?===============END card-box-cart==================
// !===============START UPDATE card-box-cart==================

const cartIcon = document.getElementById('cart-icon'),
    cartContainer = document.getElementById('cart-container'),
    closeCartMenu = document.getElementById('close-cart-minio'),
    cartItemCount = cartIcon.querySelector('span'),
    addCartBtns = document.querySelectorAll('.add-cart-btn'),
    contentCart = document.getElementById('content-cart'),
    totalPriceElement = document.getElementById('total-price'),
    checkoutBtn = document.getElementById('email-btn');

let totalPrice = 0;
let totalItems = 0;
let cartData = JSON.parse(localStorage.getItem('cart')) || [];

// * تهيئة Hammer.js على الأيقونة
const hammerCartIcon = new Hammer(cartIcon);
hammerCartIcon.on('tap', function (e) {
    e.preventDefault();
    cartContainer.style.display = 'block';
});

// * إغلاق السلة باستخدام Hammer.js
const hammerCloseCart = new Hammer(closeCartMenu);
hammerCloseCart.on('tap', function () {
    cartContainer.style.display = 'none';
});

// * إغلاق السلة عند الضغط خارجها
window.addEventListener('click', function (e) {
    if (
        cartContainer.style.display === 'block' &&
        !cartContainer.contains(e.target) &&
        e.target !== cartIcon &&
        !cartIcon.contains(e.target)
    ) {
        cartContainer.style.display = 'none';
    }
});
cartContainer.addEventListener('click', function (e) {
    e.stopPropagation();
});

// !تحديث واجهة السلة
function updateCartUI() {
    contentCart.innerHTML = '';
    totalPrice = 0;
    totalItems = 0;

    cartData.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('cart-item');
        productItem.innerHTML = `
          <div class="cart-item-content">
            <img src="${product.image}" alt="${product.name}" class="cart-item-image">
            <p class="cart-item-name">${product.name}</p>
            <p class="cart-item-price">${product.price} EGP</p>
            <div class="quantity-controls">
              <button class="decrease-item">-</button>
              <span class="item-quantity">${product.quantity}</span>
              <button class="increase-item">+</button>
            </div>
          </div>
        `;
        contentCart.appendChild(productItem);

        totalPrice += product.price * product.quantity;
        totalItems += product.quantity;
    });

    cartItemCount.textContent = totalItems;
    totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)} EGP`;

    if (cartData.length === 0) {
        contentCart.innerHTML = '<p>Your cart is empty!</p>';
    }
}

// ?إضافة منتج إلى السلة
addCartBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const card = btn.closest('.card');
        const productName = card.getAttribute('data-product-name');
        const productPrice = parseFloat(card.getAttribute('data-product-price'));
        const productImage = card.querySelector('img').src;

        const existingProduct = cartData.find(item => item.name === productName);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cartData.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        localStorage.setItem('cart', JSON.stringify(cartData));
        updateCartUI();
    });
});

// !تعديل الكمية أو الحذف
contentCart.addEventListener('click', function (e) {
    const item = e.target.closest('.cart-item');
    const productName = item?.querySelector('.cart-item-name')?.textContent;

    if (e.target.classList.contains('increase-item')) {
        const product = cartData.find(p => p.name === productName);
        product.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cartData));
        updateCartUI();
    }

    if (e.target.classList.contains('decrease-item')) {
        const product = cartData.find(p => p.name === productName);
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cartData = cartData.filter(p => p.name !== productName);
        }
        localStorage.setItem('cart', JSON.stringify(cartData));
        updateCartUI();
    }
});

updateCartUI();
//? ارسال الي البريد الالكتروني 
checkoutBtn.addEventListener('click', function () {
    let productDetails = cartData.map(product => {
        return `اسم المنتج: ${product.name}\nالسعر: ${product.price} جنيه\nالكمية: ${product.quantity}`;
    }).join('\n\n');

    const message = `مرحبًا،\n\nأرغب في شراء المنتجات التالية:\n\n${productDetails}\n\nالإجمالي: ${totalPrice.toFixed(2)} جنيه\n\nشكراً.`;

    const email = "omarmostafa6103@gmail.com";
    const subject = "تفاصيل شراء المنتجات";
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
});

// !===============END UPDATE card-box-cart==================
