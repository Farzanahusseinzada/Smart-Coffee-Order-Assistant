// Part 1: Login & Access Control
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:");

if ((username === "admin" || username === "user") && password === "1234") {
    let role = username === "admin" ? "admin" : "user";
    let securityLevel = role === "admin" ? "high" : "low";
    alert(`Welcome, ${role}! Your security level is ${securityLevel}.`);

    // Part 2: Coffee Shop Order Calculator
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let coffeeType = prompt("Enter your coffee type (espresso, latte, or cappuccino):");
    let quantity = parseInt(prompt("Enter quantity of cups:"));

    let pricePerCup;
    switch (coffeeType) {
        case "espresso":
            pricePerCup = 2.5;
            break;
        case "latte":
            pricePerCup = 3.5;
            break;
        case "cappuccino":
            pricePerCup = 4.0;
            break;
        default:
            alert("Invalid coffee type. Exiting...");
            throw new Error("Invalid coffee type");
    }

    let originalTotal = pricePerCup * quantity;
    let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
    let finalTotal = originalTotal - discount;

    
    // Part 3: Bill Splitter with Tip
    let people = parseInt(prompt("How many people are splitting the bill (1, 2, or 3)?"));
    while (people < 1 || people > 3) {
        people = parseInt(prompt("Invalid input. Please enter 1, 2, or 3:"));
    }

    let tipPercentage = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));
    while ([0, 5, 10, 15].indexOf(tipPercentage) === -1) {
        tipPercentage = parseInt(prompt("Invalid input. Please enter 0, 5, 10, or 15:"));
    }

    let tipAmount = finalTotal * (tipPercentage / 100);
    let totalWithTip = finalTotal + tipAmount;
    let amountPerPerson = totalWithTip / people;

    
    alert(`Hello ${name}!\n` +
      `You ordered ${quantity} cup(s) of ${coffeeType}.\n` +
      `Original Total: $${(originalTotal).toFixed(2)}\n` +
      `Discount: $${discount.toFixed(2)}\n`+
      `Tip: $${tipAmount.toFixed(2)}\n` +
      `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
      `Split between ${people} person(s): $${amountPerPerson.toFixed(2)}`);
}