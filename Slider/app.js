const rev = [{
        id: 1,
        name: "Hesen",
        img: 'https://m.media-amazon.com/images/M/MV5BMzkzOGFiY2EtZDcyZi00OWNhLThhNmYtYjQ3ODljMTM5ZDBkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
    }, {
        id: 2,
        name: "Hesen",
        img: 'https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
    },
    {
        id: 3,
        name: "Rza",
        img: 'https://i.cnnturk.com/i/cnnturk/75/740x416/601a9b87214ed82080a32935.jpg'
    },
    {
        id: 4,
        name: "Gunel",
        img: 'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg'
    },
    {
        id: 5,
        name: "Mahir",
        img: 'https://kpophighindia.com/wp-content/uploads/2021/08/squid_game_poster_main.jpg.jpg'
    },
]
var ad = document.getElementById("ad");
var sagbtn = document.getElementById("sag");
var solbtn = document.getElementById("sol");
var sekil = document.getElementById('sekil');
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function() {
    showPerson()
});

function showPerson() {
    const item = rev[currentItem];

    sekil.src = item.img;
    ad.textContent = item.name;

}
let i = -1
sagbtn.addEventListener("click", function() {
    currentItem++;

    if (currentItem > rev.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
solbtn.addEventListener("click", function() {
    currentItem--;

    if (currentItem < 0) {
        currentItem = rev.length - 1;
    }
    showPerson(currentItem);


});