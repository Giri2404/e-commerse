const products = [
  {
    id: 1,
    title: "Men's Denim Jacket",
    category: "mens",
    price: "₹1,999",
    image: "images/i1.jpg"
  },
  {
    id: 2,
    title: "Women's Summer Dress",
    category: "womens",
    price: "₹1,499",
    image: "images/i2.jpg"
  },
  {
    id: 3,
    title: "Leather Handbag",
    category: "accessories",
    price: "₹2,200",
    image: "images/i3.jpg"
  },
  {
    id: 4,
    title: "Women's Heeled Sandal",
    category: "womens",
    price: "₹1,299",
    image: "images/i4.jpg"
  },
  {
    id: 5,
    title: "Men's Winter Boots",
    category: "mens",
    price: "₹2,500",
    image: "images/i5.jpg"
  },
  {
    id: 6,
    title: "Classic Sunglasses",
    category: "accessories",
    price: "₹999",
    image: "images/i6.jpg"
  },
  {
    id: 7,
    title: "Men's pant collection's",
    category: "mens",
    price: "₹1,999",
    image: "images/i7.jpg"
  },
   {
    id: 8,
    title: "Men's  T-Shirt",
    category: "mens",
    price: "₹4,999",
    image: "images/i8.webp"
  },
  {
    id: 9,
    title: "Men's  premium Dry-Fit shorts",
    category: "mens",
    price: "₹2,999",
    image: "images/i9.webp"
  },
  {
    id: 10,
    title: "Men's  Foot ware",
    category: "mens",
    price: "₹1,999",
    image: "images/i10.webp"
  },
  {
    id: 11,
    title: "Men's  Formal Shoe",
    category: "mens",
    price: "₹6,999",
    image: "images/i11.jpg"
  },
  {
    id: 12,
    title: "Men's  Casual Shoe",
    category: "mens",
    price: "₹2,999",
    image: "images/i12.webp"
  },
  {
    id: 13,
    title: "Men's  Sports Shoe",
    category: "mens",
    price: "₹9,999",
    image: "images/i13.jpg"
  },
  {
    id: 14,
    title: "Women's casual Dress",
    category: "womens",
    price: "₹3,700",
    image: "images/i14.jpg"
  },
  {
    id: 15,
    title: "Premium Makeup kit",
    category: "accessories",
    price: "₹2,999",
    image: "images/i15.jpg"
  },
  {
    id: 16,
    title: "Premium Nail Polish",
    category: "accessories",
    price: "₹1,379",
    image: "images/i16.jpg"
  },
  {
    id: 17,
    title: "luxurious Perfiume",
    category: "accessories",
    price: "₹7,999",
    image: "images/i17.jpg"
  },
];

function displayProducts(data) {
  const productList = document.getElementById('product-list');
  if (!productList) return;
  productList.innerHTML = '';
  if (data.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }
  data.forEach(prod => {
    productList.innerHTML += `
      <div class="product-card">
        <img class="product-image" src="${prod.image}" alt="${prod.title}">
        <div class="product-title">${prod.title}</div>
        <div class="product-category">${prod.category === 'mens' ? "Men's Fashion" : prod.category === 'womens' ? "Women's Fashion" : "Accessories"}</div>
        <div class="product-price">${prod.price}</div>
        <button class="btn">Add to Cart</button>
      </div>
    `;
  });
}

if (window.location.pathname.includes('collections.html')) {
  displayProducts(products);

  const searchInput = document.getElementById('search');
  const filterSelect = document.getElementById('filter');
  searchInput.addEventListener('input', filterProducts);
  filterSelect.addEventListener('change', filterProducts);

  function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    let filtered = products.filter(prod =>
      (filterValue === 'all' || prod.category === filterValue) &&
      prod.title.toLowerCase().includes(searchValue)
    );
    displayProducts(filtered);
  }
}
