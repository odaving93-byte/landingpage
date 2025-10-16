$(function () {
    // menu
    $(".menu").on("mouseenter", function () {
        $(this).css("color", "var(--black-color)");
    },);
    $(".menu").on("mouseleave", function () {
        $(this).css("color", "var(--gray-color)");
    });
    $(".h-menu").on("mouseenter", function () {
        $(this).css("color", "var(--black-color)");
    },);
    $(".h-menu").on("mouseleave", function () {
        $(this).css("color", "var(--gray-color)");
    });
    $(".h-btn").on("click", function () {
        $(".h-menu-on").slideDown(300);
    });
    $(".close-btn").on("click", function () {
        $(".h-menu-on").slideUp(300);
    });
    // card hover
    $(".phone-card").mouseenter(function () {
        $(this).find(".hover").stop().fadeIn(300);
    });
    $(".phone-card").mouseleave(function () {
        $(".hover").stop().fadeOut(300);
    });

});