var music1 = document.getElementById('music1');
var music2 = document.getElementById('music2');
var buttons = document.getElementsByClassName('play');
for (var i = 0, x = buttons.length; i < x; i++) {
  buttons[i].addEventListener("click", function(el){
    playAudio(music2, el.target);
  });
}

function playAudio(element, button) {
	if (element.paused) {
		element.play();
    console.log(button);
    button.className = 'hide play';
    button.className = 'show play';
	} else { 
		element.pause();
    console.log(button);
    button.className = 'show play';
    button.className = 'hide play';
	}
}

