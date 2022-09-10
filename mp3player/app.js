const audio = document.querySelector("#audio");
const play = document.querySelector("#play");
const img = document.querySelector(".img");
const name = document.querySelector(".name");
const music = document.querySelector(".music");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const container = document.querySelector(".container");
const duration = document.querySelector("#duration");
const currenttime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("ul");


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
        name: "Murat boz",
        music: "mp3/3.mp3",
    },
];

window.addEventListener("DOMContentLoaded", function() {
    showPerson();
    DisplayMusicList();
});

const showPerson = () => {
    img.src = `${singer[index].img}`;
    document.querySelector(".name").innerHTML = `${singer[index].name}`;
    audio.src = `${singer[index].music}`;
};

const play3 = () => {
    index++;

    if (index > singer.length - 1) {
        index = 0;
    }
    showPerson(index);
    playMusic();
};

const play1 = () => {
    index--;

    if (index < 0) {
        index = singer.length - 1;
    }
    showPerson(index);
    playMusic();
};

const play2 = () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
};

const pauseMusic = () => {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
};

const playMusic = () => {
    container.classList.add("playing");

    play.classList = "fa-solid fa-pause";
    audio.play();
};
const calculateTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncelenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`;
    const sonuc = `${dakika}:${guncelenenSaniye}`;
    return sonuc;
};
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});
audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currenttime.textContent = calculateTime(progressBar.value);
});
progressBar.addEventListener("input", () => {
    currenttime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});
let sesDurumu = "sesli";
volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
    if (value == 0) {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
    }
});
volume.addEventListener("click", () => {
    if (sesDurumu === "sesli") {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = "0";
    } else {
        audio.muted = false;
        sesDurumu = "sesli";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = "100";
    }
});
const DisplayMusicList = (a) => {
    for (let a = 0; a < singer.length; a++) {
        let litag = `<li li-index='${a}' onclick="selectedMusic(this)" class="bg-warning w-100 d-flex justify-content-between">
        <span class="text-dark">
        ${singer[a].name} </span>       
        <span id="music-${a}" class = "text-dark" > 3: 34 </span>
        <audio class="music-${a}" src="${singer[a].music}"></audio>
         </li>`;
        ul.insertAdjacentHTML("beforeend", litag);
        let liAuidoDuration = ul.querySelector(`#music-${a}`)
        let liAuidoTag = ul.querySelector(`.music-${a}`)
        liAuidoTag.addEventListener("loadeddata", () => {
            liAuidoDuration.innerHTML = calculateTime(liAuidoTag.duration)
        })
    }

};
const li = ul.getAttribute('li')
const selectedMusic = (li) => {
    const indexx = li.getAttribute('li-index')
    singer.index = indexx
    showPerson(indexx)
    playMusic();
}
audio.addEventListener('ended', () => {
    play3()
})