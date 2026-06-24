/**
 * Recorrer un array de numeros y devuelva el mayor.
 */

const numeros= [20, 40, 70, 10, 25]
let mayor = numeros[0]
for(let i = 1; i < numeros.length; i++){
    if( numeros[i] > mayor){
        mayor=numeros[i];
    }
}

console.log('El numero mayor es: ' + mayor);