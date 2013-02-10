function createPositions(){
	
	x_muenzen[0]=muenze.x;
	y_muenzen[0]=muenze.y;

		for (var j=1; j<=200; j++){
			x_muenzen[j]=x_muenzen[j-1]+Math.floor((Math.random()*120)+40);
			var posYMuenze=Math.floor((Math.random()*2)+1);
			if(posYMuenze == 1){
				y_muenzen[j]=411;
			}else{
				y_muenzen[j]=266;
			}
		}
		
	
	x_huerden_unten[0]=huerde_boden.x;
		for (var j=1; j<=20; j++){
			x_huerden_unten[j]=x_huerden_unten[j-1]+Math.floor((Math.random()*600)+200);
		}
		
	x_huerden_oben[0]=huerde_oben.x;
		for (var j=1; j<=80; j++){
			x_huerden_oben[j]=x_huerden_oben[j-1]+Math.floor((Math.random()*400)+100);
		}
}