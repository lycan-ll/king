// class SpeacialHeader extends HTMLElement{
//     connectedCallback(){
//         this.innerHTML=`<section id="header">
//       <div class="logo-container">
//         <img src="logo.png" alt="Logo" class="logo" />
//       </div>
//       <nav>
//         <ul>
//           <li><a href="index.html">Home</a></li>
//           <li><a href="shop.html">Shop</a></li>
//           <li><a href="category.html">Category <i class="fa-solid fa-caret-down"></i></a></li>
//           <li><a href="cart.html">Cart</a></li>
//         </ul>
//       </nav>
//     </section>`
//     }
// }

// customElements.define('special-header',SpeacialHeader)

// class SpecialHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <section id="header">
//         <div class="logo-container">
//           <img src="/Images/logo.png" alt="Logo" class="logo" />
//         </div>
//         <nav>
//           <ul>
//             <li><a href="/Index.html/index.html">Home</a></li>
//             <li><a href="/Shop.html/shop.html">Shop</a></li>
//             <li>
//             <a href="#" id="category-link"><select name="category" id="Category"></select>
//               <div class="category-dropdown">
//               </div>
//             </li>
//             <li><a href="cart.html">Cart</a></li>
//           </ul>
//         </nav>
//       </section>
//     `;
//   }
// }





// <li>
//               <a href="#" id="category-link">Category <i class="fa fa-caret-down"></i></a>
//               <div class="category-dropdown">
//               <select name="category" id="Category"></select>              
//               </div>
//             </li>



// class SpecialHeader extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//       <section id="header">
//         <div class="logo-container">
//           <img src="/images/logo.png" alt="Logo" class="logo" />
//         </div>
//         <nav>
//           <ul>
//             <li><a href="/index/index.html">Home</a></li>
//             <li><a href="/shop/shop.html">Shop</a></li>
//             <li>
//               <a href="#" id="category-link">
//                 <select name="category" id="Category"></select>
//               </a>
//               <div class="category-dropdown"></div>
//             </li>
//             <li><a href="cart.html">Cart</a></li>
//           </ul>
//         </nav>
//       </section>
//     `;
//   }
// }

// class SpecialFooter extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
//      <footer>
//         <div class="end">
//           <div class="one">
//             <img src="/images/7.jpg" alt="About Image">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptas?</p>
//             <p style="line-height: 4;">izaanvohra40@gmail.com</p>
//           </div>
//           <div class="explore">
//             <h2>Explore</h2>
//             <ul>
//               <li><a href="/index/index.html">Home</a></li>
//               <li><a href="/shop/shop.html">Shop</a></li>
//               <li>About</li>
//               <li>Skills</li>
//               <li>Projects</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//           <div class="follow">
//             <h2>Follow Me</h2>
//             <img src="/images/instagram.png" alt="Instagram" height="40rem">
//             <img src="/images/facebook.png" alt="Facebook" height="40rem">
//             <img src="/images/twitter.png" alt="Twitter" height="40rem">
//             <img src="/images/linkedin.png" alt="LinkedIn" height="40rem">
//             <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0435293336805!2d67.05781131062027!3d24.858438277838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f61f7ff7ffb%3A0x4a327d1cb63b0875!2sSolCoders!5e1!3m2!1sen!2s!4v1726050571135!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
//           </div>
//         </div>
//         <div class="copyright">
//           <div class="copy">
//             <p>All Rights Reserved &copy; 2024 Credeisgn</p>
//           </div>
//           <div class="term">
//             <p>Terms</p>
//           </div>
//           <div class="condition">
//             <p>Conditions</p>
//           </div>
//         </div>
//       </footer>
//     `;
//   }
// }

// customElements.define('special-footer', SpecialFooter);
// customElements.define('special-header', SpecialHeader);





class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="header">
        <div class="logo-container">
          <img src="/images/logo.png" alt="Logo" class="logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/index/index.html">Home</a></li>
            <li><a href="/shop/shop.html">Shop</a></li>
            <li>
              <a href="#" id="category-link"></a>
              <select name="category" id="Category">
                <option value="">All Categories</option>
              </select>
            </li>
            <li><a href="/Cart/cart.html">Cart</a></li>
          </ul>
        </nav>
      </section>
    `;

    this.loadCategories();
  }

  async loadCategories() {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const categories = await response.json();
      const categorySelect = document.getElementById("Category");

      categories.forEach((category) => {
        const option = document.createElement("option");
        option.value = category.slug;
        option.textContent = category.name;
        categorySelect.appendChild(option);
      });

      categorySelect.addEventListener('change', (event) => {
        const category = event.target.value;
        if (category) {
          window.open(`/category/category.html?category=${encodeURIComponent(category)}`, '_blank');
        }
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="end">
          <div class="one">
            <img src="/images/7.jpg" alt="About Image">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptas?</p>
            <p style="line-height: 4;">izaanvohra40@gmail.com</p>
          </div>
          <div class="explore">
            <h2>Explore</h2>
            <ul>
              <li><a href="/index/index.html">Home</a></li>
              <li><a href="/shop/shop.html">Shop</a></li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="follow">
            <h2>Follow Me</h2>
            <img src="/images/instagram.png" alt="Instagram" height="40rem">
            <img src="/images/facebook.png" alt="Facebook" height="40rem">
            <img src="/images/twitter.png" alt="Twitter" height="40rem">
            <img src="/images/linkedin.png" alt="LinkedIn" height="40rem">
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.0435293336805!2d67.05781131062027!3d24.858438277838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f61f7ff7ffb%3A0x4a327d1cb63b0875!2sSolCoders!5e1!3m2!1sen!2s!4v1726050571135!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
          </div>
        </div>
        <div class="copyright">
          <div class="copy">
            <p>All Rights Reserved &copy; 2024 Credeisgn</p>
          </div>
          <div class="term">
            <p>Terms</p>
          </div>
          <div class="condition">
            <p>Conditions</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('special-footer', SpecialFooter);
customElements.define('special-header', SpecialHeader);
