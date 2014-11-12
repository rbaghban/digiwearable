$(document).ready(function() {

    var sub_nav_header_links = $('#sub_header_links > a');
    var $root = $('html, body');

    $(sub_nav_header_links).click(function() {
        $root.animate({
            scrollTop: $($(this).attr('href')).offset().top - 72
        }, 500);
        return false;
    });

});