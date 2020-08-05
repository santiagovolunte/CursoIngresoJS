function mostrar()
{
	let  num;
	let contador = 0;
	let acumulador= 0;
	let promedio;

	
	while(contador<5){
		num =  parseInt(prompt("ingrese un numero :"));
		acumulador = num + acumulador
		contador = contador + 1;
	}

	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador ;
	
	document.getElementById("txtIdPromedio").value = promedio ;
	
}//FIN DE LA FUNCIÓN