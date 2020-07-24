function mostrar()
{
	let Maximo=10;
	let Minimo=1;
	let num;

	num = Math.round (Math.random() * (Maximo-Minimo) + Minimo);
  
	
		if (num > 8  ) 
		{
		alert( "Excelente, su nota es " + num);
	    }
	
		else if ( num  >= 4 && num < 9)
		{
           alert("APROBÓ, su nota es " + num);
	    }
        else
        {
	       alert("Vamos, la proxima se puede, su nota es " +num);
        }

}//FIN DE LA FUNCIÓN