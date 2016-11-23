$('.cyb-button').click(function(){
    changePosition('.cyb-main-background','-1500px','768px',3000);
    $('.cyb-tree').hide();
    $('.cyb-main-avatar').animate({
        'marginLeft': '100px'
    },3000,function(){
        $('.cyb-second-form').show();
        $('.cyb-need-animate-down').addClass('animated-slow bounceInDown');
        questionManager.resetManager(1);
        questionManager.buildQuestion(true,function(){
            changePosition('.cyb-main-background','-4300px','768px',3000,function(){
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
            $('.cyb-second-form').hide();
        });
    });
    $('.cyb-button').hide();

});

$('.cyb-change').click(function(){
    changePosition('.cyb-main-background','-4300px','768px',3000,function(){
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
    $('.cyb-second-form').hide();
});


$('.cyb-change1').click(function(){
    $('.cyb-bag').hide();
    $('.cyb-table').hide();
    $('.cyb-bookcase').hide();
    $('.cyb-clock').hide();
    changePosition('.cyb-main-background','-6000px','768px',3000,function() {

    })});

$('.cyb-change2').click(function(){
    changePosition('.cyb-main-background','-8000px','768px',3000,function() {
    })});



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
