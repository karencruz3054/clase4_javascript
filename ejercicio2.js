/**
*Utilizando estructura de control determinar el medio de transporte más adecuado 
*para una persona. Dada una distancia en metros, sugiera un medio de transporte
* basado en las siguientes reglas:
*0 a 1000 metros = pie
*1000 a 10000 metros = bicicleta
*10000 a 30000 metros = colectivo
*30000 a 100000 metros = auto
*+100000 = avion
*/

let metros = -9

if(metros < 0){
    console.log('Metros de 0 en adelante..');  
}else if(metros>= 0 && metros <= 1000){
    console.log('Vaya a pie')
} else if( metros > 1000 && metros <= 10000){
    console.log('Vaya en bicicleta')
} else if( metros >10000 && metros <= 30000){
    console.log('Vaya en colectivo')
} else if( metros >30000 && metros <= 100000){
    console.log('Vaya en auto')
} else{
    console.log('Vaya en avion')
}
