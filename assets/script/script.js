$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons

        slideSpeed : 300,
        paginationSpeed : 400,
        navigationText : false,
        responsive : true,

        items : 3, 
        itemsDesktop : false,
        itemsDesktopSmall : false,

    });

    console.log("hello");

});