// 1. Solicitar 3 números (entre el 1 y el 100)  y definir cual es el mayor.

// let a = parseFloat(prompt('Número "A" del 1 al 100:', ""));
// let b = parseFloat(prompt('Número "B" del 1 al 100:', ""));
// let c = parseFloat(prompt('Número "C" del 1 al 100:', ""));

// console.log(`A: ${a}, B: ${b}, C: ${c}`);
// console.log(`A: ${typeof a}, B: ${typeof b}, C: ${typeof c}`);

// if ((a<=100 && b<=100 && c<=100) && (a>=1 && b>=1 && c>=1)) {
//     if (a>=b && a>=c) {
//         console.log(`A: ${a} es el número mayor.`);
//     } else if (b>=a && b>=c) {
//         console.log(`B: ${b} es el número mayor.`);
//     } else {
//         console.log(`C: ${c} es el número mayor.`);
//     }
// } else {
//     console.log("Ingresaste un número menor a 1 o mayor a 100.");
// }


// -----------------------------------------------


// 2. Solicitar 3 números (entre el 1 y el 100)  y definir el menor de tres números.

// a = parseFloat(prompt('Número "A" del 1 al 100:', ""));
// b = parseFloat(prompt('Número "B" del 1 al 100:', ""));
// c = parseFloat(prompt('Número "C" del 1 al 100:', ""));

// console.log(`A: ${a}, B: ${b}, C: ${c}`);
// console.log(`A: ${typeof a}, B: ${typeof b}, C: ${typeof c}`);

// if ((a<=100 && b<=100 && c<=100) && (a>=1 && b>=1 && c>=1)) {
//     if (a<=b && a<=c) {
//         console.log(`A: ${a} es el número menor.`);
//     } else if (b<=a && b<=c) {
//         console.log(`B: ${b} es el número menor.`);
//     } else {
//         console.log(`C: ${c} es el número menor.`);
//     }
// } else {
//     console.log("Ingresaste un número menor a 1 o mayor a 100.");
// }


// -----------------------------------------------


// 3.


// -----------------------------------------------


// 4. Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3.

// let a = parseInt(prompt('Número "A" del 100 al 200:', ""));

// console.log(`A: ${a}`);
// console.log(`A: ${typeof a}`);

// if (a>=100 && a<=200) {
//     let mensaje = (a%3 == 0) ? 
//         `${a} SI es múltiplo de 3.` : 
//         `${a} NO es múltiplo de 3.`
//     ;
//     console.log(mensaje);
// } else {
//     console.log("Ingresaste un número menor a 100 o mayor a 200.");
// }


// -----------------------------------------------


// 5. Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos.

// let a = parseFloat(prompt('Número "A" del 1 al 100:', ""));
// let b = parseFloat(prompt('Número "B" del 1 al 100:', ""));
// let c = parseFloat(prompt('Número "C" del 1 al 100:', ""));

// console.log(`A: ${a}, B: ${b}, C: ${c}`);
// console.log(`A: ${typeof a}, B: ${typeof b}, C: ${typeof c}`);

// if (a == (b+c)) {
//     console.log(`A: ${a} es la suma de B + C`);
// } else if (b == (a+c)) {
//     console.log(`B: ${b} es la suma de A + C`);
// } else if (c == (a+b)) {
//     console.log(`C: ${c} es la suma de A + B`);
// } else {
//     console.log('Ningún número es la suma de los otros dos..');
// }


// -----------------------------------------------


// 6. Elabora un algoritmo para leer un número y determinar si es par o impar.

// let a = parseFloat(prompt('Número "A":', ""));

// console.log(`A: ${a}`);
// console.log(`A: ${typeof a}`);

// let mensaje = (a%2 == 0) ? 
//     `${a} es un número PAR.` : 
//     `${a} es un número IMPAR.`
// ;
// console.log(mensaje);