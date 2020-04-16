//slippry comment
//srecan ti rodjendan dzohusafet
//dje si aco skupljacu vintage satova
//evo tu sam Joco frajeru sa citizenom
//eco drive + automatic diver
//opasan sat, nema zajebancije
$(document).ready(function(){
  $('#slippry-demo').slippry()
});
function unos(){
	var lek = document.getElementById("lek").value;
	var rok = document.getElementById("rok").value;
	var kolicina = document.getElementById("kolicina").value;
	var ime = document.getElementById("ime").value;
	var jmbg = document.getElementById("jmbg").value;
	var telefon = document.getElementById("telefon").value;
	var email = document.getElementById("email").value;
	var lokacija = document.getElementById("lokacija").value;
	var slanje = document.getElementById("slanje").value;
	var napomena = document.getElementById("napomena").value;
	document.getElementById("stampa").innerHTML = "<strong>" + lek + "</strong>&nbsp;" + rok + "&nbsp;" + kolicina + "</br>" + 
	ime + "&nbsp;" + telefon + "&nbsp;" + email + "<br/><strong>" + lokacija + "</strong>" + "&nbsp;" + slanje + "<br/>" + napomena;
	
	
}