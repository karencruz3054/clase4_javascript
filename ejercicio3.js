/**
 * Crea un bucle for que recorra un array de productos.
 *Dentro del bucle, utiliza console.log() para imprimir un 
 *mensaje por cada elemento. El mensaje debe indicar lo que necesitas
 *comprar, siguiendo el formato: "¡No te olvides de comprar [producto]!".
 */

const lista= ['leche', 'pan', 'gaseosa', 'queso', 'pure de tomate']

for(let i = 0 ; i < lista.length ; i++){
    console.log('No te olvides de comprar ' + lista[i] + '!');
}