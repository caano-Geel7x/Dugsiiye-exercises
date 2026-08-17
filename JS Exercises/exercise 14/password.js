let password;

do {
    password = prompt("Enter a number greater than 10:");
} while (Number(password) <= 10); 

console.log("Access granted!");