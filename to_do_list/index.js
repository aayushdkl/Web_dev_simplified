alert("Input and enter to create a task. To remove it, simply click on the task. -Aayush Dhakal")

const form = document.querySelector(".form_is")
const list = document.querySelector('.list')
const button = document.querySelector("button")
const input = document.querySelector("input")


form.addEventListener('submit', e => {
    e.preventDefault()
    const new_ele = document.createElement('h2')
    new_ele.innerText = input.value
    new_ele.className = "list_items"
    list.appendChild(new_ele)
    input.value = ''
    new_ele.addEventListener('click', () => {
        new_ele.remove()
    })
})