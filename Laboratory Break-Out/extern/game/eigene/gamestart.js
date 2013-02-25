function gamestart(){
	welcheWaffenWievielMunition();
		
		intervalSpiel=setInterval(function() {
		  jump();
		  fallen();
		  erzeugeGegner();
          update();
          draw();
        }, 1000/FPS);
		
		intervalAnimation=setInterval(function() {
		  figur.sprite = Sprite("Charakter/spieler"+waffen[waffenIndex][0]+"_"+animationCounter);
        }, 1000/FPS);
		
		
	  	intervalZeit=setInterval("time()",t2);
		interval2 = setInterval("time2()", t4);
}