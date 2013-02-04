// JavaScript Document
/**
	var figurLaufen = new Image();
	var laufenAnimation;
	
	function init(){
		figurLaufen.onload = handleImageLoad;
		figurLaufen.onerror = handleImageError;
		figurLaufen.src = "images/figur_laufen.png";
	}
	function handleImageLoad(e) {
    	/**numberOfImagesLoaded++;
        if (numberOfImagesLoaded == 1) {
            numberOfImagesLoaded = 0;
        }
    }
	
	function handleImageError(e) {
        console.log("Error Loading Image : " + e.target.src);
    }

	function createFigur(){
		var spriteSheetRun = new createjs.SpriteSheet({
			images: [figurLaufen],
			frames: {width: 64, height: 64, regX: 32, regY: 32},
			animations:{walk: [0, 9, "walk"]}
		});
		
		laufenAnimation = new createjs.BitmapAnimation(spriteSheetRun);
		
		laufenAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
		
		laufenAnimation.name = "player";
		laufenAnimation.currentFrame = 0;
		return laufenAnimation;
		/**
		createjs.Ticker.addListener(window);
		createjs.Ticker.useRAF = true;
		createjs.Ticker.setFPS(30);
	}

	function tick() {
		
	}**/