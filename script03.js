/*
Crear la clase (con la función constructora) de teléfono, un teléfono tiene un número asignado 
que se le pasa a la función constructora, 
y carácterístcas como marca y color y tiene un contador de llamadas que parte en cero. (1 pto)
Crear un método que se llame marcar que recibe como argumento un número de teléfono y aumente un contador de llamadas en uno
*/
function Telefono(numero, marca, color){
	this.numero = numero;
	this.marca = marca;
	this.color = color;
	this.llamadas = 0;
	this.marcar = function(numero){
		this.llamadas += 1;
		console.log("El telefono "+ numero +" fue marcado! llamada : "+ this.llamadas);
	}
}

/*pruebas*/
Tel1 = new Telefono("8182040077", "sony", "negro");
Tel1.marcar("53409889");
Tel1.marcar("98998877");
Tel1.marcar("77886655");
Tel1.marcar("811789654");
Tel1.marcar("811654654");