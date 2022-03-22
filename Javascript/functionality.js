
$(document).ready(
    
    function () 
    {

        $('#sidebarCollapse').on('click', function () 
        {
            $("#sidebar").css({"width": "100%"});
            $("#sidebarCollapse").css({"visibility": "hidden"});
            $("#body").css({ "overflow": "hidden"});
            //$("#body").css({"margin": "0;", "height": "100%;", "overflow": "hidden"});
            // $('#sidebar, #content').toggleClass('active');
            // $('.collapse.in').toggleClass('in');
            // $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
       $('#sidebarBack').on('click', function () 
         {
            $("#sidebar").css({"width": "0%"});
            $("#sidebarCollapse").css({"visibility": "visible"});
            $("#body").css({ "overflow": "auto"});
        //     $('#sidebar, #content').toggleClass('active');
        //     $('.collapse.in').toggleClass('in');
        //     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
         });
         $('#read_more').on('click', function () 
         {
            $("#more_text").css({"display": "inline"});
            $("#read_more").css({"visibility": "hidden"});
            $("#read_more").css({"display": "none"});
            $("#show_less").css({"visibility": "visible"});
            // $("#show_less").css({"float" : "right", "margin-right" : "5%","visibility": "visible"});

         });      
         $('#show_less').on('click', function () 
         {
            $("#more_text").css({"display": "none"});
            $("#read_more").css({"visibility": "visible"});
            $("#read_more").css({"display": "inline"});
            $("#show_less").css({"visibility": "hidden"});
         });
        
            var scroll = $(document).scrollTop();
            var navHeight = $('.nav_area').outerHeight();
            $(window).scroll(function(){
                var scrolled = $(document).scrollTop();
                if(scrolled > navHeight)
                {
                    $('.nav_area').addClass('animate');
                }
                else
                {
                    $('.nav_area').removeClass('animate');
                }

                if(scrolled > scroll)
                {

                    $('.nav_area').removeClass('sticky');
                }
                else
                {
                    $('.nav_area').addClass('sticky');
                }

                scroll = $(document).scrollTop();
            });

            function openNav() {
                document.getElementById("sidebar").style.width = "100%";
              }
              
            function closeNav() {
                document.getElementById("sidebar").style.width = "0";
              }

        const faders = document.querySelectorAll('.fade_in');
        const appear_op = {};
        const appear_on_scroll = new IntersectionObserver(function(
            entries, 
            appear_on_scroll
            ){
                entries.forEach(entry => {
                    if(!entry.isIntersecting)
                    {
                        return;
                    }
                    else
                    {
                        entry.target.classList.add('appear');
                        appear_on_scroll.unobserver(entry.target);
                    }
                })

            }, appear_op);
            faders.forEach(fader => 
                {
                    appear_on_scroll.observe(fader);
                })
    });
