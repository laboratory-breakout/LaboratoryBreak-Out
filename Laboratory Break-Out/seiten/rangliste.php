<?php
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
             <li><a href="game.php">Spiel</a>
            	<ul>
               	<li  class="current"><a href="rangliste.php">Rangliste</a></li>
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
        <h2> Rangliste</h2>
        <table class="table_text">
        	<tr style="font-size:17px; background-color:#105c27; text-align:center;">
                <td width="70px" height="20px">Rang</td>
                <td width="250px" height="20px">User</td>
                <td width="150px" height="20px">Punkte</td>
            </tr>
<?php
 $daten = $DB -> GetAll('select username, punkte from user order by punkte DESC');
 for($count=0; $count<10; $count++){
	 $Rang=$count+1;
 	echo "<tr style='text-align:center;'><td>".$Rang."</td><td>".$daten[$count]['username']."</td><td>".$daten[$count]['punkte']."</td></tr>";
 }
?>
		</table>
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
