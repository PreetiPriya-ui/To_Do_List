let addToDoButton = document.getElementById('addtodo');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');
detail();
function detail(){
var person = prompt("Please enter your name");
var txt;
if (person == null || person == "") {
  return detail();
} else {
  txt = "Hello " + person.bold() + "! What are your works?";
}
document.getElementById("person").innerHTML = txt;
}

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    if(paragraph.innerText=="")
        alert("Write something to add to your list")
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })

})