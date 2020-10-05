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
                url: "https://cors-anywhere.herokuapp.com/https://2112c89ccd2b.ngrok.io/auth/login",
                data: JSON.stringify(data),
                dataType: 'json',
                timeout: 600000,
                success: function (result) {
                    var status = result['status'];
                    if(status === "success"){
                        localStorage.clear();
                        localStorage.setItem('token', result['auth_token'])
                        localStorage.setItem('email', userEmail)
                        console.log(result['auth_token'])
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
