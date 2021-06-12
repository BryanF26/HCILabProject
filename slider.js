$(document).ready(function(){
    $('.next').on('click', function(){
        let currentImg = $('.active');
        let nextImg = currentImg.next();
        let firstImg = currentImg.prevAll().last();
        
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } else{
            currentImg.removeClass('active').css('z-index', -10);
            firstImg.addClass('active').css('z-index', 10);
        }
    });


    $('.prev').on('click', function(){
        let currentImg = $('.active');
        let prevImg = currentImg.prev();
        
        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }else{
            currentImg.removeClass('active').css('z-index', -10);
            firstImg.addClass('active').css('z-index', 10);
        }
    });

});