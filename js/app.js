document.addEventListener('DOMContentLoaded',function() {
	const key = document.querySelectorAll(`.key`);

	function playSound(keyCode) {
		const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
		if(!audio) return;
		audio.currentTime = 0;
		audio.play();

		// console.log(key);
		// document.querySelector(`.key[data-key="${keyCode}"]`).classList.add('playing');
		// key.map(k => k.addEventListener('transitionend',removeTransitionClass));
	}

	function removeTransitionClass(e) {
		console.log(e);
	}

	key.forEach(function(k) {
		k.addEventListener('click', function() {
			playSound(this.getAttribute("data-key"));
		});
	});

	document.addEventListener('keydown', function(e) {
		playSound(e.keyCode);
	});

});
