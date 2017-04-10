// hamburger menu toggle

// $('html').addClass('menu');
//     $(document).ready(function() {
//       $('menu').show();  // EDIT: Can also use $('html').removeClass('hidden'); 
//     });


$(document).ready(function() {
    $( ".cross" ).hide();
        $( ".menu" ).hide();
            $( ".hamburger" ).click(function() {
                $( ".menu" ).slideToggle( "fast", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
        });
    });
    
    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "fast", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});
