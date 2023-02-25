

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip if it's not transform.
    // console.log(e.propertyName);
    e.target. classList.remove('playing');
}
function stop() {
    const audios = document.querySelectorAll(`audio`)
    for (let i = 0; i < audios.length; i++) {
        audios[i].pause() //pausing the other key sounds for a start of a new sound.
    } 
}

function playSound(e){
    stop()
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function for an off key

    key.classList.add('playing');
    audio.currentTime = 0; //rewind time
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

