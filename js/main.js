$(function(){
    //gotop
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },800)
    })
    $(window).scroll(function(){
        if($(window).scrollTop() >=200){
            $('.gotop').show()
        }else{
            $('.gotop').hide()
        }
        console.log($(window).scrollTop())
    })
})