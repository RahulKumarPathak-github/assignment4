const order = {
    orderId: '12345',
    productName: 'Laptop',
    quantity: 2
  };
  
  // Destructuring the properties from the object
  const { orderId, productName, quantity } = order;
  
  // Printing the extracted properties
  console.log(`Order ID: ${orderId}`);
  console.log(`Product Name: ${productName}`);
  console.log(`Quantity: ${quantity}`);