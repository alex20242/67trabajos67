JAVASCRIPT (VS CODE)
const readline = require('readline-sync');
let ventas = [];
for (let i = 0; i < 3; i++) {
ventas[i] = [];
for (let j = 0; j < 3; j++) {
ventas[i][j] = readline.questionInt(
`Venta Negocio ${i+1}, Dia ${j+1}: `
);
}
}
console.log("--- Matriz de Ventas ---");
for (let i = 0; i < 3; i++) {
console.log(ventas[i].join(" "));