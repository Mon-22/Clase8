/*
Ejercicio 2: Verificar si un número es positivo, negativo o cero 
Enunciado: 
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
programa en JavaScript que: 
1. Pida al usuario que ingrese un número. 
2. Verifique si el número es positivo, negativo o igual a cero. 
3. Muestre un mensaje indicando cuál es el caso. 
Requisitos:
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
verificaciones. 
• Usa parseFloat() para convertir la entrada del usuario a un número. 
*/
const prompt = require('prompt-sync')();

// pedir el numero

let num = parseFloat(prompt(' ingresa un numero:  '));

// verificando si el numero es , negativo, positivo o cero

if (num > 0) {
    console.log (' El numero es positivo');

}else if (num<0) {
    console.log ( 'El numero es negativo');
}else {
        console.log ( 'El numero es cero' );
}  