const con = document.querySelector(".container")
let hex = ['0', '1', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']


let par = document.querySelector('.container h1')

function clik() {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumer()]
    }
    par.textContent = hexColor
    document.querySelector('.container').style.backgroundColor = hexColor
}

function getRandomNumer() {

    return Math.floor(Math.random() * hex.length)
}