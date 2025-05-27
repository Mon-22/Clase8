/*
Ejercicio 4: Determinar si un número es par o impar 
Enunciado: 
En este ejercicio, aprenderás a utilizar operadores aritméticos y condicionales. 
Debes escribir un programa que: 
1. Solicite al usuario que ingrese un número entero. 
2. Determine si el número es par o impar. 
3. Muestre un mensaje indicando si el número es par o impar. 
Requisitos: 
• Utiliza el operador módulo (%) para comprobar si el número es divisible 
por 2. 
• Usa una estructura if-else para mostrar el mensaje adecuado.
*/

const prompt = require('prompt-sync')();

// pedir el numero

let num = parseFloat(prompt(' ingresa un numero:  '));
let numNuevo = (num%2);

// verificando si el numero es , negativo, positivo o cero

if (numNuevo ! 0) {
    console.log (' El numero impar: ' + numNuevo );


}else {
        console.log ( 'El numero es par: ' + numNuevo );
}  