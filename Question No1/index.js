function createCounter() {
    let count = 0; // This is the private variable that will be maintained by the closure

    return function() {
        count += 1; // Increment the count
        console.log(count); // Output the current count
    };
}

// Create a new counter
const counter = createCounter();

// Simulate button clicks
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3