document.addEventListener('DOMContentLoaded',function() {
	function playSound(keyCode) {
		const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${keyCode}"]`);
		if(!audio)
			return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add('playing');
	}

	function removeTransitionClass(e) {
		if(e.propertyName != 'transform')
			return;
		this.classList.remove('playing');
	}

	const keys = document.querySelectorAll(`.key`);

	keys.forEach(function(k) {
		k.addEventListener('click', function() {
			playSound(this.getAttribute("data-key"));
		});
		k.addEventListener('transitionend',removeTransitionClass);
	});

	document.addEventListener('keydown', function(e) {
		playSound(e.keyCode);
	});

});
