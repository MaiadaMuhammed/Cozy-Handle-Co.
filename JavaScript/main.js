function filterProducts(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      if (category === 'all') {
        product.style.display = 'block';
      } else {
        product.style.display = product.classList.contains(category) ? 'block' : 'none';
      }
    });
  }