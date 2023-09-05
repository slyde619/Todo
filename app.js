const addTodo = document.querySelector('.addTodo')
const list = document.querySelector('.todo')


// Generate list template
const generateTemplate = (newItem) => {
    const li = `
        <li class="list-group-item">
            <span>${newItem}</span>
            <i class='bx bxs-trash-alt delete'></i>
        </li>
    `;
    list.innerHTML += li
}

// Add new todo
addTodo.addEventListener('submit', e => {
    e.preventDefault()
    const newItem = addTodo.add.value.trim()
    // validate input
    if(newItem.length){
        generateTemplate(newItem)
        // clear field
        addTodo.reset()
    }
})

// delete todo item
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
        e.target.parentElement.style['transition'] = ".3s"
    }
})


// filter todo
const search = document.querySelector('.search input')

// Filter function to filter todos
const filterItem = keyword => {
    Array.from(list.children)
        .filter(item => !item.textContent.includes(keyword))
        .forEach(item => item.classList.add('hide'))

    Array.from(list.children)
      .filter((item) => item.textContent.includes(keyword))
      .forEach((item) => item.classList.remove("hide"));
}

search.addEventListener('keyup', () => {
    const keyword = search.value.trim()
    if(keyword.length){
        filterItem(keyword)
    }
})