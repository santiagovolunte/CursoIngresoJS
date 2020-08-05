/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables
	let Maximo;
	let Minimo;
	let respuesta;
	let numero;
	let flag = 0;
	//iniciar variables


	do {

		numero = parseInt(prompt("Inregese un numero: "));



		if (flag == 0) {
			Maximo = numero;
			Minimo = numero;
			flag = 1;
		}

		else if (numero > Maximo) {
			Maximo = numero;
		}
	
	else if (numero < Minimo){
		Minimo=numero;
	}

		respuesta = prompt("Desea continuar ingreando numeros? si/no ");
} while (respuesta == "si");

document.getElementById("txtIdMaximo").value = Maximo
document.getElementById("txtIdMinimo").value = Minimo
}//FIN 