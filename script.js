var submitButton=document.getElementById("submit-button");
var notesGrid=document.getElementById("grid-main-div");

submitButton.addEventListener("click", function(){
   var noteDiv = createNote()

    notesGrid.appendChild(noteDiv);
});

function createNote(){
 
    var taskInput=document.getElementById("todo-input")
    if(taskInput.value==""){
        alert("Please enter your task")
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
    noteDiv.classList.add("note-purple");
    notePinDiv.classList.add("note-pin");
    notePinDiv.classList.add("pin-purple");
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


 
    noteP.textContent=taskInput.value
    taskInput.value=""
    return noteDiv;
}
