
function debug01() {
    /* for (let i = 1; i <= 5; i--) {
        console.log(i);
    } */

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

/* debug01(); */

function factorial(n) {
    
   /*  let resultado = 1;
    for (let i = 1; i < n; i++) { // <-- off-by-one
        resultado *= i;
    } */
    
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

/* console.log(factorial(5)); // Esperado: 120 */

function maximo(lista) {
    let max = lista[0]; 
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}

/* console.log(maximo([-10, -3, -50])); // Esperado: -3 */

// Debería calcular la media de tres números

function media(a, b, c) {
    return (a + b + c )/ 3;
}

console.log(media(4, 10, 16)); 
// Esperado: 10