/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	

while (numeroIngresado > 9){
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
} 


if ( numeroIngresado >= 0 && numeroIngresado<10 ){

document.getElementById("txtIdNumero").value=numeroIngresado + " es el dato obenido"
}


}//FIN DE LA FUNCIÓN