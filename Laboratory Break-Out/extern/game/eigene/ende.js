function spielende(){
	clearInterval(intervalZeit);
	clearInterval(intervalSpiel);
	clearInterval(interval2);
	//Ändern auf letzte Sequenz
	
	document.getElementById("spiel").style.display="none";
	document.getElementById("gameEnde").style.display="block";
	
	document.getElementById("endeText").innerHTML="Punkte: "+PunkteAnzahl+"  x "+Multiplikator+" Multiplikator = "+PunkteAnzahl*Multiplikator+"<br />M&uuml;nzen: "+MuenzenAnzahl+"<br />Get&ouml;tete Feinde: "+toteFeinde+"<br />Zeit: "+Zeit;
	
	var neueMuenzen = parseInt(muenzen)+parseInt(MuenzenAnzahl);
	var neuePunkte = parseInt(punkte)+parseInt(PunkteAnzahl);
	
	if(MuenzenAnzahl >= 100){
		hundertMuenzen = true;
	}
	if(MuenzenAnzahl >= 200){
		zweihundertMuenzen = true;
	}
	if(MuenzenAnzahl >= 500){
		fuenfhundertMuenzen = true;
	}
	if(toteFeinde >= 50){
		fuenfzigGegner = true;
	}
	if(toteFeinde >= 100){
		einhundertGegner = true;
	}

	document.getElementById('erreichteMuenzen').value=neueMuenzen;
	document.getElementById('erreichtePunkte').value=neuePunkte;
	document.getElementById('neueMunitionSMG').value=waffen[1][1];
	document.getElementById('neueMunitionSTG').value=waffen[2][1];
	document.getElementById('neueMunitionMG').value=waffen[3][1];
	document.getElementById('neueMunitionPRE').value=waffen[4][1];
	document.getElementById('hundertMuenzen').value=hundertMuenzen;
	document.getElementById('level2').value=level2;
	document.getElementById('zweihundertMuenzen').value=zweihundertMuenzen;
	document.getElementById('fuenfzigGegner').value=fuenfzigGegner;
	document.getElementById('fuenfhundertMuenzen').value=fuenfhundertMuenzen;
	document.getElementById('level3').value=level3;
	document.getElementById('einhundertGegner').value=einhundertGegner;
	document.getElementById('endgegner_zerstoeren').value=endgegner_zerstoeren;
}