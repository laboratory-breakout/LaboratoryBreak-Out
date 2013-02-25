var zwischenR = 800;
var zwischenK = 800;
var zwischenD = 800;
function erzeugeGegner(){
	if(wave == 1){
		if(anzGegner <=4 && addGegner == true){
			extraWert = Math.floor((Math.random()*300)+200);
			zwischenR += extraWert;
			gegnerRX.push(zwischenR);
			gegnerRY.push(515);
			gegnerRichtungR.push(-1);
			anzGegner += 1;
			activeEnemys += 1;
			gegnerGesamtAnz += 1;
		}else{
			if(anzGegner == 5){
				addGegner = false;
				anzGegner = 0;
			}
		}
	}else if(wave == 2){
		if(anzGegner <= 4 && addGegner == true){
			extraWert = Math.floor((Math.random()*300)+200);
			zwischenK += extraWert;
			gegnerKX.push(zwischenK);
			gegnerKY.push(435);
			gegnerRichtungK.push(-1);
			anzGegner += 1;
			activeEnemys += 1;
			gegnerGesamtAnz += 1;
		}else{
			if(anzGegner == 5){
				addGegner = false;
				anzGegner = 0;
			}
		}
	}else if(wave == 3){
		if(anzGegner <= 4 && addGegner == true){
			extraWert = Math.floor((Math.random()*300)+200);
			zwischenD += extraWert;
			gegnerDX.push(zwischenD);
			//console.log(gegnerX);
			gegnerDY.push(435);
			gegnerRichtungD.push(-1);
			anzGegner += 1;
			activeEnemys += 1;
			gegnerGesamtAnz += 1;
		}else{
			if(anzGegner == 5){
				addGegner = false;
				anzGegner = 0;
			}
		}
	}else if(wave == 4){
		createBoss();
	}
	/*if(anzGegner <= 4 && gegnerGesamtAnz <= gegnerAnzLvl && addGegner == true){
		gegnerX.push(800 + extraWert);
		//console.log(gegnerX);
		gegnerY.push(515);
		gegnerRichtung.push(-1);
		anzGegner += 1;
		activeEnemys += 1;
		gegnerGesamtAnz += 1;
		extraWert = Math.floor((Math.random()*600)+200);
	}else{
		if(anzGegner == 5){
			addGegner = false;
			anzGegner = 0;
		}
	}*/
}

function createBoss(){
	endbossX = 800;
	endbossY = 380;
	endbossRichtung = -1;
	bossActive = true;
}

function time2(){
	t3=t3+10;
	var datum2 = new Date();
	datum2.setTime(t3);
	var sec = datum2.getSeconds();
	if(sec == tester){
		addGegner = true;
		tester += 5;
		
		wave += 1;
	}
}
