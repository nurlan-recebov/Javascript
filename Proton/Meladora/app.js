const navbar = document.querySelector("#navbar")
const scrol = document.querySelector('.scroll-items');
const btn = document.querySelector('#btn')
const search = document.querySelector('#search')
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {

        navbar.style.backgroundColor = "green"
        navbar.style.top = "0"
        scrol.style.display = 'block'
        navbar.style.borderBottom = '3px solid #ffbb00'
        navbar.style.zIndex = '1'

    } else {

        navbar.style.background = "none"
        navbar.style.top = "60px"
        scrol.style.display = 'none'
        navbar.style.borderBottom = 'none'
        navbar.style.zIndex = '0'

    }
}

function myFunction() {
    search.classList.toggle('show')

}
let list = document.querySelectorAll('.list')
let itembox = document.querySelectorAll('.item-box')
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active')

        }
        this.classList.add('active')
        let dataFilter = this.getAttribute('data-filter')
        for (let k = 0; k < itembox.length; k++) {
            itembox[k].classList.remove('active')
            itembox[k].classList.add('hide')
            if (itembox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                itembox[k].classList.remove('hide');
                itembox[k].classList.add('active')
            }
        }
    })

}