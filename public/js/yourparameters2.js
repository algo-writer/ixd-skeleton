$(document).ready(function() {
    $('#addParam').click(function() {

        //event.preventDefault(); // prevent PageReLoad
        console.log("Clicked add parameter");
            $('.error').css('display', 'block'); // show error msg
            event.preventDefault();
    });
});