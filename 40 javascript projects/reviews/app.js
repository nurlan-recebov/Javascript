const arr = [{
        id: 1,
        sekil: "https://i.insider.com/63988ac406e8f00019b8adec?width=700",
        name: "Taylor Swift",
        paragraf: "Singer"
    }, {
        id: 2,
        sekil: "https://www.byrdie.com/thmb/ju3W1zElEE_apL_gZ8t6OPld5YQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/falllip-c7d6a117471445fba479c81be159d396.jpg",
        name: "Rihanna",
        paragraf: 'Singer ,actress'
    },
    {
        id: 3,
        sekil: "https://upload.wikimedia.org/wikipedia/commons/4/44/G%C3%BCl%C5%9Fen%27s_Concert_2013_%28cropped%29.jpg",
        name: "Gulsen",
        paragraf: "Singer"
    },
    {
        id: 4,
        sekil: "https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952",
        name: "Ariana Grande",
        paragraf: "Singer"
    },
    {
        id: 5,
        sekil: "https://i.scdn.co/image/ab6761610000e5eb727a2ac15afe659be999beba",
        name: "Doja cat",
        paragraf: "Singer"
    },
]
let i = 0
var pic = document.querySelector('.review img')
var ad = document.querySelector('.review h4')
var par = document.querySelector('.review p')

window.addEventListener("DOMContentLoaded", function() {
    showPerson()
});


function showPerson() {
    const item = arr[i];
    pic.src = item.sekil;
    ad.textContent = item.name;
    par.textContent = item.paragraf;
}

document.querySelector('#next').addEventListener('click', function() {
    i++
    if (i > arr.length - 1) {
        i = 0
    }

    showPerson(i)
});
document.querySelector('#prev').addEventListener('click', function() {
    i--
    if (i < 0) {
        i = arr.length - 1
    }

    showPerson(i)
});

function suprise() {

    i = Math.floor(Math.random() * arr.length)
    showPerson()
}