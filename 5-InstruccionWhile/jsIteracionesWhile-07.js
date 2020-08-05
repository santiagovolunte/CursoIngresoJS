/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador =0;
	let acumulador =0;
	let respuesta= "si";
	let num;

	do{
		num=parseInt(prompt("Ingrese un numero: ", "Numero"))
		acumulador = acumulador + num;
		contador++;

		respuesta = prompt("Ingresa otro? si/no")

	}while (respuesta == "si")

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value =acumulador/contador;

}//FIN DE LA FUNCIÓN