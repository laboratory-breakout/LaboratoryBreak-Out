function levelloader_rechts(){
	 if(figur.x >= 0){
				for(var i=0; i<=20; i++){
					x_huerden_unten[i]=x_huerden_unten[i]-levelspeed_pos;
					huerde_boden.x=x_huerden_unten[i];
					hitHuerdeBoden_rechts(i);
				}
				for(var i=0; i<=80; i++){
					x_huerden_oben[i]=x_huerden_oben[i]-levelspeed_pos;
					huerde_oben.x=x_huerden_oben[i];
					hitHuerdeOben_rechts(i);
				}
				for(var i=0; i<=200; i++){
					x_muenzen[i]=x_muenzen[i]-levelspeed_pos;
					muenze.x=x_muenzen[i];
					muenze.y=y_muenzen[i];
					hitMuenze(i);
					EinLevelWeiter(i);
				}
			}
}
function levelloader_links(){
	 if(figur.x >= 0 && x_huerden_unten[0]<=740){
				for(var i=0; i<=20; i++){
					x_huerden_unten[i]=x_huerden_unten[i]+levelspeed_neg;
					huerde_boden.x=x_huerden_unten[i];
					hitHuerdeBoden_links(i);
				}
				for(var i=0; i<=80; i++){
					x_huerden_oben[i]=x_huerden_oben[i]+levelspeed_neg;
					huerde_oben.x=x_huerden_oben[i];
					hitHuerdeOben_links(i);
				}
				for(var i=0; i<=200; i++){
					x_muenzen[i]=x_muenzen[i]+levelspeed_neg;
					muenze.x=x_muenzen[i];
					muenze.y=y_muenzen[i];
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
				for(var i=0; i<=200; i++){
					x_muenzen[i]=x_muenzen[i];
					muenze.x=x_muenzen[i];
					muenze.y=y_muenzen[i];
					hitMuenze(i);
				}
			}
			
}