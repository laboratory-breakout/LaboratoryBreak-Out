function spielende(){
	clearInterval(intervalZeit);
	clearInterval(intervalSpiel);
	//Ändern auf letzte Sequenz
	
	document.getElementById("spiel").style.display="none";
	document.getElementById("gameEnde").style.display="block";
	
	document.getElementById("endeText").innerHTML="Punkte: "+PunkteAnzahl+"  x "+Multiplikator+" Multiplikator = "+PunkteAnzahl*Multiplikator+"<br />M&uuml;nzen: "+MuenzenAnzahl+"<br />Get&ouml;tete Feinde: "+toteFeinde+"<br />Zeit: "+Zeit;
	
	var neueMuenzen = parseInt(muenzen)+parseInt(MuenzenAnzahl);
	var neuePunkte = parseInt(punkte)+parseInt(PunkteAnzahl);
	document.getElementById('erreichteMuenzen').value=neueMuenzen;
	document.getElementById('erreichtePunkte').value=neuePunkte;
	document.getElementById('hundertMuenzen').value=hundertMuenzen;
	document.getElementById('level2').value=level2;
	document.getElementById('zweihundertMuenzen').value=zweihundertMuenzen;
	document.getElementById('fuenfzigGegner').value=fuenfzigGegner;
	document.getElementById('fuenfhundertMuenzen').value=fuenfhundertMuenzen;
	document.getElementById('level3').value=level3;
	document.getElementById('einhundertGegner').value=einhundertGegner;
	document.getElementById('endgegner_zerstoeren').value=endgegner_zerstoeren;
}