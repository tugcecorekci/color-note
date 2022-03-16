//dropdown menu
const colors = [
    {
        colorname: "blue",
        colorcode: "#63B4D1"
    },
    {
        colorname: "purple",
        colorcode: "#AFBBF2"
    },
    {
        colorname: "yellow",
        colorcode: "#FFF176"
    },
    {
        colorname: "green",
        colorcode: "#C7F0BD"
    }
]

const drop = document.querySelector('select')
drop.appendChild(new Option("select", "0"))

function colorOptions(a) {
    for (c of colors) {
        const option = document.createElement("option");
        option.setAttribute("value", c.colorcode);
        option.text = c.colorname
        a.appendChild(option)
    }
}

colorOptions(drop)

drop.addEventListener('change', bgChange)

function bgChange() {
    if (drop.value == 0) {
        tglForm.style.backgroundColor = "#d0e2f7"
    } else {
        tglForm.style.backgroundColor = drop.value
    }
}

//toggle button
const tglForm = document.getElementById('tglForm')
const tglBtn = document.getElementById('tglBtn')
tglBtn.onclick = function () {
    if (tglForm.style.display !== "flex") {
        tglForm.style.display = "flex"
    }
    else {
        tglForm.style.display = "none"
    }
    window.scrollTo(0, 0)
}

//notes

const notes = []
const noteSection = document.querySelector('.noteSection')

const submitBtn = document.querySelector('#submitBtn')
submitBtn.addEventListener('click', clickHandler)

function clickHandler(e) {
    if (drop.value != 0 && document.querySelector('#newNote').value != 0) {
        e.preventDefault()
        removeNotes()
        newObj()
        addNotes()
        tglForm.style.display = "none"
        document.querySelector('#newNote').value = ""
        drop.value = 0
        tglForm.style.backgroundColor = "#fff"
    }
}

function removeNotes() {
    while (noteSection.firstChild) {
        noteSection.removeChild(noteSection.lastChild);
    }
}

function newObj() {
    const newNoteInput = document.querySelector('#newNote').value
    let obj = {}
    obj["name"] = newNoteInput
    obj["backgrounColor"] = drop.value
    notes.push(obj)
}

function addNotes() {
    for (let i = 0; i < notes.length; i++) {
        const newNote = document.createElement('p')
        newNote.setAttribute("class", "oneNote")
        newNote.setAttribute("id", `pnumber${i + 1}`)
        createNote(i, newNote)
        createSelect(i, newNote)
        createBtn(i, newNote)
    }
}

function createNote(i, newNote) {
    const div1 = document.createElement("div")
    div1.setAttribute("class", "div1")
    // div1.setAttribute("contentEditable", "true")
    const noteText = document.createElement("input")
    noteText.setAttribute("type", "text")
    noteText.setAttribute("id", `number${i + 1}`)
    noteText.value = notes[i]["name"]
    div1.append(noteText)
    newNote.append(div1)
    noteText.addEventListener('change', function () {
        notes[i]["name"] = noteText.value
    })
}

function createSelect(i, newNote) {
    const div2 = document.createElement('div')
    div2.setAttribute("class", "div2")
    const newDrop = document.createElement('select')
    colorOptions(newDrop)
    div2.append(newDrop)
    newNote.append(div2)
    newDrop.value = notes[i]["backgrounColor"]
    newNote.style.backgroundColor = notes[i]["backgrounColor"]
    newDrop.addEventListener('change', function () {
        newNote.style.backgroundColor = newDrop.value
        notes[i]["backgrounColor"] = newDrop.value
    })
}

function createBtn(i, newNote) {
    const newBtn = document.createElement('button')
    const newDiv3 = document.createElement('div')
    newDiv3.setAttribute("class", "div3")
    newBtn.classList.add("newNoteDelete")
    newBtn.innerHTML = "delete"
    newBtn.addEventListener('click', function () {
        newNote.remove()
        notes.splice(i)
    })
    newDiv3.append(newBtn)
    newNote.append(newDiv3)
    noteSection.append(newNote)
}

// search function
function searching() {
    const search = document.getElementById('search')
    const keys = search.value

    for (let i = 0; i < notes.length; i++) {
        let noted = document.getElementById(`number${i + 1}`)
        let p = document.getElementById(`pnumber${i + 1}`)
        if (noted.value.indexOf(keys) > -1) {
            p.style.display = "flex"
        } else {
            p.style.display = "none"

        }
    }
}