(function($, Modernizr) {
    $(function() {
        $('.item-article').jcarousel({
            wrap: 'circular',
            transitions: Modernizr.csstransitions ? {
                transforms:   Modernizr.csstransforms,
                transforms3d: Modernizr.csstransforms3d,
                easing:       'ease'
            } : false
        });

        $('.box-control-prev').jcarouselControl({
            target: '-=1'
        });

        $('.box-control-next').jcarouselControl({
            target: '+=1'
        });
    });
})(jQuery, Modernizr);
