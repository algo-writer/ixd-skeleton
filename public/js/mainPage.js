// Create a "close" button and append it to each list item

window.onload = function(){
             for (var i = 0; i < sessionStorage.length; i++) {
            $('#blah').append('<li contenteditable=true class="closeable" id="edit'+i+'">' + sessionStorage.getItem("key"+i) + '</li>');
        }
        closeButtons();
};

function closeButtons() {


var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var button = document.createElement("BUTTON");
  button.className="glyphicon glyphicon-remove";
  span.className = "close";
  span.contentEditable=false;
  span.appendChild(button);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var myStepsArray = [];
var storageArray = [];
}

function appendToStorage(){
  console.log(document.getElementById("myInput").value);
  sessionStorage.setItem("key" + sessionStorage.length, document.getElementById("myInput").value);
  console.log(sessionStorage);
  
}

function deleteElement(){

}