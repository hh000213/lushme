$(function(){
    // alert('hello?')
    // hamburger를 click했을 때, gnb에게 class 'on' 부여
    $('.hamburger').click(function(){
        $('.gnb').addClass('on')
    })

    // btn-close를 click했을 때, gnb의 class 'on' 제거
    $('.btn-close').click(function(){
        $('.gnb').removeClass('on')
    })

    // Home에 hover했을 때, ul.home_cont가 scroll
    $('li.home').mouseenter(function(){
        $(this).stop().animate({
            height : '18rem'
        },1000)
    })
    $('li.home').mouseleave(function(){
        $(this).stop().animate({
            height : '3.75rem'
        },1000)
    })


//scroll 됐을 때, header에 색부여
    let pot = $('.header-container').offset().top
    
    $(window).resize(function(){
        pot = $('.header-container').offset().top
    })
    $(window).scroll(function(){
        let scrolled = $(window).scrollTop()>pot
        $('.header-container').toggleClass('down',scrolled)
    })

})