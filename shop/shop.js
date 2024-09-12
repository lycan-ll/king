// let objectData = [];
// let filteredData = [];
// let itemsPerPage = 20;
// let currentPage = 1;
// let currentCategory = 'all';
// let currentSearch = '';

// // Fetch product data based on current page, search, and category
// function fetchProductData(page = 1, search = '', category = 'all') {
//   const skip = (page - 1) * itemsPerPage;
//   let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;

//   if (search) {
//     url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${itemsPerPage}&skip=${skip}`;
//   } else if (category !== 'all') {
//     url = `https://dummyjson.com/products/category/${category}?limit=${itemsPerPage}&skip=${skip}`;
//   }

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       objectData = data.products;
//       filteredData = objectData;
//       renderGrid(filteredData); // Call renderGrid to display products in grid format
//       Pagination(data.total);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// // Render the products in a grid structure
// function renderGrid(data) {
//   let gridData = "";
//   data.forEach((product) => {
//     gridData += `
//       <div class="product-item">
//         <a href="description.html?id=${product.id}" class="product-link">
//           <img src="${product.thumbnail}" alt="${product.title}" class="product-img" />
//           <h3 class="product-title">${product.title}</h3>
//           <p class="product-price">$${product.price}</p>
//           ${getStarRating(product.rating)}
//         </a>
        
//       </div>`;
//   });

//   document.getElementById("product-grid").innerHTML = gridData;
// }

// function Pagination(totalItems) {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   let paginationHtml = `<a href="#" data-page="1">&laquo;</a>`;

//   for (let i = 1; i <= totalPages; i++) {
//     paginationHtml += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
//   }

//   paginationHtml += `<a href="#" data-page="${totalPages}">&raquo;</a>`;
//   document.querySelector(".pagination").innerHTML = paginationHtml;

//   document.querySelectorAll('.pagination a').forEach(link => {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
//       const page = parseInt(link.getAttribute('data-page'));
//       currentPage = page;
//       fetchProductData(currentPage, currentSearch, currentCategory);
//     });
//   });
// }

// // Search function to filter products based on input
// function search(event) {
//   currentSearch = event.target.value;
//   currentPage = 1; // Reset to the first page
//   fetchProductData(currentPage, currentSearch, currentCategory);
// }

// document.getElementById("search-input").addEventListener("input", search);

//   // Fetch and populate product categories in the dropdown
// fetch('https://dummyjson.com/products/categories')
//   .then((response) => response.json())
//   .then((categories) => {
//     const categorySelect = document.getElementById("Category");
//     categorySelect.innerHTML = `<option value="all">Category</option>`;
//     categories.forEach((category) => {
//       categorySelect.innerHTML += `<option value="${category.slug}">${category.name}</option>`;
//     });
//     categorySelect.addEventListener('change', (event) => {
     
//       currentCategory = event.target.value;
//      if(categorySelect!="nothing"){
//       window.open(fetchProductData(currentSearch, currentCategory)
//     )
//      }
//       currentPage = 1;
//       // fetchProductData(currentPage, currentSearch, currentCategory);
//     });
//   })
//   .catch((error) => {
//     console.error('Error fetching categories:', error);
//   });

// fetchProductData(currentPage);


let objectData = [];
let filteredData = [];
let itemsPerPage = 20;
let currentPage = 1;
let currentCategory = 'all';
let currentSearch = '';

// Fetch product data based on current page, search, and category
function fetchProductData(page = 1, search = '', category = 'all') {
  const skip = (page - 1) * itemsPerPage;
  let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`;

  if (search) {
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}&limit=${itemsPerPage}&skip=${skip}`;
  } else if (category !== 'all') {
    url = `https://dummyjson.com/products/category/${category}?limit=${itemsPerPage}&skip=${skip}`;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      
      objectData = data.products;
      filteredData = objectData;
      renderGrid(filteredData); // Call renderGrid to display products in grid format
      Pagination(data.total);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
//render Grid
function renderGrid(data) {
  let gridData = "";
  data.forEach((product) => {
    gridData += `
      <div class="product-item">
        <a href="../description/description.html?id=${product.id}" class="product-link">
          <img src="${product.thumbnail}" alt="${product.title}" class="product-img" />
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          ${getStarRating(product.rating)}
        </a>
      </div>`;
  });

  document.getElementById("product-grid").innerHTML = gridData;
}

function Pagination(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let paginationHtml = `<a href="#" data-page="1">&laquo;</a>`;

  for (let i = 1; i <= totalPages; i++) {
    paginationHtml += `<a href="#" data-page="${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
  }

  paginationHtml += `<a href="#" data-page="${totalPages}">&raquo;</a>`;
  document.querySelector(".pagination").innerHTML = paginationHtml;

  document.querySelectorAll('.pagination a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const page = parseInt(link.getAttribute('data-page'));
      currentPage = page;
      fetchProductData(currentPage, currentSearch, currentCategory);
    });
  });
}

// Search function to filter products based on input
function search(event) {
  currentSearch = event.target.value;
  currentPage = 1; // Reset to the first page
  fetchProductData(currentPage, currentSearch, currentCategory);
}

document.getElementById("search-input").addEventListener("input", search);

// Fetch and populate product categories in the dropdown
fetch('https://dummyjson.com/products/categories')
  .then((response) => response.json())
  .then((categories) => {
    const categorySelect = document.getElementById("Category");
    categorySelect.innerHTML = `<option value="all">All Categories</option>`;
    categories.forEach((category) => {
      categorySelect.innerHTML += `<option value="${category.slug}">${category.name}</option>`;
    });
    categorySelect.addEventListener('change', (event) => {
      currentCategory = event.target.value;
      currentPage = 1; // Reset to the first page
      fetchProductData(currentPage, currentSearch, currentCategory);
    });
  })
  .catch((error) => {
    console.error('Error fetching categories:', error);
  });

fetchProductData(currentPage);


