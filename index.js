
const form = document.getElementById("form")
const input = document.querySelector("input")
const list = document.querySelector(".todo__body")
const button = document.querySelector("button")

console.log(list.hasChildNodes())

if(!list.hasChildNodes()) {
    const node = document.createElement("div")
    node.className = "empty"
    node.innerHTML = "No task.."
    list.append(node)
}

form.addEventListener("submit", e => {
    e.preventDefault()
    if(input.value) {
        const empty = document.querySelector(".empty")
        if(empty) {
            empty.remove()
        }
        const task = document.createElement("li")

        const text = document.createElement("span")
        text.className = "text"
        text.innerHTML = input.value
        task.prepend(text)

        const check_mark = document.createElement("input")
        check_mark.type = "checkbox"
        check_mark.className = "check_mark"
        task.prepend(check_mark)


        const delBtn = document.createElement("span")
        delBtn.innerHTML = "delete"
        delBtn.className = "delBtn"
        task.appendChild(delBtn)

        check_mark.addEventListener("change", e => {
            if(e.target.checked) {
                task.classList.add("checked")

            }else {
                task.classList.remove("checked")
            }
        })

        delBtn.addEventListener("click", () => {
            task.remove()
            if(!list.hasChildNodes()) {
                const node = document.createElement("div")
                node.className = "empty"
                node.innerHTML = "No task.."
                list.append(node)
            }
        })

        list.appendChild(task)
        input.value = ""
    }
})

button.addEventListener("click", () => {
    
    list.innerHTML = ''
    if(!list.hasChildNodes()) {
        const node = document.createElement("div")
        node.className = "empty"
        node.innerHTML = "No task.."
        list.append(node)
    }
})