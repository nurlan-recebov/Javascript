const navbar = document.querySelector("#navbar")
const scrol = document.querySelector('.scroll-items')
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