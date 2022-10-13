 $(document).ready(function (){
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in'
    });

    $('.popup-with-move-anim').magnificPopup({
      type: 'inline',

      fixedContentPos: false,
      fixedBgPos: true,

      overflowY: 'auto',

      closeBtnInside: true,
      preloader: false,

      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-slide-bottom'
    });
  });


   $(function () {
    $('.navbar-toggler').click(function () {
      $('body').toggleClass('noscroll');
    })
  });

   
  $(document).ready(function () {

    $(".filter-button").click(function () {
      var value = $(this).attr('data-filter');

      if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
      } else {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');

      }
    });

  });



        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("movetop").style.display = "block";
            } else {
                document.getElementById("movetop").style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    
        $(function () {
            $('.navbar-toggler').click(function () {
                $('body').toggleClass('noscroll');
            })
        });
    


        $(document).ready(function()
        {
          $(".audio").click(function()
          { 
            if($(this).text()==" Voice Note")
            { $(this).text('Hide Voice Note'); }
            else{$(this).text('Voice Note');}
            });
            $(".solution").click(function()
          { 
            if($(this).text()=="View Solution")
            { $(this).text('Hide Solution'); }
            else{$(this).text('View Solution');}
            });

          $(".textExplanation").click(function()
          {
            $(this).next().toggle();
            if($(this).text()=="Hide text Explanation")
            {
              $(this).text('ShowText Explanation');
            }
            else
              {
                $(this).text('Hide text Explanation');
              }
          });
        }) ; 
        
        function display() {
    document.getElementById('secretFact').style.display="block"
  }
  