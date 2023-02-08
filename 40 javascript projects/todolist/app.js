const input = document.querySelector('input')
const btn = document.querySelector('button')
const main = document.querySelector('main')

btn.addEventListener('click', function(a) {
    if (btn.textContent == 'Add') {
        main.innerHTML += ` <div class="main-item" data-id="id">
        <p>${input.value}</p>
        <div class="
        item-icon">
            <i id="edit" class="fa-solid fa-pen-to-square"></i>
            <i id="delete" class="fa-solid fa-trash"></i>
        </div>
    </div>`
    } else {

        btn.textContent = 'Add'
        this.element.innerHTML = input.value
        main.innerHTML = this.element
    }
    const items = document.querySelector('.main-item')

    const deletes = document.querySelectorAll('#delete')
    deletes.forEach(function(deleted) {
        deleted.addEventListener('click', function() {
            this.parentNode.parentNode.style.display = 'none';

        })
    })
    const edits = document.querySelectorAll('#edit')
    edits.forEach(function(edit) {
        edit.addEventListener('click', function(e) {
            const element = e.currentTarget.parentElement.parentElement
            input.value = e.currentTarget.parentNode.previousElementSibling.innerHTML
            btn.textContent = 'Edit'
            console.log(element);


        })
    })


});