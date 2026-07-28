let username: string = "Kellz";
document.body.innerHTML = "Welcome, " + username;
let age : number = 20
let userProfile: { name: string; age: number; isActive: boolean; permissions: string[] } = {
  name: "Kellz",
  age: 20,
  isActive: true,
  permissions: ["read", "write"]
};
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num * 5);
});

let products: { name: string; price: number; quantity: number }[] = [
  { name: "Laptop", price: 1200, quantity: 3 },
  { name: "Mouse", price: 25, quantity: 10 },
  { name: "Monitor", price: 1500, quantity: 5 },
  { name: "Keyboard", price: 45, quantity: 8 }
];
products.forEach(function(product) {
  if (product.price > 1000) {
    console.log(product.name + " costs $" + product.price);
  }
});
let phrase: string = "TypeScript Programming";

console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());
console.log(phrase.length);
console.log(phrase.slice(11));

const students: string[] = ["John", "Mary", "Peter"];
const scores: number[] = [70, 85, 40];

for (let i = 0; i < students.length; i++) {
  let status: string = scores[i]!>= 60 ? "Pass" : "Fail";
  console.log(students[i] + " scored " + scores[i] + " - " + status);
}
