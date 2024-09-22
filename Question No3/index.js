function createCart() {
    // Private cart array
    const cart = [];
  
    // Function to add items to the cart
    function addItem(item) {
      cart.push(item);
    }
  
    // Function to get the items in the cart
    function getCartItems() {
      return cart.slice(); // Return a copy of the cart array
    }
  
    // Return an object with methods to manipulate the cart
    return {
      addItem,
      getCartItems
    };
  }
  
  // Example usage:
  const myCart = createCart();
  myCart.addItem({ productName: 'Laptop', quantity: 1 });
  myCart.addItem({ productName: 'Mouse', quantity: 2 });
  
  console.log(myCart.getCartItems()); // Outputs: [ { productName: 'Laptop', quantity: 1 }, { productName: 'Mouse', quantity: 2 } ]