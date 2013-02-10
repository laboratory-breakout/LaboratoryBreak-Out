var richtig1 = false;
var richtig2 = false;
var richtig3 = false;
var richtig4 = false;
var richtig5 = false;
var richtig6 = false;
var richtig7 = false;

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
		richtig1 = true;
	}else{
		//document.getElementById("idBenname").style.backgroundColor = "#fe5a5a";
		document.getElementById("idBenname").style.borderColor = "#ff0000";
		richtig1 = false;
	}
}
function vorname(){
	if(document.reg.Vname.value.search(/\w{2,50}$/i)>-1){
		//document.getElementById("idBenname").style.backgroundColor = "#b2fbaa";
		document.getElementById("idVorname").style.borderColor = "#00ff00";
		richtig2 = true;
	}else{
		//document.getElementById("idBenname").style.backgroundColor = "#fe5a5a";
		document.getElementById("idVorname").style.borderColor = "#ff0000";
		richtig2 = false;
	}
}
function nachname(){
	if(document.reg.Nname.value.search(/\w{2,50}$/i)>-1){
		//document.getElementById("idBenname").style.backgroundColor = "#b2fbaa";
		document.getElementById("idNachname").style.borderColor = "#00ff00";
		richtig3 = true;
	}else{
		//document.getElementById("idBenname").style.backgroundColor = "#fe5a5a";
		document.getElementById("idNachname").style.borderColor = "#ff0000";
		richtig3 = false;
	}
}

function passw(){
	if(document.reg.pw.value.search(/[a-zA-Z0-9\w]{6,20}/i) > -1){
		//document.getElementById("idPw").style.backgroundColor = "#b2fbaa";
		document.getElementById("idPw").style.borderColor = "#00ff00";
		richtig4 = true;
	}else{
		//document.getElementById("idPw").style.backgroundColor = "#fe5a5a";
		document.getElementById("idPw").style.borderColor = "#ff0000";
		richtig4 = false;
	}
}

function repPassw(){
	if(document.getElementById("idRepPw").value == document.getElementById("idPw").value){richtig4 = true;}else{richtig4 = false;}
	if(richtig4){
		//document.getElementById("idRepPw").style.backgroundColor = "#b2fbaa";
		document.getElementById("idRepPw").style.borderColor = "#00ff00";
		richtig5 = true;
	}else{
		//document.getElementById("idRepPw").style.backgroundColor = "#fe5a5a";
		document.getElementById("idRepPw").style.borderColor = "#ff0000";
		richtig5 = false;
	}
}

function emailAdr(){
	if(document.reg.mailAdr.value.search(/^(\w+)(\.\w+)?(@\w+\.)(\w+\.)?(\w{2,4})$/i) > -1){
		//document.getElementById("idMail").style.backgroundColor = "#b2fbaa";
		document.getElementById("idMail").style.borderColor = "#00ff00";
		richtig6 = true;
	}else{
		//document.getElementById("idMail").style.backgroundColor = "#fe5a5a";
		document.getElementById("idMail").style.borderColor = "#ff0000";
		richtig6 = false;
	}
}

function abschicken(){
	if(document.reg.geschl[0].checked == false && document.reg.geschl[1].checked == false){
		richtig7 = false;
	}else{
		richtig7 = true;
	}
	//alert(richtig1 + " " + richtig2 + " " + richtig3 + " " + richtig4 + " " + richtig5 + " " + richtig6 + " " + richtig7);
 if(richtig1 == false || richtig2 == false || richtig3 == false || richtig4 == false || richtig5 == false || richtig6 == false || richtig7 == false){
	 alert(unescape("Es ist ein Fehler aufgetreten%21 Bitte %FCberpr%FCfen sie das rot markierte Feld oder ob alle Pflichtfelder%28*%29 ausgef%FChlt wurden%21"));
}else{

	document.getElementById("senden").type="submit";
	}
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
	