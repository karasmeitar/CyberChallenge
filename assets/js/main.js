$('.cyb-button').click(function(){
    changePosition('.cyb-main-background','-1500px','768px',3000);
    $('.cyb-tree').hide();
    $('.cyb-main-avatar').animate({
        'marginLeft': '100px'
    },3000);
    $('.cyb-button').hide();
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
