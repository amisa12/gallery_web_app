jQuery(document).ready(function($) {

    'use strict';
    $(function Toogle() {
        var likeBtn = $('.fa-heart');

        // likeBtn.on('click', function (){
            if(likeBtn.hasClass("far")){
                likeBtn.removeClass("far").addClass("fas")
            }
            else{
                likeBtn.removeClass("fas").addClass("far")
            }
        // })

    })
});