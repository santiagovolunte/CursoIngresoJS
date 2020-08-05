/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numeroSecreto;
let contadorIntentos=1;
let maximo=100;
let minimo=1;
let numeroingresado;

function comenzar() {
	//Genero el número RANDOM entre 1 y 100

	numeroSecreto = Math.round(Math.random()*(maximo-minimo)+minimo);

	numeroingresado=parseInt(document.getElementById("txtIdNumero").value);
	
	

}

function verificar() {
	
	document.getElementById("txtIdIntentos").value=contadorIntentos
	
	alert(numeroSecreto);
	
	/*while (numeroSecreto != numeroingresado){ contadorIntentos++;}*/

	/*if(contadorIntentos==1){ alert(" Usted es un psiquico")
	}
	else if(numeroSecreto==2){
		alert("Excelente percepción")
	}*/
		
		


/*alert(numeroSecreto);
alert(numeroingresado);*/

}