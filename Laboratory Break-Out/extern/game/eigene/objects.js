function createObjects(){
	  figur = {
			color: "#00A",
			x: 400,
			y: 435,
			width: 80,
			height: 112,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
        };
		
		boden = {
			color: "#00A",
			x: 0,
			y: 543,
			width: 800,
			height: 57,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		huerde_boden = {
			color: "#00A",
			x: 500,
			y: 445,
			width: 80,
			height: 100,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		huerde_oben = {
			color: "#00A",
			x: 600,
			y: 250,
			width: 80,
			height: 50,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		muenze = {
				color: "#00A",
				x: 600,
				y: 400,
				width: 35,
				height: 35,
				draw: function() {
					canvas.fillStyle = this.color;
					canvas.fillRect(this.x, this.y, this.width, this.height);
				}
		};
		
		
		kugel1 = {
			color: "#00A",
			x: 0,
			y: 0,
			width: 5,
			height: 5,
			speed: 10,
			damage: 0,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		kugel2 = {
			color: "#00A",
			x: 0,
			y: 0,
			width: 5,
			height: 5,
			speed: 13,
			damage: 0,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		kugel3 = {
			color: "#00A",
			x: 0,
			y: 0,
			width: 5,
			height: 5,
			speed: 15,
			damage: 0,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		kugel4 = {
			color: "#00A",
			x: 0,
			y: 0,
			width: 5,
			height: 5,
			speed: 15,
			damage: 0,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		kugel5 = {
			color: "#00A",
			x: 0,
			y: 0,
			width: 5,
			height: 5,
			speed: 20,
			damage: 0,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		gegnerRatte = {
			color: "#00A",
			x: 700,
			y: 515,
			width: 121,
			height: 29,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		gegnerKaefer = {
			color: "#00A",
			x: 700,
			y: 435,
			width: 42,
			height: 115,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		gegnerDoktor = {
			color: "#00A",
			x: 700,
			y: 435,
			width: 25,
			height: 110,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		bossgegner = {
			color: "#00A",
			x: 700,
			y: 515,
			width: 130,
			height: 169,
			speed: 5,
			draw: function() {
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		
		muenzeIcon = {
				color: "#00A",
				x: 531,
				y: 20,
				width: 28,
				height: 28,
				draw: function() {
					canvas.fillStyle = this.color;
					canvas.fillRect(this.x, this.y, this.width, this.height);
				}
		};
		
		lebensanzeige = {
			color: "#00A",
			x: 30,
			y: 8,
			width: 266,
			height: 38,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		figur.sprite = Sprite("Charakter/spieler1_1");
		boden.sprite = Sprite("boden");
		huerde_boden.sprite = Sprite("Huerde_Unten");
		huerde_oben.sprite = Sprite("Huerde_Oben");
		muenze.sprite = Sprite("muenze");
		kugel1.sprite = Sprite("bullet1");
		kugel2.sprite = Sprite("bullet2");
		kugel3.sprite = Sprite("bullet3");
		kugel4.sprite = Sprite("bullet4");
		kugel5.sprite = Sprite("bullet5");
		gegnerRatte.sprite = Sprite("enemy1");
		gegnerKaefer.sprite = Sprite("enemy2");
		gegnerDoktor.sprite = Sprite("enemy3");
		bossgegner.sprite = Sprite("boss");
		muenzeIcon.sprite = Sprite("muenzeIcon");
		lebensanzeige.sprite = Sprite("Lebensanzeige/lebensanzeige_" + leben);
}