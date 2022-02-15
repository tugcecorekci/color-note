//dropdown menu
const colors = ["red", "yellow", "blue", "cyan"]
const drop = document.querySelector('select')
drop.appendChild(new Option("select", "0"))

function colorOptions(a) {
    for (color of colors) {
        const option = document.createElement("option");
        option.setAttribute("value", color);
        option.text = color
        a.appendChild(option)
    }
}

colorOptions(drop)

//button - add event
const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', clickHandler)

//event func
function clickHandler(e) {
    e.preventDefault()
    addNewNote()
    tglForm.style.display = "none"
}

//event func - declare
function addNewNote() {
    const newNote = document.createElement('li')
    appendInputText(newNote)
    appendDropMenu(newNote)
    appendDeleteBtn(newNote)
    const notepad = document.querySelector('.notepad')
    notepad.append(newNote)
}

function appendInputText(newNote) {
    const newNoteInput = document.querySelector('#newNote').value
    const newNoteDiv = document.createElement('div')
    newNoteDiv.setAttribute("contentEditable", "true")
    newNoteDiv.append(newNoteInput)
    newNote.append(newNoteDiv)
}

function appendDropMenu(newNote) {
    const newDrop = document.createElement('select')
    colorOptions(newDrop)
    newNote.append(newDrop)
    console.log(drop.value)
    newDrop.value = drop.value
}

function appendDeleteBtn(newNote) {
    const newBtn = document.createElement('button')
    newBtn.classList.add("newNoteDelete")
    newBtn.innerHTML = "delete"
    newBtn.addEventListener('click', () => newNote.remove())
    newNote.append(newBtn)
}

//toggle button
const tglForm = document.getElementById('tglForm')
const tglBtn = document.getElementById('tglBtn')
tglBtn.onclick = function () {
    if (tglForm.style.display !== "block") {
        tglForm.style.display = "block"
        tglBtn.innerHTML = "close"
    } else {
        tglForm.style.display = "none"
        tglBtn.innerHTML = "add"
    }
}
