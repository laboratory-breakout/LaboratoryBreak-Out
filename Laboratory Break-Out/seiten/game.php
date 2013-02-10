<?php
error_reporting(0);
include("../inc/dd.php");
include("../inc/startup.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<meta name="Laboratory Break-Out" content="Diplomarbeit" />
<meta name="keywords" content="Laboratory, Break-Out, Laboratory Break-Out, Browsergame, Labor, lab, breakout, Diplomarbeit, HTL, Rennweg">
<link rel="stylesheet" type="text/css" href="../extern/style.css" />
<link rel="stylesheet" type="text/css" href="../extern/menue.css" />
<link rel="stylesheet" type="text/css" href="../extern/game_menue.css" />
<script language="javascript" type="text/javascript" src="../extern/game_menue.js"></script>

<link href="../extern/custom-theme/jquery-ui-1.9.2.custom.css" rel="stylesheet">
<script language="javascript" src="../extern/jquery-new.js" type="text/javascript"></script>
<script language="javascript" src="../extern/jquery-ui.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/bibliotheken/jquery.hotkeys.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/bibliotheken/key_status.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/bibliotheken/sprite_animation.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/bibliotheken/util.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/bibliotheken/sprite.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/levelloader.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/ki.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/objects.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/positions.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/gamestart.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/physics.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/hittest.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/hud.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/ende.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/level.js" type="text/javascript"></script>
<script language="javascript" src="../extern/video/mediaelement-and-player.min.js" type="text/javascript"></script>
<script language="javascript" src="../extern/game/eigene/videosequenzen.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="../extern/game_style.css" />

<link rel="shortcut icon" href="../images/favicon.ico" />
<title>Laboratory Break-Out</title>
</head>

<body>
<div id="site">
  <div id="logo">
    <a href="../index.html"><img src="../images/logo.png" width="190px" height="190px" border="no" /></a>
  </div>
	<div id="header">
    </div>
    <div id="menue">
         <ul id="menu-bar">
             <li><a href="../index.html">Homepage</a></li>
             <li><a href="team.html">Das Team</a></li>
             <li><a href="status.html">Projektstatus</a></li>
             <li  class="current"><a href="game.php">Spiel</a>
              <ul>
               <li><a href="rangliste.php">Rangliste</a></li>
              </ul>
             </li>
             <li><a href="sponsoren.html">Sponsoren</a></li>
             <li><a href="registrieren.html">Registrieren</a></li>
        </ul>
    </div>
  <div id="content">
  	<div id="contentOben"></div>
    <div id="contentMitte">
    	<div id="context">
        <div id="main">
        	<div id="menue_bg">
            	<div id="lbo_schrift"></div>
                <div id="gameMenue">
                    <div id="button_gamestart" onmouseover="game_start_hover(this);" onmouseout="game_start_out(this);" onclick="game_starten();"></div>
                    <div id="button_store" onmouseover="store_hover(this);" onmouseout="store_out(this);" onclick="store_oeffnen();"></div>
                    <div id="button_missionen" onmouseover="missionen_hover(this);" onmouseout="missionen_out(this);"  onclick="missionen_oeffnen();"></div>
                    <div id="button_anleitung" onmouseover="anleitung_hover(this);" onmouseout="anleitung_out(this);"  onclick="anleitung_oeffnen();"></div>
                </div>

                <div id="login">
                    	<h2>Login</h2>
                        <form method="POST" action="game.php" name="login">
                        <table>
                           	<tr>
                            	<td>
                                	Benutzername:
                                </td>
                                <td>
                                	<input type="text" name="username" class="feld"/>
                                </td>
                            </tr>
                            <tr>
                            	<td>
                                	Passwort:
                                </td>
                                <td>
                                	<input type="password" name="passwort" class="feld"/>
                                </td>
                            </tr>  
                            <tr>
                            	<td colspan="2" style="text-align:center">
                                	<input type="submit" name="login" value="Login" />
                                    <input type="reset" name="reset" value="Reset" />

                                </td>                            
                            </tr>  
                            <tr>
                            	<td colspan="2" style="text-align:center">
                                	oder
                                </td>
                   
                            </tr>
                            <tr>
                            	<td colspan="2" style="text-align:center">
                        </form>
                        <form method="POST" action="registrieren.php">
                                	<input type="submit" name="registrieren" value="Registrieren" />
                                </td>
                            </tr>
                        </table>
                        </form>


 <?php
		$usr = $_POST['username'];
		$pwd = $_POST['passwort'];
		//$pwd = md5($pwd);
	    if(isset($usr) && isset($pwd)){
		$user = $DB -> GetAll ('select user_id, username, passwort from user where username = ?', array($usr));
       if($user[0]["username"]==$usr && $user[0]["passwort"]==$pwd){
		   $user_id=$user[0]["user_id"];
		   echo "<script>document.getElementById('login').style.display = 'none';
				document.getElementById('gameMenue').style.display ='block';</script>";
	   }else{
 		   echo "<center id='loginfehlgeschlagen'>Login fehlgeschlagen!</center>";
	   }   	
	   }
?>
    </div>
            </div>
            
<?php
$store = $DB -> GetAll ('select * from store');
$multi = $DB -> GetRow('select multiplikator from user where user_id=?', array($user_id));
$multiplikator=implode(",", $multi);
$muenzen_anz = $DB -> GetRow ('select muenzen from user where user_id=?', array($user_id));
$vorhandene_muenzen=$muenzen_anz['muenzen'];
$punkte_anz = $DB -> GetRow ('select punkte from user where user_id=?', array($user_id));
$vorhandene_punkte=$punkte_anz['punkte'];

?>

            <div id="game">
<?php
		$storeJS = array();
		for($count=1; $count<=sizeof($store); $count++){
		$hatTabelle = $DB -> GetRow ('select fk_store_id from hat where fk_store_id='.$count.' AND fk_user_id=?', array($user_id));
		$storeTabelle = $DB -> GetRow ('select store_id, ausruestung from store where store_id='.$count.'');
		$anzahlWert = $DB ->GetRow('select anzahl from hat where fk_store_id='.$count.'');
		if(isset($hatTabelle['fk_store_id'])){
			if(isset($anzahlWert['anzahl'])){
				}else{ 		
				$anzahlWert['anzahl']=0;
			}
			if($hatTabelle['fk_store_id']==$storeTabelle['store_id']){
				$storeJS[$count-1]['id']=$storeTabelle['store_id'];
				$storeJS[$count-1]['ausruestung']=$storeTabelle['ausruestung'];
				$storeJS[$count-1]['anzahl']=$anzahlWert['anzahl'];
			}
		}
		}
?>
		<div id="spiel">
        </div>
 		<div id="intro">
    		<video src="../video/Intro/intro.mp4" width="800" height="600" id="intro_player">
				<source src="../video/Intro/intro.mp4" id="mp4" type="video/mp4" title="mp4">
				<source src="../video/Intro/intro.webm" id="webm" type="video/webm" title="webm">
				<source src="../video/Intro/intro.ogv" id="ogg" type="video/ogg" title="ogg">
			</video>
 	   </div>
       <div id="toLevel_2">
    		<video src="../video/ToLevel2/toLevel2.mp4" width="800" height="600" id="seq_toLevel_2">
				<source src="../video/ToLevel2/toLevel2.mp4" id="mp4" type="video/mp4" title="mp4">
				<source src="../video/ToLevel2/toLevel2.webm" id="webm" type="video/webm" title="webm">
				<source src="../video/ToLevel2/toLevel2.ogv" id="ogg" type="video/ogg" title="ogg">
			</video>
  	   </div>
       <div id="toLevel_3">
    		<video src="../video/ToLevel3/toLevel3.mp4" width="800" height="600" id="seq_toLevel_3">
				<source src="../video/ToLevel3/toLevel3.mp4" id="mp4" type="video/mp4" title="mp4">
				<source src="../video/ToLevel3/toLevel3.webm" id="webm" type="video/webm" title="webm">
				<source src="../video/ToLevel3/toLevel3.ogv" id="ogg" type="video/ogg" title="ogg">
			</video>
  	   </div>
   	   <div id="seq_geg_1">
    		<video src="../video/seq2.mp4" width="800" height="600" id="seq_geg_1_player">
				<source src="../video/seq2.mp4" id="mp4" type="video/mp4" title="mp4">
				<source src="../video/seq2.webm" id="webm" type="video/webm" title="webm">
				<source src="../video/seq2.ogv" id="ogg" type="video/ogg" title="ogg">
			</video>
  	  </div>
    
  	  <div id="gameEnde">
    		<div id="endeText"></div>
        <form action="game.php" method="post" name="gameEndeForm">
        	<input type="hidden" name="hundertMuenzen" id="hundertMuenzen"/>
            <input type="hidden" name="zwanzigGegner" id="zwanzigGegner"/>
            <input type="hidden" name="level2" id="level2"/>
            <input type="hidden" name="zweihundertMuenzen" id="zweihundertMuenzen"/>
            <input type="hidden" name="fuenfzigGegner" id="fuenfzigGegner"/>
            <input type="hidden" name="fuenfhundertMuenzen" id="fuenfhundertMuenzen"/>
            <input type="hidden" name="level3" id="level3"/>
            <input type="hidden" name="einhundertGegner" id="einhundertGegner"/>
            <input type="hidden" name="endgegner_zerstoeren" id="endgegner_zerstoeren"/>
            <input type="hidden" name="erreichteMuenzen" id="erreichteMuenzen"/>
            <input type="hidden" name="erreichtePunkte" id="erreichtePunkte"/>
            <input type="submit" id="endeButton" value="" />
        </form>
    </div>
  </div>
<script>
var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var FPS = 30;
var jumpPressed = false;
var jumping = true;
var jumpCounter = 0;
var jumpDone = false;
var fallen_bool = false;
var _mouseX, _mouseY;
var rateOfFire = 1; //Muss noch realisert werden --> Zeit die zwischen den Schuessen vergehen muss --> von Waffe abhaengig
var weaponAngle;
var shootingDelay = rateOfFire;
var shot = true;
var kugelnX = new Array();
var kugelnY = new Array();
var gegnerX = new Array();
var gegnerY = new Array();
var gegnerRichtung = new Array();
var gegnerSpeed = 5;
var x_muenzen = new Array();
var y_muenzen = new Array();
var x_huerden_unten = new Array();
var x_huerden_oben = new Array();
var figur, boden, huerde_oben, huerde_boden, muenze, gegner, waffe, kugel; 
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + "' height='" + CANVAS_HEIGHT + "'></canvas");
var canvas = canvasElement.get(0).getContext("2d");
var levelspeed_pos=7;
var levelspeed_neg=7;
var boden_pixel=515;
var MuenzenAnzahl = 0;
var PunkteAnzahl = 0;
var Zeit = 0;
var intervalZeit;
var intervalSpiel;
var interval2;
var t=10;
var t2=10;
var t3=10;
var t4=10;
var anzGegner = 0;
var addGegner = false;
var gegnerAnzLvl = 40; //lvl 1 = 40 | lvl 2 = 60 | lvl 3 = 70
var gegnerGesamtAnz = 0;
var activeEnemys = 0;
var extraWert = 0;
var tester = 10;
var waffenIndex = 0;
		
var gegnerSpringt = new Array();
var gegnerJumpCounter = 0;
var gegnerFaellt = false;
		
var toteFeinde=0;

var hundertMuenzen=true;
var zwanzigGegner=false;
var level2=false;
var zweihundertMuenzen=false;
var fuenfzigGegner=false;
var fuenfhundertMuenzen=false;
var level3=false;
var einhundertGegner=false;
var endgegner_zerstoeren=false;

var vorhandeneWaffen = new Array();
var Multiplikator;
	    <?php
			$index=0;
		for($i=0; $i<12 ;$i++){
			if(isset($storeJS[$i])){
		?>
		   vorhandeneWaffen["<?php echo $index; ?>"]=new Object();
		   vorhandeneWaffen["<?php echo $index; ?>"]["id"]="<?php echo $storeJS[$i]['id'];?>";
		   vorhandeneWaffen["<?php echo $index; ?>"]["ausruestung"]="<?php echo $storeJS[$i]['ausruestung'];?>";
		   vorhandeneWaffen["<?php echo $index; ?>"]["anzahl"]="<?php echo $storeJS[$i]['anzahl'];?>";			   
		<?php
				$index+=1;
			}
		}
		?>
		Multiplikator="<?php echo $multiplikator; ?>";
		var muenzen="<?php echo $vorhandene_muenzen;?>";
		var punkte="<?php echo $vorhandene_punkte;?>";
 		
var LevelEinsAbsolviert = false;	
var LevelZweiAbsolviert = false;	
var LevelDreiAbsolviert = false;	
var LevelText ="";
	
		createObjects();
    	createPositions();
		
		canvasElement.appendTo('#spiel');
		canvasElement.mousemove(function(e) {
            _mouseX = e.pageX;
			_mouseY = e.pageY;
        });
		$("canvas").click(function(ev) {
			createNewBullet();
			shot = false;
		});
		
				
		function createNewBullet(){
			kugelnX.push(figur.x+70);
			kugelnY.push(figur.y+7);
		   
		}
		
		$('canvas').keyup(function(event){
		if(event.keyCode == 81){
				//naechste waffe
				if(waffenIndex == (waffenArray.length-1)){
					waffenIndex = 0;
				}
				else{
					waffenIndex += 1;
				}
				var tmp = "player"+waffenIndex;
				figur.sprite = Sprite(tmp);
			}
		});
			
        function update() {

          if(keydown.left || keydown.a) {
			  runLeft();
          }
          if(keydown.right || keydown.d) {
			  runRight();
          }
		  if(keydown.up || keydown.w) {
			  if(jumpPressed == false){
				  jumpPressed = true;
				  fallen_bool = false;
			  }
		  }
		  
		  updateBullets();
		  updateGegner();
		 	
		  figur.x = figur.x.clamp(0, CANVAS_WIDTH - figur.width);
        }
		
        function draw() {
          canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		  canvas.fillStyle = "#FFF";
		  canvas.font = '20pt Arial';
		  canvas.strokeStyle = 'lightgreen';
 		  canvas.lineWidth = 1.5;
		  
  		  canvas.strokeText("x "+MuenzenAnzahl, 567, 45);
		  canvas.strokeText("Punkte: "+PunkteAnzahl, 330, 45);
		  canvas.strokeText(Zeit, 730, 45);
		  		
				
		  boden.draw();
		  canvas.strokeText("LEVEL "+LevelText, 660, 590);
          
		  figur.draw();
		  huerde_boden.draw();
		  huerde_oben.draw();
		  muenze.draw();
		  waffe.draw();
		  kugel.draw();
		  gegner.draw();
		  muenzeIcon.draw();
        }
		
        
		
        figur.draw = function() {
        	this.sprite.draw(canvas, this.x, this.y);
        };
		
		boden.draw = function () {
			this.sprite.draw(canvas, this.x, this.y);
		};
		
		muenzeIcon.draw = function () {
			this.sprite.draw(canvas, this.x, this.y);
		};
		
		huerde_boden.draw = function() {
        	for ( var i=0; i<=20; i++){
			this.sprite.draw(canvas, x_huerden_unten[i], this.y);
			}
        };
		
		huerde_oben.draw = function() {
        	for( var i=0; i<=80; i++){
			this.sprite.draw(canvas, x_huerden_oben[i], this.y);
			}
		};
		muenze.draw = function () {
			for ( var i=0; i<=200; i++){
			this.sprite.draw(canvas, x_muenzen[i], y_muenzen[i]);
			}
		};
		
		waffe.draw = function () {
			this.sprite.draw(canvas, this.x, this.y);
		};
		
		kugel.draw = function () {
			for(var i = 0; i < kugelnX.length; i++){
				this.sprite.draw(canvas, kugelnX[i], kugelnY[i]);
			}
			
		};
		
		gegner.draw = function () {
			if(/*activeEnemys > 0 && */isNaN(gegnerX[0]) == false){
				for(var l = 0; l <= gegnerX.length; l++){
					this.sprite.draw(canvas, gegnerX[l], gegnerY[l]);
				}
			}
		 };
		
</script>
     
<?php
if(isset($_POST['erreichteMuenzen'])){
		$muenzen_neu2 = $_POST['erreichteMuenzen'];
		$query = "UPDATE user SET muenzen='$muenzen_neu2' WHERE user_id='$user_id'";
		$ret = mysql_query ($query) or die (mysql_error());
}
if(isset($_POST['erreichtePunkte'])){
		$punkte_neu2 = $_POST['erreichtePunkte'];
		$query = "UPDATE user SET punkte='$punkte_neu2' WHERE user_id='$user_id'";
		$ret = mysql_query ($query) or die (mysql_error());
}
?>
            <div id="store">
            	<div class="back" onclick="zurueck();"></div>
<?php			
			$hackal="../images/hackal.png";
			$kreuz="../images/kreuz.png";
			$muenze="../images/muenze_klein.png";
?>
            	<div class="text">
                	<h2>Store</h2>
<?php
	$hat_zwischen = $DB -> GetAll('select * from hat');
?>
                   
<script>
		var store = new Array();
	function kaufen_bestaetigen(id){
		<?php
		for($i=0; $i<12 ;$i++){
		?>
		   store["<?php echo $i; ?>"]=new Object();
		   store["<?php echo $i; ?>"]["id"]="<?php echo $store[$i]['store_id'];?>";
		   store["<?php echo $i; ?>"]["ausruestung"]="<?php echo $store[$i]['ausruestung'];?>";
		   store["<?php echo $i; ?>"]["preis"]="<?php echo $store[$i]['preis'];?>";	
		   store["<?php echo $i; ?>"]["anzahl"]="<?php echo $store[$i]['anzahl'];?>";			   
		<?php
		}
		?>
		//alert(store[id]["ausruestung"]);
		var muenzen="<?php echo $vorhandene_muenzen;?>";
	    var waffe_muenzen = store[id]["preis"];
		var equip_muenz = parseInt(waffe_muenzen);
		document.getElementById('p_tag').innerHTML = 'Wollen Sie wirklich '+store[id]["ausruestung"]+' f&uuml;r '+store[id]["preis"]+' M&uuml;nzen kaufen?';
		document.getElementById('id').value=store[id]["id"];
		document.getElementById('anzahl').value=store[id]["anzahl"];
			if(muenzen >= equip_muenz){
				var erg=muenzen-equip_muenz;
				document.getElementById('muenzen_hidden').value=erg;
				$("#kaufen").dialog({height: 180, width:400, modal: true});
			}else{
				alert(unescape("Sie haben zu wenig M%FCnzen!"));
			}
	}
	function kaufen(){
		$("#kaufen").dialog("close");
		//alert(global_id);*/
	}
	function schliessen(){
		$("#kaufen").dialog("close");
	}
</script>
<div id="kaufen" title="Kaufen best&auml;tigen">
<p id="p_tag"></p>
<form name="popup_form" id="id_uebergabe" action="game.php" method="post">
	<input type="hidden" name="id" id="id" />
    <input type="hidden" name="anzahl" id="anzahl" />
    <input type="hidden" name="muenzen" id="muenzen_hidden" />
	<input type="submit" value="JA" name="ja" onclick="kaufen()" />
    <input type="button" value="NEIN" name="nein" onclick="schliessen()" />
</form>
</div>
<?php 
 	$set = false;
	if(isset($_POST['id'])){
		$id_return = $_POST['id'];
	}
	if(isset($_POST['anzahl'])){
		$anz = $_POST['anzahl'];
	}
	if(isset($_POST['muenzen'])){
		$muenzen_neu = $_POST['muenzen'];
		$query = "UPDATE user SET muenzen='$muenzen_neu' WHERE user_id='$user_id'";
		$ret = mysql_query ($query) or die (mysql_error());
	}
	if(isset($anz) && isset($id_return)){
		for($j=0; $j<=sizeof($hat_zwischen); $j++){
			if(isset($hat_zwischen[$j]['fk_store_id'])){
					if($hat_zwischen[$j]['fk_store_id']==$id_return){
						$set=true;
						break;
			        }else{
						$set=false;
					}
			}
		}
		if($id_return==1 || $id_return==2 || $id_return==3 || $id_return==4 || $id_return==5){
			if($set==false){
				$query = "INSERT INTO `hat` (`fk_store_id` ,`fk_user_id` ,`anzahl`) VALUES ('$id_return' , '$user_id','$anz');";
				$ret = mysql_query ($query)	or die (mysql_error());	
			}else{
			}
		}else{
			if($set==false){
				$query = "INSERT INTO `hat` (`fk_store_id` ,`fk_user_id` ,`anzahl`) VALUES ('$id_return' , '$user_id','$anz');";
				$ret = mysql_query ($query)	or die (mysql_error());	
			}else{
				$anzahl_neu=$hat_zwischen[$j]['anzahl']+$anz;
				$query = "UPDATE hat SET anzahl='$anzahl_neu' WHERE fk_store_id='$id_return' and fk_user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
	}
?>

                    <table class="table_text">
                    	<tr style="font-size:17px; background-color:#105c27; text-align:center;">
                        	<td colspan="2">Waffe, Munition oder Feature</td>
                            <td>Anzahl</td>
                            <td colspan="2">Preis</td>
                            <td>Kaufen</td>
                            <td>Gekauft</td>
                        </tr>
<?php
	$kaufen_button="../images/kaufen.png";
	$gekauft;
	$gekauft_bild;	
	
	for($count=1; $count<=sizeof($store); $count++){
		$hat = $DB -> GetRow ('select fk_store_id from hat where fk_store_id='.$count.' AND fk_user_id=?', array($user_id));
		$store_id = $DB -> GetRow ('select store_id from store where store_id='.$count.'');
		$anzahl = $DB ->GetRow('select anzahl from hat where fk_store_id='.$count.'AND fk_user_id=?', array($user_id));
		if(isset($hat['fk_store_id'])){
			if($hat['fk_store_id']==$store_id['store_id']){
				$gekauft=true;
				$gekauft_bild=$hackal;
			}else{
				$gekauft=false;
				$gekauft_bild=$kreuz;	
			}
		}else{
			$gekauft=false;
			$gekauft_bild=$kreuz;	
		}
		if(isset($anzahl['anzahl'])){
		}else{ 		
			$anzahl['anzahl']=0;
		}
		$ue=$count-1;
		echo "<tr><td>".$store[$count-1]['ausruestung']."</td><td style='text-align:center;'><img src='".$store[$count-1]['bild']."'/></td><td style='text-align:center;'>".$store[$count-1]['anzahl']."</td><td style='text-align:center;'>".$store[$count-1]['preis']."</td><td><img src='".$muenze."'/></td><td style='text-align:center;'><img src='".$kaufen_button."' onclick='kaufen_bestaetigen(".$ue.");'/></td><td style='text-align:center;'><img src='".$gekauft_bild."'/>".' '.$anzahl['anzahl'].' St&uuml;ck'."</td></tr>";
		}
?>

                    </table>
                </div>
            </div>
<?php
//Missionen überprüfen und INSERT:
$checkErledigt=0;
$schonInDB;
$hatBereitsErledigt = $DB -> GetAll ('select fk_missionen_id from hat_erledigt where fk_user_id=?', array($user_id));
	if(isset($id_return)){
		if($id_return==2){
			$checkErledigt=5;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==6){
			$checkErledigt=3;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==10){
			$checkErledigt=6;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==7){
			$checkErledigt=8;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==3){
			$checkErledigt=9;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==11){
			$checkErledigt=10;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==8){
			$checkErledigt=14;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==4){
			$checkErledigt=4;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==12){
			$checkErledigt=18;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==9){
			$checkErledigt=19;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
		if($id_return==5){
			$checkErledigt=20;
			for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
		}
	}	

if(isset($_POST['hundertMuenzen'])|| isset($_POST['zwanzigGegner'])|| isset($_POST['level2']) || isset($_POST['zweihundertMuenzen'])|| isset($_POST['fuenfzigGegner'])|| isset($_POST['fuenfhundertMuenzen'])|| isset($_POST['level3']) || isset($_POST['einhundertGegner'])|| isset($_POST['endgegner_zerstoeren'])){
	
	if($_POST['hundertMuenzen'] == true){
		$checkErledigt=1;
		for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
			if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
			}	
		}
		if($schonInDB == false){
			$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   			$ret = mysql_query ($query)	or die (mysql_error());	
			
			$multiplikator = $multiplikator + 0.05;
			$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
			$ret = mysql_query ($query) or die (mysql_error());
		}
	}
	
	if($_POST['zwanzigGegner'] == true){
	   $checkErledigt=2;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
	if($_POST['level2'] == true){
	   $checkErledigt=4;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
	if($_POST['zweihundertMuenzen'] == true){
	   $checkErledigt=7;
	}
	if($_POST['fuenfzigGegner'] == true){
	   $checkErledigt=11;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
	if($_POST['fuenfhundertMuenzen'] == true){
	   $checkErledigt=12;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
	if($_POST['level3'] == true){
	   $checkErledigt=13;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
	if($_POST['einhundertGegner'] == true){
	   $checkErledigt=15;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
	if($_POST['endgegner_zerstoeren'] == true){
	   $checkErledigt=17;
	   for($j=0; $j<=sizeof($hatBereitsErledigt); $j++){
				if(isset($hatBereitsErledigt[$j]['fk_missionen_id'])){
					if($hatBereitsErledigt[$j]['fk_missionen_id']==$checkErledigt){
						$schonInDB=true;
						break;
			        }else{
						$schonInDB=false;
					}
				}	
			}
			if($schonInDB == false){
				$query = "INSERT INTO `hat_erledigt` (`fk_user_id` ,`fk_missionen_id`) VALUES ('$user_id' , '$checkErledigt');";
   				$ret = mysql_query ($query)	or die (mysql_error());	
			
				$multiplikator = $multiplikator + 0.05;
				$query = "UPDATE user SET multiplikator='$multiplikator' WHERE user_id='$user_id'";
				$ret = mysql_query ($query) or die (mysql_error());
			}
	}
}

?>
            <div id="missionen">
            	<div class="back" onclick="zurueck();"></div>
            	<div class="text">
                	<h2>Missionen</h2>
             		<table class="table_text">
                    	<tr style="font-size:17px; background-color:#105c27; text-align:center;">
                        	<td>Missionen</td>
                            <td>Multiplikator</td>
                            <td>Erledigt</td>
                        </tr>
<?php
			$status;
			$status_bild;		
			for($count = 1; $count <= 20; $count++)
			{
				$result = $DB -> GetRow('select missionen_name from missionen where missionen_id='.$count.'');
				$hat_erledigt = $DB -> GetRow('select fk_missionen_id from hat_erledigt where fk_missionen_id='.$count.' AND fk_user_id=?', array($user_id));
				$missionen_id = $DB -> GetRow('select missionen_id from missionen where missionen_id='.$count.'');
				
				if(isset($hat_erledigt['fk_missionen_id'])){
					if($hat_erledigt['fk_missionen_id'] == $missionen_id['missionen_id']){
						$status=true;
						$status_bild=$hackal;
					}else{
						$status=false;
						$status_bild=$kreuz;
					}
				}else{
					$status=false;
					$status_bild=$kreuz;
				}
				
				echo "<tr ><td width='400' height='25'>".implode("','",$result)."</td><td style='text-align:center;' height='25'> + 0,25</td><td style='text-align:center;' height='25'><img src='".$status_bild."'/></td></tr>";
				
			}			
?>						
						<tr>
                        	<td style="text-align:right; font-weight:bold;">Ihr Multiplikator:</td>
<?php 
							echo " <td style='font-weight:bold; text-align:center;'>".$multiplikator."</td>";
?>
                        </tr>
                    </table>
				</div>
            </div>
            <div id="anleitung">
            	<div class="back" onclick="zurueck();"></div>
                <div class="text">
                	<h2>Spiel Anleitung</h2>
                    <img src="../images/Anleitung.png" />
                    <img src="../images/mouse-icon.gif" style="position:relative; top:0px; left:-615px;"/>
                </div>
             </div>
        </div>
        </div>
    </div>
    <div id="contentUnten"></div>
  </div>

<div id="fb">
      		<iframe src="http://www.facebook.com/plugins/like.php?href=https://www.facebook.com/LaboratoryBreakOut&layout=standard&show_faces=false&width=400&action=like&colorscheme=dark&height=35" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:400px; height:35px;" allowTransparency="true"></iframe>
        </div>
    <div id="footer">
    <a class="footer_text" href="kontakt.html">Kontakt</a> | 
    <a class="footer_text" href="impressum.html">Impressum</a>
    </div>
</div>
</body>
</html>