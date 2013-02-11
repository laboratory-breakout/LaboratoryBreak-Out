// JavaScript Document
function game_start_hover(bild){
	bild.style.backgroundImage = "url(../images/spiel_button_verkehrt.png)";
}
function store_hover(bild){
	bild.style.backgroundImage = "url(../images/store_button_verkehrt.png)";
}
function missionen_hover(bild){
	bild.style.backgroundImage = "url(../images/missionen_button_verkehrt.png)";
}
function anleitung_hover(bild){
	bild.style.backgroundImage = "url(../images/anleitung_button_verkehrt.png)";
}

function game_start_out(bild){
	bild.style.backgroundImage = "url(../images/spiel_button.png)";
}
function store_out(bild){
	bild.style.backgroundImage = "url(../images/store_button.png)";
}
function missionen_out(bild){
	bild.style.backgroundImage = "url(../images/missionen_button.png)";
}
function anleitung_out(bild){
	bild.style.backgroundImage = "url(../images/anleitung_button.png)";
}

function game_starten(){
	document.getElementById('menue_bg').style.display="none";
	
	document.getElementById('game').style.display="block";	
	intro();
}
function store_oeffnen(){
	document.getElementById('menue_bg').style.display="none";
	
	document.getElementById('store').style.display="block";	
}
function missionen_oeffnen(){
	document.getElementById('menue_bg').style.display="none";
	
	document.getElementById('missionen').style.display="block";	
}
function anleitung_oeffnen(){
	document.getElementById('menue_bg').style.display="none";
	
	document.getElementById('anleitung').style.display="block";	
}

function zurueck(){
	if(document.getElementById('anleitung').style.display=="block"){
		document.getElementById('anleitung').style.display="none";
	}
	if(document.getElementById('missionen').style.display=="block"){
		document.getElementById('missionen').style.display="none";
	}
	if(document.getElementById('store').style.display=="block"){
		document.getElementById('store').style.display="none";
	}
	if(document.getElementById('game').style.display=="block"){
		document.getElementById('game').style.display="none";
	}
	
	document.getElementById('menue_bg').style.display="block";
}