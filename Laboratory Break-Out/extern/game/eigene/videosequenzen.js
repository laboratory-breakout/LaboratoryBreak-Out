// JavaScript Document
function intro(){
	MediaElement('intro_player', {success: function(video) {
		video.play();
		video.addEventListener('ended', function() {
			document.getElementById("intro").style.display="none";
			document.getElementById("spiel").style.display="block";
			gamestart();
			}, false);
	 }});
}

function gegner_seq_1(){
	document.getElementById("spiel").style.display="none";
	document.getElementById("seq_geg_1").style.display="block";
	MediaElement('seq_geg_1_player', {success: function(video) {
		video.play();
		video.addEventListener('ended', function() {
			document.getElementById("seq_geg_1").style.display="none";
			document.getElementById("spiel").style.display="block";
			}, false);
	 }});
}