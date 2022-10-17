const navbar = document.querySelector("#navbar")
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


    } else {

        navbar.style.background = "none"
        navbar.style.top = "60px"

    }
}
console.log('kkk');