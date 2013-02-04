function gamestart(){
		canvasElement.appendTo('#spiel');
		canvasElement.mousemove(function(e) {
            _mouseX = e.pageX;
			_mouseY = e.pageY;
        });
		$("canvas").click(function(ev) {
			createNewBullet();
			shot = false;
		});
		intervalSpiel=setInterval(function() {
		  jump();
		  fallen();
          update();
		  erzeugeGegner();
          draw();
        }, 1000/FPS);
		
	  	intervalZeit=setInterval("time()",t2);
		interval2 = setInterval("time2()", t4);
		
		function createNewBullet(){
			kugelnX.push(figur.x+70);
			kugelnY.push(figur.y+7);
		   
		}
}