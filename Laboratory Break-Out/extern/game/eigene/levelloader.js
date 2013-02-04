function levelloader_rechts(){
	 if(figur.x >= 0){
				for(var i=0; i<=20; i++){
					x_huerden_unten[i]=x_huerden_unten[i]-levelspeed;
					huerde_boden.x=x_huerden_unten[i];
					hitHuerdeBoden_rechts(i);
				}
				for(var i=0; i<=80; i++){
					x_huerden_oben[i]=x_huerden_oben[i]-levelspeed;
					huerde_oben.x=x_huerden_oben[i];
					hitHuerdeOben_rechts(i);
				}
				for(var i=0; i<=500; i++){
					x_muenzen[i]=x_muenzen[i]-levelspeed;
					muenze.x=x_muenzen[i];
					hitMuenze(i);
				}
			}
}
function levelloader_links(){
	 if(figur.x >= 0){
				for(var i=0; i<=20; i++){
					x_huerden_unten[i]=x_huerden_unten[i];
					huerde_boden.x=x_huerden_unten[i];
					hitHuerdeBoden_links(i);
				}
				for(var i=0; i<=80; i++){
					x_huerden_oben[i]=x_huerden_oben[i];
					huerde_oben.x=x_huerden_oben[i];
					hitHuerdeOben_links(i);
				}
				for(var i=0; i<=500; i++){
					x_muenzen[i]=x_muenzen[i];
					muenze.x=x_muenzen[i];
					hitMuenze(i);
				}
			}
}
function levelloader_jump(){
	 if(figur.x >= 0){
				for(var i=0; i<=20; i++){
					x_huerden_unten[i]=x_huerden_unten[i];
					huerde_boden.x=x_huerden_unten[i];
					hitHuerdeBoden_jump(i);
				}
				for(var i=0; i<=80; i++){
					x_huerden_oben[i]=x_huerden_oben[i];
					huerde_oben.x=x_huerden_oben[i];
					hitHuerdeOben_jump(i);
				}
				for(var i=0; i<=500; i++){
					x_muenzen[i]=x_muenzen[i];
					muenze.x=x_muenzen[i];
					hitMuenze(i);
				}
			}
			
}