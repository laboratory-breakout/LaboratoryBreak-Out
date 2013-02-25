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

//Anfang Figur-Gegner
function hitRatteCharakter(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	if(getroffen == false){
		 if (collides(figur, gegnerRatte)) {
			 	gegnerRX[zahl] = -100;
			 	gegnerRY[zahl] = -300;
				getroffen = true;
				lebenWeniger();
		 }else{
			 getroffen = false;
		 }
	}
}
function hitKaeferCharakter(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	if(getroffen == false){
		 if (collides(figur, gegnerKaefer)) {
			 	gegnerKX[zahl] = -100;
			 	gegnerKY[zahl] = -300;
				getroffen = true;
				lebenWeniger();
		 }else{
			 getroffen = false;
		 }
	}
}
function hitDoktorCharakter(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	if(getroffen == false){
		 if (collides(figur, gegnerDoktor)) {
			 	gegnerDX[zahl] = -100;
			 	gegnerDY[zahl] = -300;
				getroffen = true;
				lebenWeniger();
		 }else{
			 getroffen = false;
		 }
	}
}
//Ende Figur-Gegner
//Anfang Kugeln-Gegner
//Kugel 1 :
function hitKugel1Ratte(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	for(var i=0; i<=kugeln1X.length; i++){
		kugel1.x = kugeln1X[i];
		if (collides(kugel1, gegnerRatte)) {
			gegnerRX[zahl] = -100;
			gegnerRY[zahl] = -300;
			kugeln1X[i] = -100;
			kugeln1Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel1Kaefer(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	for(var i=0; i<=kugeln1X.length; i++){
		kugel1.x = kugeln1X[i];
		if (collides(kugel1, gegnerKaefer)) {
			gegnerKX[zahl] = -100;
			gegnerKY[zahl] = -300;
			kugeln1X[i] = -100;
			kugeln1Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel1Doktor(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	for(var i=0; i<=kugeln1X.length; i++){
		kugel1.x = kugeln1X[i];
		if (collides(kugel1, gegnerDoktor)) {
			gegnerDX[zahl] = -100;
			gegnerDY[zahl] = -300;
			kugeln1X[i] = -100;
			kugeln1Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
//Kugel 2:
function hitKugel2Ratte(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	for(var i=0; i<=kugeln2X.length; i++){
		kugel2.x = kugeln2X[i];
		if (collides(kugel2, gegnerRatte)) {
			gegnerRX[zahl] = -100;
			gegnerRY[zahl] = -300;
			kugeln2X[i] = -100;
			kugeln2Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel2Kaefer(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	for(var i=0; i<=kugeln2X.length; i++){
		kugel2.x = kugeln2X[i];
		if (collides(kugel2, gegnerKaefer)) {
			gegnerKX[zahl] = -100;
			gegnerKY[zahl] = -300;
			kugeln2X[i] = -100;
			kugeln2Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel2Doktor(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	for(var i=0; i<=kugeln2X.length; i++){
		kugel2.x = kugeln2X[i];
		if (collides(kugel2, gegnerDoktor)) {
			gegnerDX[zahl] = -100;
			gegnerDY[zahl] = -300;
			kugeln2X[i] = -100;
			kugeln2Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
//Kugel 3:
function hitKugel3Ratte(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	for(var i=0; i<=kugeln3X.length; i++){
		kugel3.x = kugeln3X[i];
		if (collides(kugel3, gegnerRatte)) {
			gegnerRX[zahl] = -100;
			gegnerRY[zahl] = -300;
			kugeln3X[i] = -100;
			kugeln3Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel3Kaefer(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	for(var i=0; i<=kugeln3X.length; i++){
		kugel3.x = kugeln3X[i];
		if (collides(kugel3, gegnerKaefer)) {
			gegnerKX[zahl] = -100;
			gegnerKY[zahl] = -300;
			kugeln3X[i] = -100;
			kugeln3Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel3Doktor(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	for(var i=0; i<=kugeln3X.length; i++){
		kugel3.x = kugeln3X[i];
		if (collides(kugel3, gegnerDoktor)) {
			gegnerDX[zahl] = -100;
			gegnerDY[zahl] = -300;
			kugeln3X[i] = -100;
			kugeln3Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
//Kugel 4:
function hitKugel4Ratte(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	for(var i=0; i<=kugeln4X.length; i++){
		kugel4.x = kugeln4X[i];
		if (collides(kugel4, gegnerRatte)) {
			gegnerRX[zahl] = -100;
			gegnerRY[zahl] = -300;
			kugeln4X[i] = -100;
			kugeln4Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel4Kaefer(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	for(var i=0; i<=kugeln4X.length; i++){
		kugel4.x = kugeln4X[i];
		if (collides(kugel4, gegnerKaefer)) {
			gegnerKX[zahl] = -100;
			gegnerKY[zahl] = -300;
			kugeln4X[i] = -100;
			kugeln4Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel4Doktor(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	for(var i=0; i<=kugeln4X.length; i++){
		kugel4.x = kugeln4X[i];
		if (collides(kugel4, gegnerDoktor)) {
			gegnerDX[zahl] = -100;
			gegnerDY[zahl] = -300;
			kugeln4X[i] = -100;
			kugeln4Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
//Kugel 5:
function hitKugel5Ratte(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	for(var i=0; i<=kugeln5X.length; i++){
		kugel5.x = kugeln5X[i];
		if (collides(kugel5, gegnerRatte)) {
			gegnerRX[zahl] = -100;
			gegnerRY[zahl] = -300;
			kugeln5X[i] = -100;
			kugeln5Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel5Kaefer(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	for(var i=0; i<=kugeln5X.length; i++){
		kugel5.x = kugeln5X[i];
		if (collides(kugel5, gegnerKaefer)) {
			gegnerKX[zahl] = -100;
			gegnerKY[zahl] = -300;
			kugeln5X[i] = -100;
			kugeln5Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
function hitKugel5Doktor(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	for(var i=0; i<=kugeln5X.length; i++){
		kugel5.x = kugeln5X[i];
		if (collides(kugel5, gegnerDoktor)) {
			gegnerDX[zahl] = -100;
			gegnerDY[zahl] = -300;
			kugeln5X[i] = -100;
			kugeln5Y[i] = -100;
			toteFeinde+=1;
		}
	}
}
//Ende Kugel-Gegner

function hitRatteHuerde(zahl){
	gegnerRatte.x=gegnerRX[zahl];
	for(var i=0; i<=x_huerden_unten.length; i++){
		if(x_huerden_unten[i] >=-80 && x_huerden_unten[i] <=880){
			huerde_boden.x=x_huerden_unten[i];
			if (collides(gegnerRatte, huerde_boden)) {
				if(gegnerRichtungR[zahl] == -1){
					gegnerRichtungR[zahl] = +1;
				}else{
					gegnerRichtungR[zahl] = -1;
				}
			}
		}
	}
}
function hitKaeferHuerde(zahl){
	gegnerKaefer.x=gegnerKX[zahl];
	for(var i=0; i<=x_huerden_unten.length; i++){
		if(x_huerden_unten[i] >=-80 && x_huerden_unten[i] <=880){
			huerde_boden.x=x_huerden_unten[i];
			if (collides(gegnerKaefer, huerde_boden)) {
				if(gegnerRichtungK[zahl] == -1){
					gegnerRichtungK[zahl] = +1;
				}else{
					gegnerRichtungK[zahl] = -1;
				}
			}
		}
	}
			
}
function hitDoktorHuerde(zahl){
	gegnerDoktor.x=gegnerDX[zahl];
	for(var i=0; i<=x_huerden_unten.length; i++){
		if(x_huerden_unten[i] >=-80 && x_huerden_unten[i] <=880){
			huerde_boden.x=x_huerden_unten[i];
			if (collides(gegnerDoktor, huerde_boden)) {
				if(gegnerRichtungD[zahl] == -1){
					gegnerRichtungD[zahl] = +1;
				}else{
					gegnerRichtungD[zahl] = -1;
				}
			}
		}
	}}

//Hittest Kugeln und Huerden:
function hitKugelHuerdeBoden(zahl){
	huerde_boden.x = x_huerden_unten[zahl];
	for(var i=0; i<=kugeln1X.length; i++){
		kugel1.x = kugeln1X[i];
		if(collides(kugel1, huerde_boden)){
			kugeln1X[i]=-100;
			kugeln1Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln2X.length; i++){
		kugel2.x = kugeln2X[i];
		if(collides(kugel2, huerde_boden)){
			kugeln2X[i]=-100;
			kugeln2Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln3X.length; i++){
		kugel3.x = kugeln3X[i];
		if(collides(kugel3, huerde_boden)){
			kugeln3X[i]=-100;
			kugeln3Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln4X.length; i++){
		kugel4.x = kugeln4X[i];
		if(collides(kugel4, huerde_boden)){
			kugeln4X[i]=-100;
			kugeln4Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln5X.length; i++){
		kugel5.x = kugeln5X[i];
		if(collides(kugel5, huerde_boden)){
			kugeln5X[i]=-100;
			kugeln5Y[i]=-100;
		}
	}
}
function hitKugelHuerdeOben(zahl){
	huerde_oben.x = x_huerden_oben[zahl];
	for(var i=0; i<=kugeln1X.length; i++){
		kugel1.x = kugeln1X[i];
		if(collides(kugel1, huerde_oben)){
			kugeln1X[i]=-100;
			kugeln1Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln2X.length; i++){
		kugel2.x = kugeln2X[i];
		if(collides(kugel2,huerde_oben)){
			kugeln2X[i]=-100;
			kugeln2Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln3X.length; i++){
		kugel3.x = kugeln3X[i];
		if(collides(kugel3, huerde_oben)){
			kugeln3X[i]=-100;
			kugeln3Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln4X.length; i++){
		kugel4.x = kugeln4X[i];
		if(collides(kugel4, huerde_oben)){
			kugeln4X[i]=-100;
			kugeln4Y[i]=-100;
		}
	}
	for(var i=0; i<=kugeln5X.length; i++){
		kugel5.x = kugeln5X[i];
		if(collides(kugel5, huerde_oben)){
			kugeln5X[i]=-100;
			kugeln5Y[i]=-100;
		}
	}
}