var richtig = false;
var richtig2 = false;
var richtig3 = false;
var richtig4 = false;
var richtig5 = false;

function tageUndJahre(){
	var d = new Date();
	var currentYear = d.getFullYear();
	
	for (var i = 1; i <= 31; i++) { //Fills the DropDownList Days with numbers from 1-31
		document.reg.Ndays.options[i-1] = new Option(i);
		document.reg.Ndays.options[i-1].className = "yearsDays";
	}
	
	for (var j = 1950; j <= currentYear; j++) { //Fills the DropDownList Years with numbers form the year 1950 till the current year
		document.reg.Nyears.options[j-1950] = new Option(j);
		document.reg.Nyears.options[j-1950].className = "yearsDays";
	}	
}

function benname(){
	if(document.reg.Uname.value.search(/\w{2,20}$/i) > -1){
		//document.getElementById("idBenname").style.backgroundColor = "#b2fbaa";
		document.getElementById("idBenname").style.borderColor = "#00ff00";
		richtig = true;
	}else{
		//document.getElementById("idBenname").style.backgroundColor = "#fe5a5a";
		document.getElementById("idBenname").style.borderColor = "#ff0000";
		richtig = false;
	}
}
function vorname(){
	if(document.reg.Vname.value.search(/\w{2,50}$/i)>-1){
		//document.getElementById("idBenname").style.backgroundColor = "#b2fbaa";
		document.getElementById("idVorname").style.borderColor = "#00ff00";
		richtig = true;
	}else{
		//document.getElementById("idBenname").style.backgroundColor = "#fe5a5a";
		document.getElementById("idVorname").style.borderColor = "#ff0000";
		richtig = false;
	}
}
function nachname(){
	if(document.reg.Nname.value.search(/\w{2,50}$/i)>-1){
		//document.getElementById("idBenname").style.backgroundColor = "#b2fbaa";
		document.getElementById("idNachname").style.borderColor = "#00ff00";
		richtig = true;
	}else{
		//document.getElementById("idBenname").style.backgroundColor = "#fe5a5a";
		document.getElementById("idNachname").style.borderColor = "#ff0000";
		richtig = false;
	}
}

function passw(){
	if(document.reg.pw.value.search(/[a-zA-Z0-9\w]{6,20}/i) > -1){
		//document.getElementById("idPw").style.backgroundColor = "#b2fbaa";
		document.getElementById("idPw").style.borderColor = "#00ff00";
		richtig2 = true;
	}else{
		//document.getElementById("idPw").style.backgroundColor = "#fe5a5a";
		document.getElementById("idPw").style.borderColor = "#ff0000";
		richtig2 = false;
	}
}

function repPassw(){
	if(document.getElementById("idRepPw").value == document.getElementById("idPw").value){richtig3 = true;}else{richtig3 = false;}
	if(richtig3){
		//document.getElementById("idRepPw").style.backgroundColor = "#b2fbaa";
		document.getElementById("idRepPw").style.borderColor = "#00ff00";
		richtig3 = true;
	}else{
		//document.getElementById("idRepPw").style.backgroundColor = "#fe5a5a";
		document.getElementById("idRepPw").style.borderColor = "#ff0000";
		richtig3 = false;
	}
}

function emailAdr(){
	if(document.reg.mailAdr.value.search(/^(\w+)(\.\w+)?(@\w+\.)(\w+\.)?(\w{2,4})$/i) > -1){
		//document.getElementById("idMail").style.backgroundColor = "#b2fbaa";
		document.getElementById("idMail").style.borderColor = "#00ff00";
		richtig4 = true;
	}else{
		//document.getElementById("idMail").style.backgroundColor = "#fe5a5a";
		document.getElementById("idMail").style.borderColor = "#ff0000";
		richtig4 = false;
	}
}

function abschicken(){
	if(document.reg.geschl[0].checked == false && document.reg.geschl[1].checked == false){
		richtig5 = false;
	}else{
		richtig5 = true;
	}
	
	fenster=window.open("about:blank", "neuesFenster", "height=500px, width=500px");
	fenster.moveBy(50, 50);
	fenster.document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
	fenster.document.writeln('<html xmlns="http://www.w3.org/1999/xhtml">');
	fenster.document.writeln('<head>');
	fenster.document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
	fenster.document.writeln('<link href="CSS/style.css" rel="stylesheet" type="text/css" />');	
	fenster.document.writeln('<title>Anmeldung</title>');		
	fenster.document.writeln('</head>');
	fenster.document.writeln('<body>');
	
	if(richtig == true && richtig2 == true && richtig3 == true && richtig4 == true && richtig5 == true){
		fenster.document.writeln('<div id="content2">');
		fenster.document.writeln('Sie wurden erfolgreich Registriert!<br /><br />');
		fenster.document.writeln('<a href=javascript:window.close()>Schlie&szlig;en</a>');
		fenster.document.writeln('</div>');
	}else{
		fenster.document.writeln('<div id="content2">');
		if(richtig == false){fenster.document.writeln('Sie m&uuml;ssen einen g&uuml;ltigen Benutzernamen eingeben!<br />');}
		if(richtig2 == false){fenster.document.writeln('Sie m&uuml;ssen ein g&uuml;ltiges Passwort eingeben!<br />');}
		if(richtig3 == false){fenster.document.writeln('Sie m&uuml;ssen das Passwort richtig wiederholen!<br />');}
		if(richtig4 == false){fenster.document.writeln('Sie m&uuml;ssen eine g&uuml;ltigen E-Mail Adresse angeben!<br />');}
		if(richtig5 == false){fenster.document.writeln('Sie m&uuml;ssen ein Geschlecht ausw&auml;hlen!<br /><br />');}
		fenster.document.writeln('<a href=javascript:window.close()>Schlie&szlig;en</a>');
		fenster.document.writeln('</div>');
	}
	fenster.document
	fenster.document.writeln('</body>');
	fenster.document.writeln('</html>');
	fenster.document.close();
}


function markAll(){
	if(document.reg.markiereAlles.checked == true){
		for(var i = 0; i < 6; i++){
			document.reg.hobby[i].checked = true;
		}
	}else{
		for(var i = 0; i < 6; i++){
			document.reg.hobby[i].checked = false;
		}
	}
	
}
	