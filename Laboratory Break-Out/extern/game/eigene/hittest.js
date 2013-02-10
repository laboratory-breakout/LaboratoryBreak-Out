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
function hitHuerdeBoden_jump(zahl){
  	if (collides(figur, huerde_boden)) {
		if(figur.y>=415){
		  figur.y=415;
		  jumpPressed = false;
		  jumping = true;
		  jumpCounter = 0;
		  jumpDone = false;
		  fallen_bool=true;
		  levelspeed_pos=10;
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
	 if (collides(figur, huerde_oben)) {
  	 if(figur.y>=347){
		  jumpPressed = false;
		  jumping = false;
		  jumpCounter = 0;
		  jumpDone = false;
		  levelspeed_pos=10;
		  levelspeed_pos=10;
		  fallen_bool=true;
		 }else{
		  figur.y=271;
		  jumpPressed = false;
		  jumping = true;
		  jumpCounter = 0;
		  jumpDone = false;
		  levelspeed_pos=10;
		  levelspeed_pos=10;
		  fallen_bool=true;
	  	}
	}
}

function hitKugelGegner(zahl){
	if(collides(gegner, kugel)){
		kugelnX.shift();
	}
}