function createCart() {
    // Private cart array
    const cart = [];
  
    // Function to add items to the cart
    function addToCart({ productId, name, quantity, price }) {
      const index = cart.findIndex(item => item.productId === productId);
  
      if (index === -1) {
        cart.push({ productId, name, quantity, price });
      } else {
        cart[index].quantity += quantity;
      }
    }
  
    // Function to remove an item from the cart
    function removeItem(productId) {
      const index = cart.findIndex(item => item.productId === productId);
  
      if (index !== -1) {
        cart.splice(index, 1); // Remove the item at the found index
      }
    }
  
    // Function to get the items in the cart
    function getCartItems() {
      return cart.slice(); // Return a copy of the cart array
    }
  
    // Return an object with methods to manipulate the cart
    return {
      addToCart,
      removeItem,
      getCartItems
    };
  }
  
  // Example usage:
  const myCart = createCart();
  myCart.addToCart({ productId: '001', name: 'Laptop', quantity: 1, price: 1000 });
  myCart.addToCart({ productId: '002', name: 'Mouse', quantity: 2, price: 50 });
  myCart.addToCart({ productId: '003', name: 'Keyboard', quantity: 1, price: 75 });
  
  console.log(myCart.getCartItems());
  // Outputs: 
  // [ 
  //   { productId: '001', name: 'Laptop', quantity: 1, price: 1000 },
  //   { productId: '002', name: 'Mouse', quantity: 2, price: 50 },
  //   { productId: '003', name: 'Keyboard', quantity: 1, price: 75 }
  // ]
  
  myCart.removeItem('002'); // Removing the item with productId '002'
  
  console.log(myCart.getCartItems());
  // Outputs: 
  // [ 
  //   { productId: '001', name: 'Laptop', quantity: 1, price: 1000 },
  //   { productId: '003', name: 'Keyboard', quantity: 1, price: 75 }
  // ]