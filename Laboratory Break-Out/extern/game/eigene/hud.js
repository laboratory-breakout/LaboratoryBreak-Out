// JavaScript Document

function time(){
	t=t+10;
	var datum=new Date();
	datum.setTime(t);
	var s=datum.getSeconds();
    var m=datum.getMinutes();
	if(m<10) {
		m="0"+m;
	}
	if(s<10) {
		s="0"+s;
	}
	Zeit=m+":"+s;
}

