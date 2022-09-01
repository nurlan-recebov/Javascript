const audio = document.querySelector("#audio");
const play = document.querySelector("#play");
const img = document.querySelector(".img");
const name = document.querySelector(".name");
const music = document.querySelector(".music");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");;
const container = document.querySelector(".container")
let index = 0;

const singer = [{
        id: 1,
        img: "https://i.superhaber.tv/storage/files/images/2018/07/31/a40875665-s800b1b5-DNPU.jpg",
        name: "Gulsen",
        music: "mp3/1.mp3",
    },
    {
        id: 2,
        img: "https://img-s1.onedio.com/id-62e3cae11a9b43ed10e79f16/rev-0/w-620/f-jpg/s-089bc6f149c66252230752458d1e31fa5cb594ef.jpg",
        name: "Edis",
        music: "mp3/2.mp3",
    },
    {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/tr/thumb/b/bc/G%C3%BCl%C5%9Fen_feat._Murat_Boz_-_%C4%B0ltimas.jpg/800px-G%C3%BCl%C5%9Fen_feat._Murat_Boz_-_%C4%B0ltimas.jpg",
        name: "Murat boz & Gulsen",
        music: "mp3/3.mp3",
    },
];

window.addEventListener("DOMContentLoaded", function() {
    showPerson()

});

function showPerson() {


    img.src = `${singer[index].img}`;
    document.querySelector(".name").innerHTML = `${singer[index].name}`;
    audio.src = `${singer[index].music}`;

}

function play3() {
    index++;

    if (index > singer.length - 1) {
        index = 0;
    }
    showPerson(index);
    playMusic()
}

function play1() {
    index--;

    if (index < 0) {
        index = singer.length - 1
    }
    showPerson(index);
    playMusic()
}


function play2() {
    const isMusicPlay = container.classList.contains("playing")
    isMusicPlay ? pauseMusic() : playMusic()

}

function pauseMusic() {
    container.classList.remove('playing')
    play.classList = "fa-solid fa-play"
    audio.pause()
}

function playMusic() {
    container.classList.add('playing')

    play.classList = "fa-solid fa-pause"
    audio.play()
}