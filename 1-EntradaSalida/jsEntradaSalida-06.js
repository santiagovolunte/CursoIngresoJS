/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var vNumero1;
	var vNumero2;
	var vResultado;
	
	
	 vNumero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	 vNumero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	 vResultado=vNumero1+vNumero2;

	 alert("La suma es: "+ vResultado);

}

