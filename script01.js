/*
	Se ha creado el siguiente algoritmo que busca que el usuario 
	ingrese numeros e ir sumándolos, hasta que indique lo contrario, para lo cual
	el usuario ingresará la palabra fin. Este algoritmo no está completo, se
	el usuario ingresará la palabra fin. Este algoritmo no está completo, se pide arreglarlo.
*/
var suma = 0;
do {
   var ingreso = prompt("ingresa un numero");
   if (isNaN(ingreso) == true ){
   		ingreso = ingreso.toLowerCase();
   } else {
   		suma += parseInt(ingreso);
   }
}
while (ingreso != "fin");
console.log(suma);

