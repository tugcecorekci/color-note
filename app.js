//dropdown menu
const colors = ["#D5FFF3", "#00916E", "#623CEA", "#DDDDDF"]
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

//submit button - add event
const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', clickHandler)

//submit button event func
function clickHandler(e) {
    e.preventDefault()
    addNewNote()
    document.querySelector('#newNote').value = ""
    drop.value = 0
    tglForm.style.display = "none"
}

//submit button event func - declare
function addNewNote() {
    const newNote = document.createElement('p')
    newNote.setAttribute("class", "oneNote")
    appendInputText(newNote)
    appendDropMenu(newNote)
    appendDeleteBtn(newNote)
    const noteSection = document.querySelector('.noteSection')
    noteSection.append(newNote)
}

function appendInputText(newNote) {
    const newNoteInput = document.querySelector('#newNote').value
    const newDiv1 = document.createElement('div')
    newDiv1.setAttribute("contentEditable", "true")
    newDiv1.setAttribute("id", "div1")
    newDiv1.append(newNoteInput)
    newNote.append(newDiv1)
}

function appendDropMenu(newNote) {
    const newDiv2 = document.createElement('div')
    newDiv2.setAttribute("id", "div2")
    const newDrop = document.createElement('select')
    newDiv2.setAttribute("id", "selectId")
    colorOptions(newDrop)
    newDiv2.append(newDrop)
    newNote.append(newDiv2)
    newDrop.value = drop.value
    newNote.style.backgroundColor = drop.value
}

function appendDeleteBtn(newNote) {
    const newBtn = document.createElement('button')
    const newDiv3 = document.createElement('div')
    newDiv3.setAttribute("id", "div3")
    newBtn.classList.add("newNoteDelete")
    newBtn.innerHTML = "delete"
    newBtn.addEventListener('click', () => newNote.remove())
    newDiv3.append(newBtn)
    newNote.append(newDiv3)
}

//toggle button
const tglForm = document.getElementById('tglForm')
const tglBtn = document.getElementById('tglBtn')
tglBtn.onclick = function () {
    if (tglForm.style.display !== "block") {
        tglForm.style.display = "block"
    } else {
        tglForm.style.display = "none"
    }
}

//change-color
