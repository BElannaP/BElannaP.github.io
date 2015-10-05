var music1 = document.getElementById('music1');
var music2 = document.getElementById('music2')
var playbutton = document.getElementById('playButton');
var pausebutton = document.getElementById('pauseButton');

playbutton.addEventListener("click", function(){
    playAudio(music1);
});
pausebutton.addEventListener("click", function(){
    playAudio(music1);
});

function playAudio(element, buttonel) {
	if (element.paused) {
		element.play();
    playbutton.className = 'hide';
    pausebutton.className = 'show';
	} else { 
		element.pause();
    playbutton.className = 'show';
    pausebutton.className = 'hide';
	}
}
