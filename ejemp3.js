/*
Ejercicio 3: Suma de dos números ingresados por el usuario 
Enunciado: 
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
aritméticos. Escribe un programa que: 
1. Pida al usuario que ingrese dos números. 
2. Sume ambos números. 
3. Muestre el resultado de la suma. 
Requisitos: 
• Utiliza prompt() para recibir los números. 
• Utiliza parseFloat() para convertir las entradas a números. 
• Almacena los resultados en variables adecuadas y muestra el resultado. 
*/

const prompt = require('prompt-sync')();

// solicitar los numeros y almacenarlos en las variables

let numUno = parseFloat(prompt(' ingresa el primer numero numero:  '));
let numDos = parseFloat(prompt(' ingresa el segundo numero numero:  '));

// se ejecuta la suma 

let Suma = (numUno + numDos)

console.log (' la suma es:'+ Suma );

