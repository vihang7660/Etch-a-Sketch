let body = document.querySelector('body')
let button = document.createElement('button')
button.textContent = 'Clear'
body.appendChild(button)
let container = document.createElement('div')
body.appendChild(container)
container.className = 'container'


let rows = prompt('Enter the number of rows')
let column = prompt('Enter the number of columns')
let parent;
let child;

for (let i = 0; i < rows; i++) {
    parent = document.createElement('div')
    parent.style.display = 'flex'
    parent.style.flex = '1'
    parent.style.flexDirection = 'column'
    container.appendChild(parent)
    parent.className = 'parent'
    for (let k = 0; k < column; k++) {
        child = document.createElement('div')
        parent.appendChild(child)
        child.className = 'child'
        child.style.flex = '1'
    }
}

body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
container.style.display = 'flex'

function hover(e) {
    e.currentTarget.style.backgroundColor = 'green'
}

let box = document.querySelectorAll('.child')
let boxes = Array.from(box)

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', hover)
}

function clear() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = ''
    }
}

button.addEventListener('click', clear)
button.style.margin = '10px'
button.style.height = '30px'
button.style.width = '100px'

container.style.display = 'flex'
container.style.height = '400px'
container.style.width = '400px'
container.style.border = '1px solid black'