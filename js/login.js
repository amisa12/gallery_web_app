jQuery(document).ready(function($) {

    'use strict';
    $(function() {
        var loginBtn = $('#login-submit');

        loginBtn.on('click', function(event) {
            var userEmail = $('#user_email').val();
            var userPassword = $('#user_password').val();

            var data = {}
            data["email"] = userEmail;
            data["password"] = userPassword;


            event.preventDefault();
            $.ajax({
                type: "POST",
                contentType: "application/json",
                url: "https://cors-anywhere.herokuapp.com/https://bb94e7331667.ngrok.io/auth/login",
                data: JSON.stringify(data),
                dataType: 'json',
                timeout: 800000,
                success: function (result) {
                    var status = result['status'];
                    if(status === "success"){
                        window.location.href = "main.html";
                    }
                    else{
                        alert(result['message']);
                    }

                },
                error: function (e) {
                    console.log("ERROR: ", e);
                    display(e);
                }
            });
        });


    });
})
