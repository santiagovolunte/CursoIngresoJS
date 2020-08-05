/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	let respuesta;
	let numero;
	let negativo = 0;
	let positivo = 0;
	let contadorcero = 0;
	let contadorpositivos = 0;
	let contadornegativos = 0;
	let contadordepares = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));

		if (numero > 0) {
			positivo = positivo + numero;
			contadorpositivos++;

		}
		else if (numero < 0) {
			negativo = negativo - numero;
			contadornegativos++;

		}
		
		else if (numero == 0) {
			contadorcero++;

		}

if (numero %2 == 0){ contadordepares++;

}


		respuesta = prompt("Desea continuar ingresando numero? si/no");

	} while (respuesta == "si" || respuesta == "s" || respuesta == "SI")

	document.write("1-La suma de los negativos es : -" + negativo);
	document.write(" 2-La suma de los positivos es : " + positivo);
	document.write(" 3-La cantidad de positivos es: " + contadorpositivos);
	document.write(" 4-La cantidad de negativos  es : " + contadornegativos);
	document.write(" 5-La cantidad de ceros es: " + contadorcero);
	document.write(" 6-Cantidad de numeros pares : " + contadordepares)
	document.write(" 7-El promedio de los positivos es: " + (positivo / contadorpositivos));
	document.write(" 8-El promedio de los negativos es: " + (negativo / contadornegativos));
	document.write(" 9-La diferencia entre positivo y negativo es: " + (positivo - negativo));
}//FIN DE LA FUNCIÓN