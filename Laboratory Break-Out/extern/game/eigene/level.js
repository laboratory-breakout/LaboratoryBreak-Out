function EinLevelWeiter(zahl){
	if(zahl==20){
		if(x_muenzen[20] <= -100){
			if(LevelEinsAbsolviert == true){
				clearInterval(intervalZeit);
				clearInterval(intervalSpiel);
				clearInterval(interval2);
				document.getElementById("spiel").style.display="none";
				document.getElementById("toLevel_2").style.display="block";
				SeqEndeLevelEins();	
			}
			if(LevelZweiAbsolviert == true){
				SeqEndeLevelZwei();	
			}
			if(LevelDreiAbsolviert == true){
				//Endgegner kommt
			}
		}
	}
}
function startLevelEins(){
	LevelText = "1";
	LevelEinsAbsolviert = true;	
	gamestart();
}
function startLevelZwei(){
/*Mission:*/level2=true;
	LevelText = "2";
	LevelEinsAbsolviert = false;	
	LevelZweiAbsolviert = true;
	gamestart();
	
}
function startLevelDrei(){
/*Mission:*/level3=true;
	LevelZweiAbsolviert = false;
	LevelDreiAbsolviert = true;
	LevelText = "3";
}
