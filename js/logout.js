jQuery(document).ready(function($) {

    'use strict';
    $(function() {
        var logoutBtn = $('#logout-btn')

        let token = localStorage.getItem('token');

        logoutBtn.on('click', function (){
            $.ajax({
                type: "GET",
                url: "https://cors-anywhere.herokuapp.com/https://ancient-bastion-94304.herokuapp.com/auth/logout",
                timeout: 800000,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                },
                success: function (result) {
                    var status = result['status'];
                    if(status === "success") {
                        window.location.href = "index.html";
                        localStorage.clear();
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
        })
    })
});