/*
Se pide una función que recibe un arreglo como parámetro y devuelva una copia del arreglo.
*/
copia_arrego = function(arr){
  var nuevo = [];
  for (var i = 0; i < arr.length; i++){
  	nuevo[i] = arr[i];
  }
  return nuevo;
}

var mi_arreglo1 = [32,45,67,6];
var mi_arreglo2 = copia_arrego(mi_arreglo1);

console.log(mi_arreglo2);
