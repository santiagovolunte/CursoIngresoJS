/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
	var num2;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroUno").value);
	
	alert("La Suma es: " + (num1+num2));	
}

function restar()
{
 var num1;
 var num2;
 
 num1=parseInt(document.getElementById("txtIdNumeroUno").value);
 num2=parseInt(document.getElementById("txtIdNumeroDos").value);

 alert("La resta es: " + (num1-num2));
}

function multiplicar()
{ 
	var num1;
	var num2;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("La multiplicación es: " + (num1*num2));
}

function dividir()
{
	var num1; 
	var num2;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La división es: " + (num1/num2).toFixed(2));
	
}

