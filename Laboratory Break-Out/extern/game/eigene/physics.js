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
							if(jumpCounter > -200){}else{
								jumping = false;
							}
					}else{
						levelloader_jump();
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
			figur.y += 8;
		}
		levelloader_fallen();
	}
}
function runLeft(){
			levelspeed_pos=10;
			levelloader_links();
}

function runRight(){
			levelspeed_neg=10;
			levelloader_rechts();
}
		
function updateBullets(){
			for(var j = 0;j < kugelnX.length;j++){
				kugelnX[j] += kugel.speed;
				kugel.x=kugelnX[j];
				if((kugelnX[j] % 20) == 0){
					kugelnY[j] += bulletDrop;
				}
				kugel.y=kugelnY[j];
				hitKugelGegner(j);
		 	}
}	

function updateGegner(){
	for(var m = 0; m < gegnerX.length; m++){
		//console.log(gegnerRichtung[m]);
		gegnerX[m] += (gegnerSpeed*gegnerRichtung[m]);
		//console.log(gegnerX[1]);
	}
}