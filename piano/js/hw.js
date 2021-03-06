const piano = document.getElementsByClassName('set')[0];
const pianoKeys = piano.getElementsByTagName('li');
const soundsList = {
    lower: [
        'sounds/lower/first.mp3',
        'sounds/lower/second.mp3',
        'sounds/lower/third.mp3',
        'sounds/lower/fourth.mp3',
        'sounds/lower/fifth.mp3'
    ],
    middle: [
        'sounds/middle/first.mp3',
        'sounds/middle/second.mp3',
        'sounds/middle/third.mp3',
        'sounds/middle/fourth.mp3',
        'sounds/middle/fifth.mp3'
    ],
    higher: [
        'sounds/higher/first.mp3',
        'sounds/higher/second.mp3',
        'sounds/higher/third.mp3',
        'sounds/higher/fourth.mp3',
        'sounds/higher/fifth.mp3'
    ]
};

function setPianoClass(event) {
    if(event.shiftKey){
        event.preventDefault();
        piano.className = 'set lower';
    }
    if(event.altKey){
        event.preventDefault();
        piano.className = 'set higher';
    }
}
function deletePianoClass() {
    piano.className = 'set middle';
}

function playPiano(event) {
    const pianoKey = Array.from(pianoKeys).indexOf(this);
    const pianoSound = this.getElementsByTagName('audio')[0];
    if(event.shiftKey){
        pianoSound.src = soundsList['lower'][pianoKey];
    }else if(event.altKey){
        pianoSound.src = soundsList['higher'][pianoKey];
    }else{
        pianoSound.src = soundsList['middle'][pianoKey];
    }
    pianoSound.play();
}

for(let key of pianoKeys){
    key.addEventListener('click', playPiano)
}
document.addEventListener('keydown', setPianoClass);
document.addEventListener('keyup', deletePianoClass);
