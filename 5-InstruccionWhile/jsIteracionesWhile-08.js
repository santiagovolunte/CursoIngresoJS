/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let positivo =0;
	let negativo=1;
	let respuesta= "si";
	let num;

	while (respuesta == "si"){
		num=parseInt(prompt("Ingrese un numero: ", "Numero"))
		
		if( num>= 0) {
		positivo = positivo + num;
	}

		else {
			negativo = negativo * num;
		}
		
		respuesta = prompt("Ingresa otro? si/no");
	}

	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;
	

}//FIN DE LA FUNCIÓN