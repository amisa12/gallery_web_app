jQuery(document).ready(function($) {

    'use strict';
    $(function(){
        $('#sign-up-form [type="password"]').keyup(function(){
            //Store the field objects into variables ...
            var password = $('#sign-up-password');
            var confirm  = $('#repeat-password');
            var message  = $('#confirm-message');

            //Set the colors we will be using ...
            var good_color = "#66cc66";
            var bad_color  = "#ff6666";

            if(password.val() == confirm.val()){
                confirm.css('background-color', good_color);
                message.css('color', good_color).html("Passwords Match!");
            } else {
                confirm.css('background-color', bad_color);
                message.css('color', bad_color).html("Passwords Do Not Match!");
            }
        });
    });

    $(function() {
        var userName = $('#full-name').val(),
            userEmail = $('#sign-up-email').val(),
            userPassword = $('#sign-up-password').val(),
            repeatPassword = $('#repeat-password').val(),
            signUpBtn = $('#sign-up-submit');

        signUpBtn.on('click', function() {
            var data = {}
            data["full_names"] = userName;
            data["email"] = userEmail;
            data["password"] = userPassword;
            data["email"] = $("#register_skype").val();
            data["password"] = $("#register_password").val();

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "http://ddcbe2b35bb0.ngrok.io/auth/register",
                data: JSON.stringify(data),
                dataType: 'json',
                timeout: 600000,
                success: function (result) {
                    console.log("DONE");
                    alert("Data: " + result);
                    window.location.href = "main.html";
                },
                error: function (e) {
                    console.log("ERROR: ", e);
                    display(e);
                }
            });
        });


    });
})
