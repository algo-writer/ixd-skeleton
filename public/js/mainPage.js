// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
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

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.contentEditable = "true";
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  myStepsArray[0] = inputValue;
  appendToStorage("main", myStepsArray);
  //const data = JSON.parse(localStorage.getItem('main'));
  console.log(myStepsArray);
  console.log(sessionStorage);



  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("myUL").appendChild(li);
  }
  
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function appendToStorage(name, data){
    var old = sessionStorage.getItem(name);
    if(old === null){
      sessionStorage.setItem("main", JSON.stringify(data));
    } 
    else{
      var array = JSON.parse(sessionStorage.getItem(name));
      array = array.concat(data);
      sessionStorage.setItem("main", JSON.stringify(array));
    }

}

// function appendToStorage2(name, data, array){
//     array.push(data);
//     sessionStorage.setItem("main", JSON.stringify(array));

// }