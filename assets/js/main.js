$('.cyb-button').click(function(){
    $('.cyb-main-background').addClass('slideout');
    //setTimeout(function() {
    //    $('.cyb-main-background').css('display', 'none');
    //}, 5000 );
    //$('.cyb-second-background').css('display','block');
    //$('.cyb-second-background').addClass('slidein');

});

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
