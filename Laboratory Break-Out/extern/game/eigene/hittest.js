function collides(a, b) {
  	return a.x < b.x + b.width &&
      		a.x + a.width > b.x &&
       		a.y < b.y + b.height &&
       	    a.y + a.height > b.y;
}
function hitMuenze(zahl) {
	if (collides(figur, muenze)) {
       		x_muenzen[zahl]=-100;
			y_muenzen[zahl]=-100;
			MuenzenAnzahl +=1;
   	}
}

function hitHuerdeBoden_rechts(zahl){
  	if (collides(figur, huerde_boden)) {
		  levelspeed_neg=10;
		  levelspeed_pos=0;	 
	}
}
function hitHuerdeBoden_links(zahl){
  	if (collides(figur, huerde_boden)) {
		  levelspeed_neg=0;
		  levelspeed_pos=10;
	}
}
function hitHuerdeBoden_fallen(zahl){
	if(collides(figur, huerde_boden)){
		if(figur.y <= 339 || figur.y == 343){
			figur.y=327;
			jumpPressed = false;
			jumping = true;
			jumpCounter = 0;
			jumpDone = false;
			fallen_bool=true;
			levelspeed_neg=10;
			levelspeed_pos=10;	 
		}
	}
}
function hitHuerdeOben_rechts(zahl){
  	if (collides(figur, huerde_oben)) {
		  levelspeed_neg=10;
		  levelspeed_pos=0;	  
	}
}
function hitHuerdeOben_links(zahl){
  	if (collides(figur, huerde_oben)) {
		  levelspeed_neg=0;
		  levelspeed_pos=10;	 
	}
}
function hitHuerdeOben_jump(zahl){
	if(figur.y>=288){
	 if (collides(figur, huerde_oben)) {
		  jumpPressed = false;
		  jumping = false;
		  jumpCounter = 0;
		  jumpDone = false;
		  fallen_bool=true;
		}
	 }
	
}
function hitHuerdeOben_fallen(zahl){
	 if (collides(figur, huerde_oben)) {
		if(figur.y <= 147){
			figur.y=135;
			jumpPressed = false;
			jumping = true;
			jumpCounter = 0;
			jumpDone = false;
			fallen_bool=true;
			levelspeed_neg=10;
			levelspeed_pos=10;	 
		}
	 }
}

function hitKugelGegner(zahl){
	if(collides(gegner, kugel)){
		kugelnX.shift();
	}
}