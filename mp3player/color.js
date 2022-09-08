const change = document.querySelector('#change')
const body = document.querySelector('body')

const array = ['linear-gradient(to right, rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155))', 'linear-gradient(to right, rgb(0, 195, 255), rgb(255, 255, 28))', "linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80))", 'linear-gradient(to right, rgb(128, 128, 128), rgb(63, 173, 168))']
let i = -1
change.addEventListener('click', () => {
    i++
    if (i == array.length) {
        i = 0
        body.style.background = `${array[i]}`

    } else {
        body.style.background = `${array[i]}`

    }
})