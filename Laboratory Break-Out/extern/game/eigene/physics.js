function calculateWeaponAngle () {
			var alpha;
			if(_mouseX >= 0 && _mouseY >= 0){
				var b = _mouseX - waffe.x;
				var a = waffe.y - _mouseY;
				var c = Math.sqrt((a*a)+(b*b));
				alpha = (180/Math.PI) * Math.sin(a/c);console.log(alpha);
				return alpha;
			}else{
				return 0;
			}
		}
		
function jump() {
	if(jumpPressed == true){
				if(jumpDone == true){
					jumpPressed = false;
				}else{
			
					if(jumping == true){
						figur.y -= 8;
						jumpCounter -= 8;
						if(jumpCounter > -210){}else{
								jumping = false;
						}
					 if(figur.y <= 40){
						jumpCounter = 0;
						jumpDone = false;
						fallen_bool=true;
						levelspeed_neg=10;
						levelspeed_pos=10;	
					}
						levelloader_jump();
						
					}else{
						fallen_bool = true;
					}
				  }
			}
}

function fallen(){
	if(fallen_bool == true){
		if(figur.y>=435){
			figur.y=435;
			jumpPressed = false;
			jumping = true;
			jumpCounter = 0;
			jumpDone = false;
			fallen_bool = false;
		}else{
			figur.y += 12;
		}
		levelloader_fallen();
	}
}
function runLeft(){
			levelspeed_pos=10;
			if(animationCounter == 1){
				animationCounter = 17;
			}else{
				animationCounter -= 1;
			}
			levelloader_links();
}

function runRight(){
			levelspeed_neg=10;
			if(animationCounter == 17){
				animationCounter = 1;
			}else{
				animationCounter += 1;
			}
			levelloader_rechts();
}
		
function updateBullets(){
			for(var j = 0;j < kugeln1X.length;j++){
				kugeln1X[j] += kugel1.speed;
				kugel1.x=kugeln1X[j];
				/*if((kugelnX[j] % 20) == 0){
					kugelnY[j] += bulletDrop;
				}*/
				kugel1.y=kugeln1Y[j];
				
		 	}
			
			for(var j = 0;j < kugeln2X.length;j++){
				kugeln2X[j] += kugel2.speed;
				kugel2.x=kugeln2X[j];
				/*if((kugelnX[j] % 20) == 0){
					kugelnY[j] += bulletDrop;
				}*/
				kugel2.y=kugeln2Y[j];

		 	}
			
			for(var j = 0;j < kugeln3X.length;j++){
				kugeln3X[j] += kugel3.speed;
				kugel3.x=kugeln3X[j];
				/*if((kugelnX[j] % 20) == 0){
					kugelnY[j] += bulletDrop;
				}*/
				kugel3.y=kugeln3Y[j];
				//hitKugelGegner(j);
		 	}
			
			for(var j = 0;j < kugeln4X.length;j++){
				kugeln4X[j] += kugel4.speed;
				kugel4.x=kugeln4X[j];
				/*if((kugelnX[j] % 20) == 0){
					kugelnY[j] += bulletDrop;
				}*/
				kugel4.y=kugeln4Y[j];
				//hitKugelGegner(j);
		 	}
			
			for(var j = 0;j < kugeln5X.length;j++){
				kugeln5X[j] += kugel5.speed;
				kugel5.x=kugeln5X[j];
				/*if((kugelnX[j] % 20) == 0){
					kugelnY[j] += bulletDrop;
				}*/
				kugel5.y=kugeln5Y[j];
				//hitKugelGegner(j);
		 	}
}	

function updateGegner(){
	for(var m = 0; m < gegnerRX.length; m++){
		gegnerRX[m] += (gegnerSpeedR*gegnerRichtungR[m]);
		hitRatteCharakter(m);
		hitRatteHuerde(m);
		hitKugel1Ratte(m);
		hitKugel2Ratte(m);
		hitKugel3Ratte(m);
		hitKugel4Ratte(m);
		hitKugel5Ratte(m);
	}
	
	for(var m = 0; m < gegnerKX.length; m++){
		gegnerKX[m] += (gegnerSpeedK*gegnerRichtungK[m]);
		hitKaeferCharakter(m);
		hitKaeferHuerde(m);
		hitKugel1Kaefer(m);
		hitKugel2Kaefer(m);
		hitKugel3Kaefer(m);
		hitKugel4Kaefer(m);
		hitKugel5Kaefer(m);
	}
	
	for(var m = 0; m < gegnerDX.length; m++){
		gegnerDX[m] += (gegnerSpeedD*gegnerRichtungD[m]);
		hitDoktorCharakter(m);
		hitDoktorHuerde(m);
		hitKugel1Doktor(m);
		hitKugel2Doktor(m);
		hitKugel3Doktor(m);
		hitKugel4Doktor(m);
		hitKugel5Doktor(m);
	}

	//console.log(gegnerDX);
	
	if(bossActive == true){
		endbossX += bossgegner.speed*endbossRichtung;
	}
}

function lebenWeniger(){
	leben -= 1;
	lebensanzeige.sprite = Sprite("Lebensanzeige/lebensanzeige_" + leben);
	if(leben == 4){
		getroffen = false;
	}
	if(leben == 3){
		getroffen = false;
	}
	if(leben == 2){
		getroffen = false;
	}
	if(leben == 1){
		getroffen = false;
	}
	if(leben == 0){
		spielende();
	}
}