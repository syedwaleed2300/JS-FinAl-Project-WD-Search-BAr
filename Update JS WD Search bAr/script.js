fetch('product.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        const originalProducts = products;

        function generateProductsHTML(productsData) {
            let output = "";
            for (let i in productsData) {
                let product = productsData[i];
                output += `
       
       <div class="product">
        <img src="${product.image}" alt="${product.description}">
        <p class="title">${product.title}</p>
        <p class="description">${product.description}</p>
        <p class="price"> 
        <span>${product.price}</span>
        <span>&euro;</span>
        </p>
        <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
        </div>
        `;
            }
            return output;
        }

        document.querySelector(".products").innerHTML = generateProductsHTML(products);
        document.getElementById("searchbar").addEventListener('input', function (event) {
            const searchTerm = event.target.value.toLowerCase();
            const filteredProducts = originalProducts.filter(product =>
                product.title.toLowerCase().includes(searchTerm)
            );

            document.querySelector(".products").innerHTML = generateProductsHTML(filteredProducts);
        });
    });
