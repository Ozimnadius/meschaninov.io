//books.js
$(function () {

    $('.jsMenuTrigger').on('click', function (e){
        e.preventDefault();
        e.stopPropagation();

        let $this = $(this),
            $link = $this.closest('.menu__link'),
            $submenu =  $link.next(),
            $links = $('.menu__link').not($link),
            $submenus = $('.submenu').not($submenu);

        $links.removeClass('active');
        $submenus.slideUp(300).removeClass('active');
        $submenu.slideToggle(300);
        $link.toggleClass('active');

    });

});


window.onload = function (e){
    let $sub = $('.jsAddLetter');
    $sub.attr('data-letter',$sub.text().substr(0,1));
};