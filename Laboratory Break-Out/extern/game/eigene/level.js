var LevelEinsSequenz = false;
var LevelZweiSequenz = false;
var LevelDreiSequenz = false;

function EinLevelWeiter(zahl){
	if(zahl==200){
		if(x_muenzen[200] <= -100){
				if(LevelEinsSequenz == false){
					SeqEndeLevelEins();	
					LevelEinsSequenz = true;
				}
		}
	}
	if(zahl==400){
		if(x_muenzen[400] <= -100){
			if(LevelZweiSequenz == false){
				SeqEndeLevelZwei();	
				LevelZweiSequenz = true;
			}	
		}
	}
	if(zahl==600){
		if(x_muenzen[600] <= -100){
			if(LevelDreiSequenz == false){
				clearInterval(intervalZeit);
				clearInterval(intervalSpiel);
				clearInterval(interval2);
				LevelDreiSequenz = true;
				//Auf Endgegner ändern
				spielende();
			}
		}
	}
}
function startLevelEins(){
	LevelText = "1";
	gamestart();
}
function startLevelZwei(){
/*Mission:*/level2=true;
	document.getElementById("spiel").style.backgroundImage = "url(../images/LevelBg2.png)";
	LevelText = "2";
}
function startLevelDrei(){
/*Mission:*/level3=true;
	document.getElementById("spiel").style.backgroundImage = "url(../images/LevelBg3.png)";
	LevelText = "3";
}
