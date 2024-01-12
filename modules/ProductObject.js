export default function ProductObject(fbannerH1,sbannerH1,randomText,fpImage,fpH2,fpP,fpH1,spImage,spH2,spP,spH1,tpImage,tpH2,tpP,tpH1,ffpImage,ffpH2,ffpP,ffpH1,fvpImage,fvpH2,fvpP,fvpH1,sxpImage,sxpH2,sxpP,sxpH1,svpImage,svpH2,svpP,svpH1,egpImage,egpH2,egpP,egpH1,nnpImage,nnpH2,nnpP,nnpH1,ttpImage,ttpH2,ttpP,ttpH1,evpImage,evpH2,evpP,evpH1,twpImage,twpH2,twpP,twpH1){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    

    <!--BANNER-->
   
    <div class="main-banner">
        <div class="main-banner-child">
            <h1 class="first-banner-h1">
                ${fbannerH1}
            </h1>
            <h1 class="second-banner-h1">
                ${sbannerH1}
            </h1>
        </div>

        <div></div>
    </div>

    <!--TEXT-->
    <div class="text">
        <p class="text-p">${randomText}</p>
    </div>

    <div class="gray"></div>

    <!--PRODUCTS-->
    <div class="products">
    <div class="main-sort">
    <div class="sort-price">
        <div>
            Sort By Price
        </div>
        <div>
            <button onclick="sortProductsCheapestToExpensive()" class="sort-btn"><img src="../../assets/arrow-up.svg" alt="" ></button>
            <button onclick="sortProductsExpensiveToCheapest()" class="sort-btn"><img src="../../assets/arrow-down.svg" alt="" ></button>
        </div>
    </div>
</div>
        
        <div class="product-layout">
            <div class="product">
                <img src=${fpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${fpH2}</h2>
                    <p class="product-p">${fpP}</p>
                    <h1 class="product-h1">${fpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${spImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${spH2}</h2>
                    <p class="product-p">${spP}</p>
                    <h1 class="product-h1">${spH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${tpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${tpH2}</h2>
                    <p class="product-p">${tpP}</p>
                    <h1 class="product-h1">${tpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${ffpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${ffpH2}</h2>
                    <p class="product-p">${ffpP}</p>
                    <h1 class="product-h1">${ffpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            
            <div class="product">
                <img src=${fvpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${fvpH2}</h2>
                    <p class="product-p">${fvpP}</p>
                    <h1 class="product-h1">${fvpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${sxpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${sxpH2}</h2>
                    <p class="product-p">${sxpP}</p>
                    <h1 class="product-h1">${sxpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${svpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${svpH2}</h2>
                    <p class="product-p">${svpP}</p>
                    <h1 class="product-h1">${svpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${egpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${egpH2}</h2>
                    <p class="product-p">${egpP}</p>
                    <h1 class="product-h1">${egpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${nnpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${nnpH2}</h2>
                    <p class="product-p">${nnpP}</p>
                    <h1 class="product-h1">${nnpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${ttpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${ttpH2}</h2>
                    <p class="product-p">${ttpP}</p>
                    <h1 class="product-h1">${ttpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${evpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${evpH2}</h2>
                    <p class="product-p">${evpP}</p>
                    <h1 class="product-h1">${evpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
            <div class="product">
                <img src=${twpImage} alt="" class="product-img">
                <div class="product-content">
                    <h2 class="product-h2">${twpH2}r</h2>
                    <p class="product-p">${twpP}</p>
                    <h1 class="product-h1">${twpH1}</h1>
                </div>
                <button class="product-btn">Add to Cart</button>
            </div>
        </div>

    </div>

</body>
</html>
    `
}

export function sortProductsCheapestToExpensive() {
    var productsContainer = document.querySelector('.product-layout');
    var products = Array.from(productsContainer.getElementsByClassName('product'));

    products.sort(function(a, b) {
        var priceA = parseFloat(a.querySelector('.product-h1').innerText.replace('$', ''));
        var priceB = parseFloat(b.querySelector('.product-h1').innerText.replace('$', ''));
        return priceA - priceB;
    });

    productsContainer.innerHTML = '';

    products.forEach(function(product) {
        productsContainer.appendChild(product);
    });
}

export function sortProductsExpensiveToCheapest() {
    var productsContainer = document.querySelector('.product-layout');
    var products = Array.from(productsContainer.getElementsByClassName('product'));

    products.sort(function(a, b) {
        var priceA = parseFloat(a.querySelector('.product-h1').innerText.replace('$', ''));
        var priceB = parseFloat(b.querySelector('.product-h1').innerText.replace('$', ''));
        return priceB - priceA; // Changed this line for descending order
    });

    productsContainer.innerHTML = '';

    products.forEach(function(product) {
        productsContainer.appendChild(product);
    });
}
