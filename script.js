// music controls variables
const muteSign = document.querySelector('#x');
const waves = document.querySelector('#waves');
const song = document.querySelector('#song');
const volumeButton = document.querySelector('#volume-button');
const playButton = document.querySelector('#play-button');
const stopButton = document.querySelector('#stop-button');
waves.style.display = 'block';

// animations variables
const bgAnimation = 'movebg 50s linear infinite';
const skyAnimation = 'movebg 500s linear infinite';
const cityAnimation = 'movebg 350s linear infinite';
const seaAnimation = 'move-sea 140s linear infinite';
const walkAnimation = 'walk 1.2s steps(8) infinite';

// background elements
const river = document.querySelector('.river');
const guy = document.querySelector('.guy');

const sky = document.querySelector('.sky');
const path = document.querySelector('.path');
const fences = document.querySelector('.fences');
const streetlightsFront = document.querySelector('.streetlights-front');
const grass = document.querySelector('.grass');
const bush = document.querySelector('.bush');
const secondBush = document.querySelector('.second-bush');

const backgrounds = [path, fences, streetlightsFront, grass, bush, secondBush];

// functions
const play = () => {
    // music
    song.play();
    // volume button
    if (muteSign.style.display === 'none') {
        waves.style.display = 'block';
    }
    // picture
    backgrounds.forEach(element => {
        element.style.animation = bgAnimation;
    });
    sky.style.animation = skyAnimation;
    guy.style.animation = walkAnimation;
    river.style.animation = seaAnimation;
};

const stop = () => {
    //music
    song.pause();
    //picture
    backgrounds.forEach(element => {
        element.style.animation = 'none';
    });
    sky.style.animation = 'none';
    guy.style.animation = 'none';
    river.style.animation = 'none';
};

const muted = () => {
    if (song.muted) {
        song.muted = false;
        muteSign.style.display = 'none';
        waves.style.display = 'block';
    } else {
        song.muted = true;
        muteSign.style.display = 'block';
        waves.style.display = 'none';
    }
};

// events
playButton.addEventListener('click', play);
stopButton.addEventListener('click', stop);
volumeButton.addEventListener('click', muted);