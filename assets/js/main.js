$( document ).ready(function(){
    $('.cyb-title').show().addClass('animated-slow bounceInDown');
    window.setTimeout(function(){
        $('.cyb-main-avatar').show().addClass('animated-slow bounceInDown');
        $('.cyb-button').show().addClass('animated-slow bounceInDown');

    },1000);
});

$('.cyb-button').click(function(){
    changePosition('.cyb-main-background','-1500px','768px',3000);
    $('.cyb-tree').hide();
    $('.cyb-title').hide();
    $('.cyb-main-avatar').animate({
        'marginLeft': '100px'
    },3000,function(){
        $('.cyb-second-form').show();
        $('.cyb-need-animate-down').addClass('animated-slow bounceInDown');
        window.setTimeout(function() {
            questionManager.beginNewQuiz(2, true, function () {
                changePosition('.cyb-main-background', '-4300px', '768px', 3000, function () {
                    $('.cyb-main-avatar').animate({
                        'marginLeft': '530px'
                    }, 3000);
                    $('.cyb-office').show();
                    $('.cyb-bag').addClass('animated-slow').addClass('slideFromRight');
                    $('.cyb-table').addClass('animated').addClass('bounceInDown');
                    $('.cyb-bookcase').addClass('animated-slow').addClass('slideFromLeft');
                    $('.cyb-clock').addClass('animated-slow').addClass('win-fade');
                    window.setTimeout(function () {
                        questionManager.beginNewQuiz(2, false, function () {
                            nextFunc();
                        });
                    }, 4000);
                    window.setTimeout(function () {
                        $('.cyb-clock').css('opacity', '1');
                    }, 6000);
                });
                $('.cyb-second-form').hide();
            });
        },5000);
    });
    $('.cyb-button').hide();

});

var nextFunc=function(){
    changePosition('.cyb-main-background','-4300px','768px',3000,function(){
        questionManager.beginNewQuiz(1, true,function(){
           
            $('.cyb-main-avatar').animate({
                'marginLeft': '530px'
            },3000);
            $('.cyb-office').show();
            $('.cyb-bag').addClass('animated-slow').addClass('slideFromRight');
            $('.cyb-table').addClass('animated').addClass('bounceInDown');
            $('.cyb-bookcase').addClass('animated-slow').addClass('slideFromLeft');
            $('.cyb-clock').addClass('animated-slow').addClass('win-fade');
            window.setTimeout(function(){
                $('.cyb-clock').css('opacity','1');
            }, 1000);
        });
    });
    $('.cyb-second-form').hide();
};


$('.cyb-change1').click(function(){
    $('.cyb-bag').hide();
    $('.cyb-table').hide();
    $('.cyb-bookcase').hide();
    $('.cyb-clock').hide();
    changePosition('.cyb-main-background','-6000px','768px',3000,function() {

    })});

var nextFunc1=function(){
    changePosition('.cyb-main-background','-8000px','768px',3000,function() {});

    setTimeout(function(){

        $( ".character2" ).css( "display", "block" );

        $( ".character1" ).css( "display", "block" );
        $( ".character1" ).addClass("animated-slow").addClass("slideFromRight ");
    }, 3000);



    setTimeout(function(){
        smalltoBig('.character2', 313, 439, 5, 10, 1500);
    }, 4000);

    setTimeout(function(){

        $( ".safe" ).css( "display", "block" );
        $( ".safe" ).addClass("animated").addClass("bounceInDown ");
        $( ".safe2" ).css( "display", "block" );
        $( ".safe2" ).addClass("animated").addClass("bounceInDown ");

    }, 5000);

    setTimeout(function(){

        $( ".safe-shadow" ).css( "display", "block" );
        fadeIn(".safe-shadow", 2000)

    }, 5000);

};


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

function changePosition(nameClass,x,y,time,cb){
    $(nameClass).animate({
        'background-position-x': x,
        'background-position-y': y
    }, time,function(){
        if(cb){
            cb();
        }
    });
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

    questionManager.buildQuestion(true);
}
