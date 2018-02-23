$(document).ready(function() {
    $('#username').focus();

    $('#subm').click(function() {

        //event.preventDefault(); // prevent PageReLoad

        var ValidEmail = $('#username').val() === 'CompetentCoder'; // User validate
        var ValidPassword = $('#password').val() === 'nad298'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            console.log("valid");
            //window.location = "index"; // go to home.html
            $('#form').submit();
        }
        else {
            $('.error').css('display', 'block'); // show error msg
            event.preventDefault();
        }
    });
});