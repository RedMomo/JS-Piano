
//Assign sounds to keys at random (complete)
// const pianoKeys = document.querySelectorAll('.key');

// function playSound(newUrl) {
//     new Audio(newUrl).play()
//     console.log(newUrl)
// }

// pianoKeys.forEach((pianoKey, i) => {
//     const number = i < 9 ? "0" + (i + 1) : (i + 1);
//     const newUrl = "24-piano-keys/24-piano-keys/key" + number + ".mp3";
//     pianoKey.addEventListener('click', () => playSound(newUrl))
// });


//Assign specific sounds to specific keys without using forEach method
const blackKey1 = document.getElementById('black-key-1');
const url1 = "24-piano-keys/24-piano-keys/key01.mp3";
function playSound(url1) {
    new Audio(url1).play()
    console.log(url1)
}
blackKey1.addEventListener('click', () => playSound(url1))

const blackKey2 = document.getElementById('black-key-2');
const url2 = "24-piano-keys/24-piano-keys/key02.mp3";
function playSound(url2) {
    new Audio(url2).play()
    console.log(url2)
}
blackKey2.addEventListener('click', () => playSound(url2))

const blackKey3 = document.getElementById('black-key-3');
const url3 = "24-piano-keys/24-piano-keys/key03.mp3";
function playSound(url3) {
    new Audio(url3).play()
    console.log(url3)
}
blackKey3.addEventListener('click', () => playSound(url3))

const blackKey4 = document.getElementById('black-key-4');
const url4 = "24-piano-keys/24-piano-keys/key04.mp3";
function playSound(url4) {
    new Audio(url4).play()
    console.log(url4)
}
blackKey4.addEventListener('click', () => playSound(url4))

const blackKey5 = document.getElementById('black-key-5');
const url5 = "24-piano-keys/24-piano-keys/key05.mp3";
function playSound(url5) {
    new Audio(url5).play()
    console.log(url5)
}
blackKey5.addEventListener('click', () => playSound(url5))

const blackKey6 = document.getElementById('black-key-6');
const url6 = "24-piano-keys/24-piano-keys/key06.mp3";
function playSound(url6) {
    new Audio(url6).play()
    console.log(url6)
}
blackKey6.addEventListener('click', () => playSound(url6))

const blackKey7 = document.getElementById('black-key-7');
const url7 = "24-piano-keys/24-piano-keys/key07.mp3";
function playSound(url7) {
    new Audio(url7).play()
    console.log(url7)
}
blackKey7.addEventListener('click', () => playSound(url7))

const blackKey8 = document.getElementById('black-key-8');
const url8 = "24-piano-keys/24-piano-keys/key08.mp3";
function playSound(url8) {
    new Audio(url8).play()
    console.log(url8)
}
blackKey8.addEventListener('click', () => playSound(url8))

const blackKey9 = document.getElementById('black-key-9');
const url9 = "24-piano-keys/24-piano-keys/key09.mp3";
function playSound(url9) {
    new Audio(url9).play()
    console.log(url9)
}
blackKey9.addEventListener('click', () => playSound(url9))

const blackKey10 = document.getElementById('black-key-10');
const url10 = "24-piano-keys/24-piano-keys/key10.mp3";
function playSound(url10) {
    new Audio(url10).play()
    console.log(url10)
}
blackKey10.addEventListener('click', () => playSound(url10))



