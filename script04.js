/*
El usuario ingresa n en pantalla, se debe dibujar un cuadradro hueco de largo n.

var n = prompt("Ingreso un Numero!");
if ( isNaN(n) == true ){
  console.log("Numero No Val¡do!");
} else {
  n = parseInt(n);

  for (var i = 0 i <= n; i++) {
  	
  };
}
*/
var n = prompt("Ingrese el numero de filas..");
if ( isNaN(n) == true ){
	console.log("Numero No Val¡do!");
} else {
	var cont = 0; 
	for (var i =  1; i <= n; i++) {
		var f = "";
		for (var y = 1; y <= n; y ++){
			if (i>1 && i < n){
              if (y > 1 && y < n){
				f += " "; 	
              } else {
				f += "*"; 	
              }
			} else {
		    	f += "*"; 	
			}
			cont += 1;
		}
	    console.log(f);
	};
}


