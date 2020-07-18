/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	
	var vDato;

	vDato=prompt("Ingrese un Dato","Dato");

	document.getElementById("txtIdNombre").value = vDato;

	
}

