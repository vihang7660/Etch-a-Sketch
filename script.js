let container = document.createElement('div')
let body = document.querySelector('body')
body.appendChild(container)
container.className = 'container'


let rows = prompt('Enter the number of rows')
let column = prompt('Enter the number of columns')
let parent;
let child;

for (let i = 0; i < rows; i++) {
    parent = document.createElement('div')
    container.appendChild(parent)
    parent.className = 'parent'
    for (let k = 0; k < column; k++) {
        child = document.createElement('div')
        parent.appendChild(child)
        child.className = 'child'
        child.style.border = '1px solid red'
        child.style.width = '20px'
        child.style.height = '20px'
    }
}

container.style.display = 'flex'
container.style.justifyContent = 'center'