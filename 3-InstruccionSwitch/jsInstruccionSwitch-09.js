function mostrar() {
	let estacion;
	let destino;
	let estadiabase = 15000;
	let precio;
	let aumento=0;
	let descuento=0;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					aumento = 1.2;
					break;

				case "Cordoba":
				case "Cataratas":
					descuento = 0.1;
					break;
				case "Mar del plata":
					descuento = 0.2;
					break;
			}
			break;

		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = 0.2;
					break;
				case "Cataratas":
				case "Cordoba":
					aumento = 1.1;
					break;
				case "Mar del plata":
					aumento = 1.2;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento = 1.1;
					break;
				case "Cordoba":
					aumento = 1;
					break;
			}
			break;

	}
	if (aumento != 0) {
		precio = estadiabase * aumento;
		alert("El precio del viaje es $" + precio);
	}
	else if (descuento != 0) {
		precio = estadiabase - (estadiabase * descuento);
		alert("El precio del viaje es $" + precio);
	}


}//FIN DE LA FUNCIÓN