$(function() {
    var homeH = $( window ).height(),
        navPanels = $();

    $('#navbar a').each(function() {
        navPanels = navPanels.add($(this.hash));    // easy array of nav panels according to nav items
    });

    $( window ).scroll(function() {
        // toggle top menu
        if ( $( window ).scrollTop() < homeH/2) {
            $("#navbar ul li").removeClass("sel");
            $("#navbar").css("top", ($('#navbar').outerHeight()*-1));
        } 
        else {
            $("#navbar").css("top", "0");
        };

        // toggle top menu selection
        navPanels.each(function() {
            var $p = $(this)    // current panel in loop

            if ( $( window ).scrollTop() + $('#navbar').outerHeight() >= $p.offset().top) { 
                $("#navbar ul li").removeClass("sel");
                $('#navbar a').filter('[href="#'+$p.attr('id')+'"]').parent().addClass("sel");
            }
        });
    });

    // animating anchor link scrolling
    // snippet from css-tricks 
    // css-tricks.com/snippets/jquery/smooth-scrolling
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-$('#navbar').outerHeight()
                }, 700);
                return false;
            }
        }
    });
});