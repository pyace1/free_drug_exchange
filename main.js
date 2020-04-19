
$(document).ready(function(){
  $('#slippry-demo').slippry()
});
var lista = [];
function unos(){
	document.getElementById("stampa").innerHTML = " ";
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
		slanje : document.getElementsByClassName("mybox").value,
		opciono_slanje : document.getElementById("opciono_slanje").value,
		napomena : document.getElementById("napomena").value,
	}
	lista.push(medikament);
	console.log(lista);
	var i;
	for (i=0 ; i<lista.length ; i++){
	document.getElementById("stampa").innerHTML += "<div><strong>" + lista[i].lek + "</strong> " + lista[i].rok + " " + lista[i].kolicina + 
	lista[i].produkt +  "<br/><br/>" + lista[i].ime + " " + lista[i].telefon + " " + lista[i].email + " <strong>" + lista[i].lokacija + "</strong> " + 
    "<br/><br/>" + lista[i].slanje + " " + " " + lista[i].opciono_slanje + " " + lista[i].napomena + "<hr></div>"; 
	}
}

