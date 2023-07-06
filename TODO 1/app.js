var inpVal = document.getElementById("inp");

var list = document.getElementById("list");

// Delete Function
function delRow(btn){
   btn.parentNode.remove()
}

// Edit Function
function editRow(btn){
btn.parentNode.firstChild.nodeValue = prompt("Enter Text")
}
// Read Function
function readRow(btn) {
    var listItemText = btn.parentNode.firstChild.nodeValue;
    var speech = new SpeechSynthesisUtterance();
    speech.text = listItemText;
    window.speechSynthesis.speak(speech);
  }

function addTask(){
// Create Li
if (inpVal.value === "") {
    alert("Write Something In The Box")
} else {
    

var li = document.createElement("li");
var liVal = document.createTextNode(inpVal.value);
li.appendChild(liVal)
list.appendChild(li)
inpVal.value = "";

// create Delete Button
var del = document.createElement("button");
var delText = document.createTextNode("Delete");
del.appendChild(delText);
del.setAttribute("class","btn2")
del.setAttribute("onclick", "delRow(this)")
li.appendChild(del)
// Create Edit Button
var edit = document.createElement("button");
var editText = document.createTextNode("Edit");
edit.appendChild(editText);
edit.setAttribute("class","btn2")
edit.setAttribute("onclick", "editRow(this)")
li.appendChild(edit)
}}

