const rev = [{
        id: 1,
        name: "Hesen"
    },
    {
        id: 2,
        name: "Rza"
    },
    {
        id: 3,
        name: "Gunel"
    },
    {
        id: 4,
        name: "Mahir"
    },
]
var isim = document.getElementById("ad");
var sagbtn = document.getElementById("sag");
var solbtn = document.getElementById("sol");
let i = -1
sagbtn.addEventListener("click", function() {
    i++;
    if (i < rev.length) {
        console.log(rev[i]["name"]);

        isim.textContent = rev[i]["name"]

    }


});
solbtn.addEventListener("click", function() {
    i--;
    if (i < rev.length) {
        console.log(rev[i]["name"]);

        isim.textContent = rev[i]["name"]

    }


});
// solbtn.addEventListener("click", function() {
//     i--;
//     if (i < rev.length) {
//         console.log(rev[i]["name"]);

//         isim.textContent = rev[i]["name
//     }


// });