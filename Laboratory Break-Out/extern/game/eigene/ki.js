function erzeugeGegner(){
	if(anzGegner <= 4 && gegnerGesamtAnz <= gegnerAnzLvl && addGegner == true){
		gegnerX.push(800 + extraWert);
		console.log(gegnerX);
		gegnerY.push(515);
		gegnerRichtung.push(-1);
		anzGegner += 1;
		activeEnemys += 1;
		gegnerGesamtAnz += 1;
		extraWert = Math.floor((Math.random()*600)+200); //und gehts?
	}else{
		if(anzGegner == 5){
			addGegner = false;
			anzGegner = 0;
		}
	}
}

function time2(){
	t3=t3+10;
	var datum2 = new Date();
	datum2.setTime(t3);
	var sec = datum2.getSeconds();
	if(sec == tester){
		addGegner = true;
		tester += 10;
	}
}
