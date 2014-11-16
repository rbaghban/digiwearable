$(document).ready(function() {

    var sub_nav_header_links = $('#sub_header_links > a');
    var $root = $('html, body');

    $(sub_nav_header_links).click(function() {
        $root.animate({
            scrollTop: $($(this).attr('href')).offset().top - 72
        }, 500);
        return false;
    });

    // -------------------------- SUB HEADER JS
    var sh = $("#sub_header");
    shs = "sub_header_scrolled"
    fpw = $("#section1").height() + 72;

    $(window).scroll(function() {
        if ($(this).scrollTop() > fpw) {
            sh.addClass(shs);
            $('#section2').css('marginTop', '72px');
        } else {
            sh.removeClass(shs);
            $('#section2').css('marginTop', '0');
        }
    });
});