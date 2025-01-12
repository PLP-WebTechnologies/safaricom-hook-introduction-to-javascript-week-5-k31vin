// Part 1: JavaScript Basics

// Variables and Data Types
const name = "kelvin Kitonyo";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "traveling"];
const user = { firstName: "Kelvin", lastName: "Kitonyo", role: "Developer" };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }
    alert(`Result: ${result}`);
}
// calculator() function;
calculator();

// Functions
function greetUser(name) {
    return `Hello, ${name}! Welcome to the my website.`;
}
document.getElementById("greeting").innerText = greetUser("kelvin Kitonyo");

// Part 2: JavaScript Control Structures

// If Statements
const userAge = parseInt(prompt("Enter your age:"));
if (isNaN(userAge)) {
    document.getElementById("eligibility").innerText = "Invalid input.";
} else if (userAge >= 18) {
    document.getElementById("eligibility").innerText = "You are eligible to vote!";
} else {
    document.getElementById("eligibility").innerText = "You are not eligible to vote yet.";
}

// Loops
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.querySelector("h1").innerText = "JavaScript in Action!";
const dynamicDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "I just learnt Javascript!";
dynamicDiv.appendChild(newParagraph);
