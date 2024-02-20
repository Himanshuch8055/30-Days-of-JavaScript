const keys = document.querySelectorAll('.key');
window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing')
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the funtion
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
    // console.log(key)
}