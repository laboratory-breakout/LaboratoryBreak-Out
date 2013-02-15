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
			height: 10,
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
		
		
		kugel = {
			color: "#00A",
			x: figur.x+70,
			y: figur.y+7,
			width: 15,
			height: 15,
			speed: 15,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		}
		
		gegner = {
			color: "#00A",
			x: 700,
			y: 515,
			width: 20,
			height: 30,
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
			width: 200,
			height: 30,
			draw: function(){
				canvas.fillStyle = this.color;
				canvas.fillRect(this.x, this.y, this.width, this.height);
			}
		};
		figur.sprite = Sprite("Charakter/spieler1");
		boden.sprite = Sprite("boden");
		huerde_boden.sprite = Sprite("Huerde_Unten");
		huerde_oben.sprite = Sprite("Huerde_Oben");
		muenze.sprite = Sprite("muenze");
		kugel.sprite = Sprite("bullet");
		gegner.sprite = Sprite("enemy1");
		muenzeIcon.sprite = Sprite("muenzeIcon");
		lebensanzeige.sprite = Sprite("Lebensanzeige/lebensanzeige_" + leben);
}