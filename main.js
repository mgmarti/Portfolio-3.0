$(document).ready(function () {
    $('#heroBox').height($(window).height());

    $('.nav-link').click(function() {
        var sectionTo = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(sectionTo).offset().top
        }, 1500);
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("nav").addClass("white");

        } else {
            $("nav").removeClass("white");
        }
    });
});