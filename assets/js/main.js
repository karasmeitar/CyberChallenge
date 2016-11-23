$('.cyb-button').click(function(){
    $('.cyb-main-background').addClass('slideout');
    //setTimeout(function() {
    //    $('.cyb-main-background').css('display', 'none');
    //}, 5000 );
    //$('.cyb-second-background').css('display','block');
    //$('.cyb-second-background').addClass('slidein');

});

$( document ).ready(function() {

});

$( "#kaftor" ).click(function() {


    $( ".character2" ).css( "display", "block" );

    $( ".character1" ).css( "display", "block" );
    $( ".character1" ).addClass("animated-slow").addClass("slideFromRight ");

    setTimeout(function(){
        smalltoBig('.character2', 313, 439, 5, 10, 1500);
    }, 1000);

    setTimeout(function(){

        $( ".safe" ).css( "display", "block" );
        $( ".safe" ).addClass("animated-slow").addClass("bounceInDown ");
        $( ".safe2" ).css( "display", "block" );
        $( ".safe2" ).addClass("animated-slow").addClass("bounceInDown ");

    }, 2000);

    setTimeout(function(){

        $( ".safe-shadow" ).css( "display", "block" );
        fadeIn(".safe-shadow", 2000)

    }, 2000);

});

function fadeIn(nameClass,time){
    $(nameClass).animate({
        'opacity': 1
    }, time);
}

function smalltoBig(nameClass,x,y,bottom,left,time){
    $(nameClass).animate({
        'width': x,
        'height': y,
        bottom: bottom,
        'margin-left': left
    }, time);
}


function load(show) {
    if (show) {
        document.getElementById('fade').style.display='block';
        document.getElementById('win').style.display='block';
    }
    else {
        document.getElementById('fade').style.display='none';
        document.getElementById('win').style.display='none';
    }

    buildQuestion();
}
