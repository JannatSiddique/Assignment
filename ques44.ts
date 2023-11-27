function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (let item of items) {
        console.log(item);
    }
    console.log("Bread");
    console.log("Enjoy your sandwich!");
}

// Making sandwiches with different items
makeSandwich('Cheese', 'Tomato', 'Lettuce');
makeSandwich('Turkey', 'Bacon', 'Avocado', 'Onion');
makeSandwich('Peanut Butter', 'Jelly');
