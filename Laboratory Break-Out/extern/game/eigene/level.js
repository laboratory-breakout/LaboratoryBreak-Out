function EinLevelWeiter(zahl){
	if(zahl==200){
		if(x_muenzen[200] <= -100){
			if(LevelEinsAbsolviert == true){
				clearInterval(intervalZeit);
				clearInterval(intervalSpiel);
				clearInterval(interval2);
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
