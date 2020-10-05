/*!
This script is used to get data from the database and dynamically fill html tag.
The html file that uses this script is main-dynamic.html
 */
jQuery(document).ready(function($) {

    'use strict';
    $(function() {
        let token = localStorage.getItem('token');
        console.log(token)
        let Url = `https://cors-anywhere.herokuapp.com/https://2112c89ccd2b.ngrok.io/items/all`;
        console.log(Url)

        $.ajax({
            type: "GET",
            url: Url,
            timeout: 800000,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
            },
            success: function (result) {
                var status = result['status'];
                var data = result['data']
                console.log(data)
                if(status === "success") {
                    $.each(data, function (index, item) {
                        $('#image-div').append(['<div class="col-md-4 col-sm-6"><div class="portfolio-item"><div> <i id="' + item.item + '" title="Like photo" class="far fa-heart"></i> </div> <a href="img/big_portfolio_'+item.item+'" data-lightbox="image-1" class="thumb"> <div class="hover-effect"> <h1>'+item.item_name+'</h1> <p>'+item.item_description+'</p> </div> </div> <div class="image"> <img src="img/portfolio_'+item.item +'"> </div> </div> </a> </div> </div>'])

                    })
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
});