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
        setTimeout(function(){
            $('.cyb-collage').css( "display", "block" );
            $('.cyb-collage').addClass('animated').addClass('slideFromRight');
			$('.school-title').css( "display", "block" );
			$('.school-title').addClass('animated').addClass('bounceInDown');

        }, 200);
        setTimeout(function(){
            $(".cyb-book7").css( "display", "block" );
            $('.cyb-book7').addClass('animated').addClass('bounceInDown');
        }, 800);
        setTimeout(function(){
            $(".cyb-book6").css( "display", "block" );
            $('.cyb-book6').addClass('animated').addClass('bounceInDown');
        }, 1000);
        setTimeout(function(){
            $(".cyb-book5").css( "display", "block" );
            $('.cyb-book5').addClass('animated').addClass('bounceInDown');
        }, 1200);
        setTimeout(function(){
            $(".cyb-book4").css( "display", "block" );
            $('.cyb-book4').addClass('animated').addClass('bounceInDown');
            $(".cyb-safeshadow").css( "display", "block" );
            window.setTimeout(function(){
                $('.cyb-safeshadow').css('opacity','0.5');
            }, 400);
        }, 1400);
        setTimeout(function(){
            $(".cyb-book3").css( "display", "block" );
            $('.cyb-book3').addClass('animated').addClass('bounceInDown');
        }, 1600);
        setTimeout(function(){
            $(".cyb-book2").css( "display", "block" );
            $('.cyb-book2').addClass('animated').addClass('bounceInDown');
        }, 1800);
        setTimeout(function(){
            $(".cyb-book1").css( "display", "block" );
            $('.cyb-book1').addClass('animated').addClass('bounceInDown');
        }, 2000);

        setTimeout(function(){
            $('.cyb-hat').css( "display", "block" );
            $('.cyb-hat').addClass('animated').addClass('bounceInDown');
        }, 2400);
    });
    $('.cyb-button').hide();
    window.setTimeout(function() {
        questionManager.beginNewQuiz(2, true,false, function () {
            $('.cyb-main-avatar').animate({
                'marginLeft': '530px'
            }, 4000);
            changePosition('.cyb-main-background', '-4300px', '768px', 3000, function () {
                $('.cyb-collage').hide();
                $('.cyb-safeshadow').hide();
                $('.cyb-book7').hide();
                $('.cyb-book6').hide();
                $('.cyb-book5').hide();
                $('.cyb-book4').hide();
                $('.cyb-book3').hide();
                $('.cyb-book2').hide();
                $('.cyb-book1').hide();
                $('.cyb-hat').hide();
				$('.school-title').hide();
                $('.cyb-main-avatar').animate({
                    'marginLeft': '530px'
                },1000);
                setTimeout(function(){
					$('.office-title').css( "display", "block" );
					$('.office-title').addClass('animated').addClass('bounceInDown');
                    $('.cyb-table').css( "display", "block" );
                    $('.cyb-table').addClass('animated-slow').addClass('bounceInUp');
                }, 1000);

                setTimeout(function(){
                    $('.cyb-bookcase').css( "display", "block" );
                    $('.cyb-bookcase').addClass('animated-slow').addClass('bounceInDown');
                }, 1400);
                setTimeout(function(){
                    $('.cyb-bag').css( "display", "block" );
                    $('.cyb-bag').addClass('animated-slow').addClass('slideFromRight');
                }, 1800);

                setTimeout(function(){
                    $('.cyb-clock').css( "display", "block" );
                    $('.cyb-clock').addClass('animated-slow').addClass('win-fade');
                    window.setTimeout(function(){
                        $('.cyb-clock').css('opacity','1');
                    }, 1000);
                }, 3000);
            });
            $('.cyb-second-form').hide();
            window.setTimeout(function () {
                questionManager.beginNewQuiz(2, false,false, function () {
                    func1();
                });
            }, 6000);
            $('.cyb-second-form').hide();
        });
    },7000);

});

var func1=function(){
    $('.cyb-bag').hide();
    $('.cyb-table').hide();
    $('.cyb-bookcase').hide();
    $('.cyb-clock').hide();
	$('.office-title').hide();
    changePosition('.cyb-main-background','-6000px','768px',3000,function() {
        window.setTimeout(function () {
            questionManager.beginNewQuiz(1, true,true, function () {
                nextFunc1();
            });
        }, 2000);
    });

    setTimeout(function(){
        $( ".cyb-hero-party" ).css( "display", "block" );
        fadeIn(".cyb-hero-party", 2000);
    }, 2000);

    setTimeout(function(){
		$('.party-title').css( "display", "block" );
		$('.party-title').addClass('animated').addClass('bounceInDown');
        $( ".cyb-glass" ).css( "display", "block" );
        $( ".cyb-glass" ).addClass("animated-slow").addClass("bounceInDown ");

    }, 2000);
    setTimeout(function(){
        $( ".cyb-crystal-ball" ).css( "display", "block" );
        $( ".cyb-crystal-ball" ).addClass("animated-slow").addClass("bounceInDown ");
    }, 2700);



};

var nextFunc1=function(){
    changePosition('.cyb-main-background','-8000px','768px',3000,function() {});
    $('.party-title').hide();
	$( ".cyb-crystal-ball").hide();
    $( ".cyb-glass" ).hide();
    $( ".cyb-hero-party").hide();
    $( ".cyb-party" ).css( "display", "none" );
    setTimeout(function(){

		$( ".finish-title").css( "display", "block" );
		$( ".finish-title").addClass("animated-slow").addClass("bounceInDown");
        $( ".character2" ).css( "display", "block" );

        $( ".character1" ).css( "display", "block" );
        $( ".character1" ).addClass("animated-slow").addClass("slideFromRight");
    }, 3000);

    setTimeout(function(){
        smalltoBig('.character2', 313, 439, 5, 10, 1500);
    }, 4000);

    setTimeout(function(){

        $( ".safe" ).css( "display", "block" );
        $( ".safe" ).addClass("animated").addClass("bounceInDown ");
        $( ".safe2" ).css( "display", "block" );
        $( ".safe2" ).addClass("animated").addClass("bounceInDown ");

        $( ".safe-door-rotate" ).css( "display", "block" );
    }, 5000);

    setTimeout(function(){

        $( ".safe-shadow" ).css( "display", "block" );
        fadeIn(".safe-shadow", 2000)

    }, 5000);

    setTimeout(function(){

        openSafe(".safe", 0, 2000)

    }, 6000);

};


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

function openSafe(nameClass,x,time){
    $(nameClass).animate({
        'width': x
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
