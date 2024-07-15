async function fetchProducts() {
    const query = document.getElementById('searchQuery').value || 'ordenadores';
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const data = await response.json();
    displayProducts(data.results);
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4';

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                    <a href="${product.permalink}" class="btn btn-primary" target="_blank">Ver producto</a>
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Fetch default products on page load
document.addEventListener('DOMContentLoaded', () => fetchProducts());
