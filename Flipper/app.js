const btn = document.querySelector('.btn');
const con = document.querySelector('.container');
const bac = document.querySelector('.back');
const arran = ["green", "red", "blue", "yellow", "black", "orange", "pink", "#456789"]
let i = 0;
btn.addEventListener("click", function() {

    if (i < arran.length) {
        con.style.backgroundColor = arran[i - 1];
        bac.textContent = arran[i];
        bac.style.backgroundColor = arran[i];

        i++

    }

})



// function nurlan() {
//     if (i < arran.length) {

//         i++

//     }
// }