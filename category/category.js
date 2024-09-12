const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category') || 'all';
const itemsPerPage = 20;
let currentPage = 1;

// Fetch and display products for the selected category
function fetchCategoryProducts(page = 1) {
  const skip = (page - 1) * itemsPerPage;
  const url = `https://dummyjson.com/products/category/${category}?limit=${itemsPerPage}&skip=${skip}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      renderGrid(data.products);
      Pagination(data.total);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Render products in a grid
function renderGrid(data) {
  let gridData = "";
  data.forEach(product => {
    gridData += `
      <div class="product-item">
        <a href="description.html?id=${product.id}" class="product-link">
          <img src="${product.thumbnail}" alt="${product.title}" class="product-img" />
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          ${getStarRating(product.rating)}
        </a>
      </div>`;
  });

  document.getElementById("product-grid").innerHTML = gridData;
}

// Handle pagination
function Pagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let paginationHtml = `<a href="#" data-page="1">&laquo;</a>`;

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
  }

  paginationHtml += `<a href="#" data-page="${totalPages}">&raquo;</a>`;
  document.querySelector(".pagination").innerHTML = paginationHtml;

  document.querySelectorAll('.pagination a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const page = parseInt(link.getAttribute('data-page'));
      currentPage = page;
      fetchCategoryProducts(currentPage);
    });
  });
}

// Star rating helper function (example)
function getStarRating(rating) {
  const stars = Math.round(rating);
  return '<div class="star-rating">' + '★'.repeat(stars) + '☆'.repeat(5 - stars) + '</div>';
}

// Fetch initial products
fetchCategoryProducts(currentPage);
