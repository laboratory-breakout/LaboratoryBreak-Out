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
<link rel="shortcut icon" href="../images/favicon.ico" />
<script type="text/javascript" src="../extern/script.js"></script>


<title>Laboratory Break-Out</title>
</head>

<body onload="tageUndJahre()" font-color="#000">
<?php
    $usr=$_POST['Uname'];
	$pwd=$_POST['pw'];
	$pwd2=$_POST['repPw'];
	$vorname=$_POST['Vname'];
	$nachname=$_POST['Nname'];
	$email=$_POST['mailAdr'];
	$geburtsdatum=$_POST['Nyears']."-".$_POST['Nmonths']."-".$_POST['Ndays'];
    $geschlecht=$_POST['geschl'];
	
	$id= $DB -> GetRow ('select user_id from user ORDER BY user_id DESC limit 1');
	if(isset($id)){
		$userId=(int)implode(",", $id) + 1;

		if(isset($usr)&&isset($pwd)&&isset($pwd2)&&isset($email)&&isset($geburtsdatum)&&isset($geschlecht)){
			if($pwd==$pwd2){
			
				$pwd = md5($pwd);	
							
				$query = "INSERT INTO `user` (`user_id` ,`username` ,`nachname` ,`vorname` ,`passwort` ,`geburtsdatum` ,`email` ,`geschlecht`, `muenzen`, `punkte`, `multiplikator`)
	VALUES ('$userId' , '$usr','$nachname', '$vorname', '$pwd','$geburtsdatum', '$email', '$geschlecht', 0, 0, 1);";
				mysql_query ($query)
				or die (mysql_error());	
					
				$query = "INSERT INTO `hat` (`fk_store_id`, `fk_user_id`, `anzahl`) VALUES (1, $userId, 1);";
				mysql_query ($query)
				or die (mysql_error());								
			}else{
				$warnung = "PASSWORDS ARE NOT EQUAL";
			}
		}
	}
	?>
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
             <li><a href="game.html">Spiel</a>
             <!-- <ul>
               <li><a href="rangliste.html">Rangliste</a></li>
              </ul>-->
             </li>
             <li><a href="sponsoren.html">Sponsoren</a></li>
             <li  class="current"><a href="registrieren.html">Registrieren</a></li>
        </ul>
    </div>
  <div id="content">
  	<div id="contentOben"></div>
    <div id="contentMitte">
    	<div id="context">
        <h2> Registrieren</h2>
   <br />

              <form method="POST" action="registrieren.php" name="reg" enctype="multipart/form-data">
            	<table>
                    <tr>
            			<td>
                        <FONT COLOR="white">*Username:
                        </td>
                        <td>
                        <input type="text" name="Uname" size="20" maxlength="20" class="tfs" onchange="benname()" id="idBenname" />
                        </td>
                        <td>
                        	<span class="hinweis"><FONT COLOR="white">(2-20 Zeichen, keine Sonderzeichen oder Leerstellen)</span>
                        </td>
                   </tr>
                   <tr>
            			<td>
                        <FONT COLOR="white">*Vorname:
                        </td>
                        <td>
                        <input type="text" name="Vname" size="20" maxlength="50" class="tfs" onchange="vorname()" id="idVorname" />
                        </td>
                        <td>
                        	<span class="hinweis"><FONT COLOR="white">(max. 50 Zeichen)</span>
                        </td>
                   </tr>
                   <tr>
            			<td>
                        <FONT COLOR="white">*Nachname:
                        </td>
                        <td>
                        <input type="text" name="Nname" size="20" maxlength="50" class="tfs" onchange="nachname()" id="idNachname" />
                        </td>
                        <td>
                        	<span class="hinweis"><FONT COLOR="white">(max. 50 Zeichen)</span>
                        </td>
                   </tr>
                   <tr>
                        <td>
                        <FONT COLOR="white">*Passwort:
                        </td>
                        <td>
                        <input type="password" name="pw" size="20" maxlength="20" class="tfs" onchange="passw()" id="idPw" />
                        </td>
                        <td>
                        	<span class="hinweis"><FONT COLOR="white">(6-20 Zeichen, keine Leerstellen)</span>
                        </td>
                   </tr>
                   <tr>
                        <td id="pwWdh">
                        <FONT COLOR="white">*Passwort wiederholen:
                        </td>
                        <td>
                        <input type="password" name="repPw" size="20" maxlength="20" class="tfs" onchange="repPassw()" id="idRepPw" />
                        </td>
                	</tr>
                    <tr>
                    	<td>
                        	<FONT COLOR="white">*E-Mail-Adresse:
                        </td>
                        <td>
                        <input type="text" name="mailAdr" size="20" maxlength="40" class="tfs" onchange="emailAdr()" id="idMail" />
                        </td>
                        <td>
                        	<span class="hinweis"><FONT COLOR="white">(g&uuml;ltige E-Mail Adresse, max. 40 Zeichen)</span>
                        </td>
                    </tr>
                    <tr>
                    	<td>
                        	<FONT COLOR="white">*Geschlecht:
                        </td>
                    	<td>
                        	<input type="radio" name="geschl" value="w" /><span class="hinweis"><FONT COLOR="white">Weiblich</span>   <input type="radio" name="geschl" value="m" /><span class="hinweis"><FONT COLOR="white">M&auml;nnlich</span>
                        </td>
                        <td>
                        	
                        </td>
                    </tr>
                    <tr>
                    	<td>
                        	<FONT COLOR="white">Geburtsdatum:
                        </td>
                        <td id="gebDate">
                        	<select name="Ndays" size="1" class="yearsDays">
								<option class="yearsDays"></option>
							</select>
							<select name="Nmonths" size="1" class="yearsDays">
								<option class="yearsDays" value="01">Jänner</option>
								<option class="yearsDays" value="02">Februar</option>
								<option class="yearsDays" value="03">März</option>
								<option class="yearsDays" value="04">April</option>
								<option class="yearsDays" value="05">Mai</option>
								<option class="yearsDays" value="06">Juni</option>
								<option class="yearsDays" value="07">Juli</option>
								<option class="yearsDays" value="08">August</option>
								<option class="yearsDays" value="09">September</option>
								<option class="yearsDays" value="10">Oktober</option>
								<option class="yearsDays" value="11">November</option>
								<option class="yearsDays" value="12">Dezember</option>
							</select>
							<select name="Nyears" size="1" class="yearsDays">
							<option class="yearsDays"></option>
							</select>
                        </td>
                    </tr>
                    <tr>
                    	<td>
                        	<br />
                        </td>
                    </tr>

                    <tr>
                        <td class="cbs">
                           
                    	</td>
                    </tr>
                </table>

                <input type="button" name="Nsubmit" id="senden" value="Registrieren"  id="absenden" onclick="abschicken();" class="buttons" />
                <input type="reset" name="Nreset" value="Zur&uuml;cksetzen" class="buttons" />
                <div id="info">Felder mit * m&uuml;ssen ausgef&uuml;llt werden!</div>
            </form>
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
