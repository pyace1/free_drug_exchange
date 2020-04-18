
$(document).ready(function(){
  $('#slippry-demo').slippry()
});
var lista = [];

function unos(){
	
	var medikament = {
		lek : document.getElementById("lek").value,
		rok : document.getElementById("rok").value,
		kolicina : document.getElementById("kolicina").value,
		produkt : document.getElementById("produkt").value,
		ime : document.getElementById("ime").value,
		jmbg : document.getElementById("jmbg").value,
		telefon : document.getElementById("telefon").value,
		email : document.getElementById("email").value,
		lokacija : document.getElementById("lokacija").value,
		//slanje : document.getElementByName("mybox").value,
		napomena : document.getElementById("napomena").value,

	}
	lista.push(medikament);
	console.log(lista);
	var i;
	for (i=0;i<lista.length;i++){
	document.getElementById("stampa").innerHTML += "<div>" + lista[i].ime + "</div>"; 
	}
}

