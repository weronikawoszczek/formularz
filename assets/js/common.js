app.common = {
    mainInit: () => {
        let text = 'ES6 is working';
        console.log(text)

        $('.smaller-block').hover(function () {
            $('.smaller-block, .bigger-block').addClass('opposite');
        });

        $('.bigger-block').hover(function () {
            $('.smaller-block, .bigger-block').removeClass('opposite');
        });

        $('.social-media li').click(function () {
            $('.social-media-el').removeClass('active');
            $(this).addClass('active');

            let index = $(this).data("id");
            $('.workspace__social-box').removeClass('active');
            $('.workspace__social-box[data-id="' + index + '"]').addClass('active');
        });

        $('.hamburger-icon, .cross-icon').click(function () {
            $('.cross-icon, .hamburger-icon, .menu').toggleClass('active');
            $(this).removeClass('active');
        });

        $('.workspace__slider').slick({
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: true,
        });

        $('.slick-prev').html('<img src="dist/assets/img/prev.png" />');
        $('.slick-next').html('<img src="dist/assets/img/next.png" />');

    }
}

$(function () {
    $(document).ready(() => {
        app.common.mainInit();

    })
});
