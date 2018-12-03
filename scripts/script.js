// executes when HTML-Document is loaded and DOM is ready


/*
################
Add navbar background color when scrolled
*/
$(window).scroll(function () {
    if ($(window).scrollTop() > 30) {
        $(".navbar").addClass("NavbarBg");
    } else {
        $(".navbar").removeClass("NavbarBg");
    }
});
// If Mobile, add background color when toggler is clicked
$(".navbar-toggler").click(function () {
    if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("NavbarBg");
    } else {
        if ($(window).scrollTop() < 56) {
            $(".navbar").removeClass("NavbarBg");
        } else {
        }
    }
});

//Preloader
var preloader = $('.preloader');
$(window).on('load', function () {
    var preloaderFadeOutTime = 500;

    function hidePreloader() {
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

// Project classification
$(function () {
    var selectedClass = "";
    $("li.list-inline-item").on('click', function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(100, 0.1);
        $("#portfolio>div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(300, 1);
        }, 300);
    });
});