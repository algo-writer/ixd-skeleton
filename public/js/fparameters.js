$(document).ready(function() {
    initializePage();
});

function initializePage(){
    var button = $(".add");
    $(button).click(append)
}

var x = 0; //initial text box count
function append(e){ //on add input button click
        var max_fields = 10; //maximum input boxes allowed

        var div = $("#inputs")
        var html = "<input id = 'type' type='text' placeholder='Parameter Type'><input id='name' type='text' placeholder='Parameter Name'><br>";
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            div.append(html); //add input box
        }
    }
