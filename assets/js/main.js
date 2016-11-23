$('.cyb-button').click(function(){
   /* $('.cyb-main-background').addClass('slideout');*/
    //setTimeout(function() {
    //    $('.cyb-main-background').css('display', 'none');
    //}, 5000 );
    //$('.cyb-second-background').css('display','block');
    //$('.cyb-second-background').addClass('slidein');
    changePosition('.cyb-main-background','-1637','768px',3000);
    /*$('.cyb-main-background').animate({
        'position-x': '-1637px',
        'position-y': '768'
    }, 3000, 'linear');*/
    ('.cyb-tree').Hide();
});


function changePosition(nameClass,x,y,time){
    $(nameClass).animate({
        'background-position-x': x,
        'background-position-y': y
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
