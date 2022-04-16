let body = document.querySelector('body');
body.style.background = 'yellow'
let container = document.createElement('div')
container.className = 'container'
container.style.display = 'grid'
container.style.gridTemplateColumns = `repeat(5, 1fr)`
container.style.gap = '10px'
document.body.appendChild(container)
for (let p = 0; p < 50; p++) {
    let para = document.createElement("div");
    para.innerText = "This is a paragraph";


    container.appendChild(para);

}