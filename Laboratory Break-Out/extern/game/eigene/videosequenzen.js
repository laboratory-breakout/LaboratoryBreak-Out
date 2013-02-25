// JavaScript Document
function intro(){
	MediaElement('intro_player', {success: function(video) {
		video.play();
		document.getElementById('skip_button')['onclick'] = function() {
			video.pause();
			document.getElementById("intro").style.display="none";
			document.getElementById("spiel").style.display="block";
			startLevelEins();
		}
		video.addEventListener('ended', function() {
			document.getElementById("intro").style.display="none";
			document.getElementById("spiel").style.display="block";
			startLevelEins();
			}, false);
	 }});
}

function SeqEndeLevelEins(){
	document.getElementById("spiel").style.display="none";
	document.getElementById("toLevel_2").style.display="block";
	MediaElement('seq_toLevel_2', {success: function(video) {
		video.play();
		video.addEventListener('ended', function() {
			document.getElementById("toLevel_2").style.display="none";
			document.getElementById("spiel").style.display="block";
			startLevelZwei();
			}, false);
	 }});
}
function SeqEndeLevelZwei(){
	document.getElementById("spiel").style.display="none";
	document.getElementById("toLevel_3").style.display="block";
	MediaElement('seq_toLevel_3', {success: function(video) {
		video.play();
		video.addEventListener('ended', function() {
			document.getElementById("toLevel_3").style.display="none";
			document.getElementById("spiel").style.display="block";
			startLevelZwei();
			}, false);
	 }});
}