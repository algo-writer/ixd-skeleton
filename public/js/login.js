$(document).ready(function() {
    $('#username').focus();

    $('#submit').click(function() {

        event.preventDefault(); // prevent PageReLoad

        var ValidEmail = $('#username').val() === 'CompetentCoder'; // User validate
        var ValidPassword = $('#password').val() === 'nad298'; // Password validate

        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            $('.valid').css('display', 'block');
            window.location = "index"; // go to home.html
        }
        else {
            $('.error').css('display', 'block'); // show error msg
        }
    });
});