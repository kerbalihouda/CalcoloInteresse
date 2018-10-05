/* funzioni per crt */
function calcola (){
	var C = document.forms.crt.C.value;
	var r = document.forms.crt.r.value;
	var t = document.forms.crt.t.value;
	var u = document.forms.crt.u.value;
	var I;
	
	if(U = 0)}
	document.getElementById('risultato').innerHTML="Errore!";
	}
	else if(U = 1){
		var d =36500;
	}
	else if(U = 2){
		var d =1200;
	}
	else if(U = 3){
		var d =100;
	}	
	
	I = (C*r*t)/d;
	
	document.getElementById('risultato').innerHTML="Interesse: " + I + " € ";
}
function annulla(){
	document.getElementById('risultato').innerHTML=" ";
