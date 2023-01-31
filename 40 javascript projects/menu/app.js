const menu = [{
        img: "https://i.pinimg.com/736x/fb/7f/bd/fb7fbd2e36a5b23f0714c4dcde84c7b8.jpg",
        category: 'woman'
    }, {
        img: "https://cdn1.ntv.com.tr/gorsel/__lY3itx9k-huEgEjLPJEw.jpg?width=1000&mode=crop&scale=both",
        category: 'man'
    }, {
        img: "https://www.akilligundem.com/wp-content/uploads/2022/11/melisa-asli-pamuk-bu-donemin-asklari-bana-gore-degil-0-rE5lDdb6.jpg",
        category: 'woman'
    },
    {
        img: "https://flxt.tmsimg.com/assets/908486_v9_ba.jpg",
        category: 'man'
    },
]

window.addEventListener("DOMContentLoaded", function() {
    displaymenuitems(menu)
})
const btns = document.querySelectorAll('.item-btn')
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id
        const menucategory = menu.filter(function(menuitem) {
            if (menuitem.category === category) {
                return menuitem
            }

        })
        if (category === 'all') {
            displaymenuitems(menu)
        } else(
            displaymenuitems(menucategory)
        )
    })
})

function displaymenuitems(menuitems) {
    let displayMenu = menuitems.map(function(item) {
        return ` <img src="${item.img}" alt="">`
    })
    displayMenu = displayMenu.join("")
    document.querySelector('.img-items').innerHTML = displayMenu
}