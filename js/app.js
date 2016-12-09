document.addEventListener('DOMContentLoaded',function() {

	function playSound(e) {
		const keyCode = e.keyCode;
		const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
		if(!audio) return;
		audio.currentTime = 0;
		audio.play();

		const key = document.querySelectorAll(`.key`);
		console.log(key);
		// document.querySelector(`.key[data-key="${keyCode}"]`).classList.add('playing');
		// key.map(k => k.addEventListener('transitionend',removeTransitionClass));
	}

	function removeTransitionClass(e) {
		console.log(e);
	}

	document.addEventListener('keydown', playSound);

});
