var submitButton=document.getElementById("submit-button");
var notesGrid=document.getElementById("grid-main-div");

submitButton.addEventListener("click", function(){
   createNote()
 
});

var noteColors = [
        ["note-yellow","pin-pink"],
        ["note-blue","pin-green"],
        ["note-pink","pin-blue"],
        ["note-purple","pin-purple"],
        ["note-green","pin-yellow"]
    ];



function createNote(){
    var randomColors=Math.floor(Math.random() * noteColors.length);

 
    var taskInput=document.getElementById("todo-input")
    if(taskInput.value==""){
        alert("Please enter your task")
        return;
    }

    if(!isNewNoteUnique(taskInput.value)){
        alert("Please enter unique task")
        return; 
    }




   // new elements
    var noteDiv=document.createElement("div");
    var noteP=document.createElement("p");
    var notePinDiv=document.createElement("div");
    var editInput=document.createElement("input");
    var actionDiv=document.createElement("div");
    var doneButton=document.createElement("button");
    var doneIcon=document.createElement("i");
    var editButton=document.createElement("button");
    var editIcon=document.createElement("i");
    var deleteButton=document.createElement("button");
    var deleteIcon=document.createElement("i");



    notesGrid.appendChild(noteDiv);
    noteDiv.appendChild(noteP);
    noteDiv.appendChild(notePinDiv);
    noteDiv.appendChild(editInput);
    noteDiv.appendChild(actionDiv);
    actionDiv.appendChild(doneButton);
    doneButton.appendChild(doneIcon);
    actionDiv.appendChild(editButton);
    editButton.appendChild(editIcon);
    actionDiv.appendChild(deleteButton);
    deleteButton.appendChild(deleteIcon);


//  new css classes
    noteDiv.classList.add("note");
    noteDiv.classList.add(noteColors[randomColors][0]);
    notePinDiv.classList.add("note-pin");
    notePinDiv.classList.add(noteColors[randomColors][1]);
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.name="edit-input-name";
    actionDiv.classList.add("todo-actions");
    doneButton.classList.add("done");
    doneIcon.classList.add("fa-solid");
    doneIcon.classList.add("fa-check");
    editButton.classList.add("edit");
    editIcon.classList.add("fa-solid");
    editIcon.classList.add("fa-pen-to-square");
    deleteButton.classList.add("delete");
    deleteIcon.classList.add("fa-solid");
    deleteIcon.classList.add("fa-trash-can");
    editInput.style.display= 'none'
    noteP.setAttribute("name", "note-p");


    deleteButton.addEventListener("click", function() {
    deleteNote(deleteButton);
    });

    doneButton.addEventListener("click", function() {
    readNote(doneButton);
    });

    editButton.addEventListener("click", function() {
    editTask(editButton);
    });

    noteP.textContent=taskInput.value
    taskInput.value=""
    return noteDiv;
}

function deleteNote(deleteButton){
    var note = deleteButton.parentElement.parentElement;
    notesGrid.removeChild(note);

}
function readNote(doneButton){
    if(doneButton.classList.contains("done")){
        doneButton.parentElement.parentElement.children[0].classList.add("line-through");
        doneButton.children[0].classList.replace("fa-check","fa-xmark")
        doneButton.classList.replace("done","cancel")

    }else{
        doneButton.parentElement.parentElement.children[0].classList.remove("line-through");
        doneButton.children[0].classList.replace("fa-xmark","fa-check")
        doneButton.classList.replace("cancel", "done")
    }
}

function editTask(editButton){


    if(editButton.parentElement.parentElement.children[0].style.display == 'none'){
        if(!isNewNoteUnique(editButton.parentElement.parentElement.children[2].value)){
            alert("Please enter unique task")
            return; 
    }}

    if(editButton.parentElement.parentElement.children[0].style.display == 'none' ){
        editButton.parentElement.parentElement.children[2].style.display = 'none'
        editButton.parentElement.parentElement.children[0].style.display = 'block'
        editButton.parentElement.parentElement.children[0].innerHTML =  editButton.parentElement.parentElement.children[2].value

    }else{
        editButton.parentElement.parentElement.children[2].style.display = 'block'
        editButton.parentElement.parentElement.children[0].style.display = 'none'
    }
}

function isNewNoteUnique(newNote){
var existingNotes = document.getElementsByName("note-p")
 for (let note of existingNotes){
    if(newNote.trim() == note.innerText.trim()){
       return false;
    }
 }
    return true;
}