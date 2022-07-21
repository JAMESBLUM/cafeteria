$(document).ready(function(){
    $(window).scroll(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 800){
            var scroll = $(window).scrollTop(); //Detecta el evento del escroll de arriba
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 +'%)'
            });
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 +'%)'
            });
        }
    })
    //Regresa la posición del article cuando se detecta un cambio de tamaño en un dispositivo
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)' //Posición original del article
            });
        }
    });
});