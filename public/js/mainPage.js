var disEdit=[];

// Create a "close" button and append it to each list item
window.onload = function(){
  console.log(sessionStorage);
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
    console.log(div.id);
    deleteElement(div.id.substring(4));
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
  disEdit.push(document.getElementById("myInput").value);
  
}

function deleteElement(num){
  //sessionStorage.removeItem("key" + num);

  for(var i = 0; i < sessionStorage.length;i++) {
    disEdit[i]=$("#edit"+i).text();
  }
  disEdit.splice(num,1);
  console.log(disEdit);
  for (var i = Number(num); i < sessionStorage.length; i++) {
    sessionStorage.setItem("key" + i, disEdit[i]);
  }
  sessionStorage.removeItem("key" + (sessionStorage.length-1));

  for (var i = 0; i < disEdit.length;i++) {
    $("#edit"+i).text(disEdit[i]);
  }

  console.log(sessionStorage);
  // for (var j = 0; j < sessionStorage.length; j++) {
  //   $("#edit" + j).text(sessionStorage.getItem("key"+j));
  // }
  $('#blah').empty();
  for (var i = 0; i < sessionStorage.length; i++) {
    $('#blah').append('<li contenteditable=true class="closeable" id="edit'+i+'">' + sessionStorage.getItem("key"+i) + '</li>');
  }
  closeButtons();
}