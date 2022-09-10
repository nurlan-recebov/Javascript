const change = document.querySelector('#change')
const body = document.querySelector('body')

const array = ['linear-gradient(to right, rgb(167, 112, 239), rgb(207, 139, 243), rgb(253, 185, 155))',
    'linear-gradient(to right, rgb(0, 195, 255), rgb(255, 255, 28))',
    "linear-gradient(to right, rgb(189, 195, 199), rgb(44, 62, 80))",
    'linear-gradient(to right, rgb(128, 128, 128), rgb(63, 173, 168))',
    'linear-gradient(to right, rgb(11, 72, 107), rgb(245, 98, 23))',
    'linear-gradient(to right, rgb(31, 64, 55), rgb(153, 242, 200))', 'linear-gradient(to right, rgb(202, 197, 49), rgb(243, 249, 167))', 'linear-gradient(to right, rgb(0, 90, 167), rgb(255, 253, 228))',
    'linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54))', 'linear-gradient(to right, rgb(89, 193, 115), rgb(161, 127, 224), rgb(93, 38, 193))',
    'linear-gradient(to right, rgb(241, 39, 17), rgb(245, 175, 25))',
    'linear-gradient(to right, rgb(249, 83, 198), rgb(185, 29, 115))', 'linear-gradient(to right, rgb(44, 62, 80), rgb(253, 116, 108))', 'linear-gradient(to right, rgb(252, 234, 187), rgb(248, 181, 0))', 'linear-gradient(to right, rgb(3, 0, 30), rgb(115, 3, 192), rgb(236, 56, 188), rgb(253, 239, 249))', 'linear-gradient(to right, rgb(60, 59, 63), rgb(96, 92, 60))', 'linear-gradient(to right, rgb(30, 150, 0), rgb(255, 242, 0), rgb(255, 0, 0))',
    'linear-gradient(to right, rgb(101, 153, 153), rgb(244, 121, 31))', 'linear-gradient(to right, rgb(32, 0, 44), rgb(203, 180, 212))',
    'linear-gradient(to right, rgb(239, 59, 54), rgb(255, 255, 255))', 'linear-gradient(to right, rgb(67, 198, 172), rgb(25, 22, 84))', 'linear-gradient(to right, rgb(0, 0, 0), rgb(15, 155, 15))', 'linear-gradient(to right, rgb(15, 12, 41) ,rgb(48, 43, 99), rgb(36, 36, 62))', 'linear-gradient(to right, rgb(221, 62, 84), rgb(107, 229, 133))'
]
let i = -1


function chang() {
    i++
    if (i == array.length) {
        i = 0
        body.style.background = `${array[i]}`

    } else {
        body.style.background = `${array[i]}`

    }
}
setInterval(() => {
    chang()
}, 2000);