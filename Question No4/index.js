function createCart() {
    // Private cart array
    const cart = [];
  
    // Function to add items to the cart
    function addToCart({ productId, name, quantity, price }) {
      // Find the index of the item with the same productId
      const index = cart.findIndex(item => item.productId === productId);
  
      if (index === -1) {
        // If the item doesn't exist, add a new item
        cart.push({ productId, name, quantity, price });
      } else {
        // If the item exists, update the quantity
        cart[index].quantity += quantity;
      }
    }
  
    // Function to get the items in the cart
    function getCartItems() {
      return cart.slice(); // Return a copy of the cart array
    }
  
    // Return an object with methods to manipulate the cart
    return {
      addToCart,
      getCartItems
    };
  }
  
  // Example usage:
  const myCart = createCart();
  myCart.addToCart({ productId: '001', name: 'Laptop', quantity: 1, price: 1000 });
  myCart.addToCart({ productId: '002', name: 'Mouse', quantity: 2, price: 50 });
  myCart.addToCart({ productId: '001', name: 'Laptop', quantity: 1, price: 1000 }); // Updating quantity
  
  console.log(myCart.getCartItems());
  // Outputs: 
  // [ 
  //   { productId: '001', name: 'Laptop', quantity: 2, price: 1000 },
  //   { productId: '002', name: 'Mouse', quantity: 2, price: 50 }
  // ]