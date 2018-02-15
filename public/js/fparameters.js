$(document).ready(function() {
    initializePage();
});

function initializePage(){
    var button = $(".add");
    $(button).click(append);
    var button2 = $(".JSON");
    $(button2).click(update);
}

var x = 1; //initial text box count
function append(e){ //on add input button click
        var max_fields = 10; //maximum input boxes allowed
        var html = "<form action='add' method='get'><input id ='type' type='text' placeholder='Parameter Type'><input id='name' type='text' placeholder='Parameter Name'><input id='done' type='submit' value='Confirm'></form>";
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            div.append(html); //add input box
        }
    }

    function update(e) {

    }
