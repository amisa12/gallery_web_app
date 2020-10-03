jQuery(document).ready(function($) {

	'use strict';

        $(function() {
  
          // Vars
          var modBtn  = $('#modBtn'),
              modal   = $('#modal'),
              close   = modal.find('.close-btn img'),
              modContent = modal.find('.modal-content'),
              likeBtn = $('#like-btn'),
              loginBtn = $('#login-btn'),
              loginModal = $('#login-modal'),
              loginClose = loginModal.find('.close-btn img'),
              loginModContent = loginModal.find('.modal-content'),
              signUpBtn = $('#sign-up-btn'),
              signUpModal = $('#sign-up-modal'),
              signUpClose = signUpModal.find('.close-btn img'),
              signUpModCOntent = signUpModal.find('.modal-content'),
              signUpModLoginBtn = $('#sign-up-login-btn');
          
          // open modal when click on open modal button 
          modBtn.on('click', function() {
            modal.css('display', 'block');
            modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });

          // open login modal when click on open modal button
          likeBtn.on('click', function() {
            loginModal.css('display', 'block');
            loginModContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });

          // open login modal when click on open modal button
          loginBtn.on('click', function() {
            loginModal.css('display', 'block');
            loginModContent.removeClass('modal-animated-out').addClass('modal-animated-in');
          });

          // open sign up modal when click on open modal button
          signUpBtn.on('click', function() {
            loginModContent.removeClass('modal-animated-out').addClass('modal-animated-in');
            signUpModal.css('display', 'block');
            signUpModCOntent.removeClass('modal-animated-out').addClass('modal-animated-in');
            loginModal.css('display', 'none');
          });

          // open login modal when click on open modal button
          signUpModLoginBtn.on('click', function() {
            loginModal.css('display', 'block');
            loginModContent.removeClass('modal-animated-out').addClass('modal-animated-in');
            signUpModCOntent.removeClass('modal-animated-out').addClass('modal-animated-in');
            signUpModCOntent.css('display', 'none');
          });

          // close modal when click on close button or somewhere out the modal content
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(modal) || target.is(close)) {
              modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                next();
              });
            }
          });

          // close modal when click on close button or somewhere out the modal content
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(signUpModal) || target.is(signUpClose)) {
              signUpModCOntent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                signUpModal.css('display', 'none');
                next();
              });
            }
          });

          // close modal when click on close button or somewhere out the modal content
          $(document).on('click', function(e) {
            var target = $(e.target);
            if(target.is(loginModal) || target.is(loginClose)) {
              loginModContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                loginModal.css('display', 'none');
                next();
              });
            }
          });
        });


        // on click event on all anchors with a class of scrollTo
        $('a.scrollTo').on('click', function(){
          
          // data-scrollTo = section scrolling to name
          var scrollTo = $(this).attr('data-scrollTo');
          
          
          // toggle active class on and off. added 1/24/17
          $( "a.scrollTo" ).each(function() {
            if(scrollTo == $(this).attr('data-scrollTo')){
              $(this).addClass('active');
            }else{
              $(this).removeClass('active');
            }
          });
          
          
          // animate and scroll to the sectin 
          $('body, html').animate({
            
            // the magic - scroll to section
            "scrollTop": $('#'+scrollTo).offset().top
          }, 1000 );
          return false;
          
        })
 

        $(".menu-icon").click(function() {
          $(this).toggleClass("active");
          $(".overlay-menu").toggleClass("open");
        });

});
