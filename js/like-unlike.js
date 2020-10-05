jQuery(document).ready(function($) {
    // window.localStorage.removeItem('buttonStatus')
    $(function() {
        var savedButtonStatus = window.localStorage.getItem('buttonStatus')
        var buttonStatus = JSON.parse(savedButtonStatus);
        console.log('savedButtonStatus ' + savedButtonStatus)
        console.log('savedButtonStatus json ' + JSON.parse(savedButtonStatus))
        if(jQuery.isEmptyObject(savedButtonStatus) === false){
            console.log('buttonStatus ' + buttonStatus)
            $.each(JSON.parse(savedButtonStatus), function (index, value){
                if(value==='true'){
                    console.log(index)
                    console.log(document.getElementById(index).hasAttribute('class'))
                    if(document.getElementById(index).hasAttribute('class')){
                        document.getElementById(index).removeAttribute('class');
                        document.getElementById(index).setAttribute('class', 'fas fa-heart');
                    }
                }
            });
        }

        // window.localStorage.removeItem('buttonStatus')
    })
        'use strict';
        var savedButtonStatus = window.localStorage.getItem('buttonStatus');
        if(jQuery.isEmptyObject(savedButtonStatus) === false){
            var buttonStatus = JSON.parse(savedButtonStatus);
        }
        else {
            var buttonStatus = {}
        }


        $('.far').on('click', function (){
            var likeBtn = $(this);
            var imageId = $(this).attr('id')
            let token = localStorage.getItem('token');
            console.log(token)
            var data = {}
            data['email'] = window.localStorage.getItem('email')
            data['item'] = imageId

            console.log(data)

            if(likeBtn.hasClass("far")){
                likeBtn.removeClass("far").addClass("fas");
                buttonStatus[imageId] = 'true'

                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "https://cors-anywhere.herokuapp.com/https://ancient-bastion-94304.herokuapp.com/items/user-item/add",
                    data: JSON.stringify(data),
                    dataType: 'json',
                    timeout: 8000000,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    },
                    success: function (result) {

                    },
                    error: function (e) {
                        console.log("ERROR: ", e);
                        // display(e);
                    }
                });
            }
            else{
                likeBtn.removeClass("fas").addClass("far");
                buttonStatus[imageId] = 'false'
                $.ajax({
                    type: "DELETE",
                    contentType: "application/json",
                    url: "https://cors-anywhere.herokuapp.com/https://ancient-bastion-94304.herokuapp.com/items/user-item/remove",
                    data: JSON.stringify(data),
                    dataType: 'json',
                    timeout: 8000000,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    },
                    success: function (result) {
                        var status = result['status'];
                        if(status === "success"){

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
            }
            window.localStorage.setItem('buttonStatus', JSON.stringify(buttonStatus))
            console.log(window.localStorage.getItem('buttonStatus'))
        })
});