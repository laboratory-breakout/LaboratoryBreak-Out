function gamestart(){

		intervalSpiel=setInterval(function() {
		  jump();
		  fallen();
          update();
		  erzeugeGegner();
          draw();
        }, 1000/FPS);
		
	  	intervalZeit=setInterval("time()",t2);
		interval2 = setInterval("time2()", t4);
}