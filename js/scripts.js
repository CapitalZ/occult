$(document).ready(function() {

    var navLogoEle = $('#logo-svg');
    var carouselLogoEle = $('#logo-carousel');
    var logoOffset = carouselLogoEle.offset().top;

    console.log(logoOffset);

    $(document).on('scroll', function() {
        if($(window).scrollTop() > logoOffset) {
            navLogoEle.find('#logo-text').addClass('show');
            carouselLogoEle.addClass('hide');
        }
    });
});