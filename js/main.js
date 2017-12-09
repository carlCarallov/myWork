
document.body.onload = function(){
    setTimeout(function(){
        var preloader = document.getElementById('pagePreloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
}
new WOW().init();
$('document').ready(function () {
    showTable('all');


});


var timer;
var i = 0;

$('#navMenu').on('click', function(){
    
    if(i == 0){
        $(this).html('<div><p class="a4">&times;</p></div>');
        $('#w_menu').show(1000);
        $('#w_menu').css('z-index', '2');
        i++;
    }else if(i == 1){
       $(this).html('<div><p id="a1">&mdash;</p><p id="a2">&mdash;</p><p id="a3">&mdash;</p></div>');
        $('#w_menu').hide(1000);
        i = 0;
    }
});

function slowScroll(id){
    var pix = 20;
    $('html,body').animate({
        scrollTop:$(id).offset().top + pix,
    },700);
    i = 0;
    $('#w_menu').hide(1000);
    $('#navMenu').html('<div><p id="a1">&mdash;</p><p id="a2">&mdash;</p><p id="a3">&mdash;</p></div>');
    return false;
}

document.getElementById('nav').onclick = function (event) {
    var indef1 = event.target.className;
    showTable(indef1);
}

function showTable(indef) {
    $.getJSON('table.json', function (data) {
        var dropName ='';
        var out = '';
        if (indef == 'all') {
            for (var key in data) {
                dropName = data[key].name;
                out += '<div class="imgWin"><img  src="' + data[key].imgMin + '" class="imgWork">';
                out += '<div class="dropWin"> <p class="nameWork">' + data[key].name + '</p>';
                out += '<button class="'+dropName+'" id="present">Посмотреть</button>';
                out += '</div>';
                out += '</div>';

            }
        } else {

            for (var key in data) {
                if (data[key].type == indef) {
                     dropName = data[key].name;
                    out += '<div class="imgWin"><img  src="' + data[key].imgMin + '" class="imgWork">';
                    out += '<div class="dropWin"> <p class="nameWork">' + dropName + '</p>';
                    out += '<button class="' +dropName+ '" id="present">Посмотреть</button>';
                    out += '</div>';
                    out += '</div>';
                }
            }


        }
        
        $('#portfolioTabl').html(out);
//        $('.imgWin').hover(imgEnter,imgLeave);
        $('#present').on('click',function(event){
            $('#navMenu').hide();
            $('.closeF').show();
            $('#fullShow').show(1000);
            var outF = '', key1 = '';
            var btName = $(event.target).className;
            for (key1 in data){
                if(data[key1].name == btName){
                outF += '<img src="'+data[key1].img+'">';
                outF += '<p>'+data[key1].title+'</p>';
                }
                key1 = '';
            }
            $('#fullShow').html(outF);
        });
    });
}



//function imgEnter(){
//   $(this).children('.dropWin').show(1000);
//}
//function imgLeave(){
//    $(this).children('.dropWin').hide(500);
//}
$('.closeF').on('click', function(){
    $('#fullShow').hide(1000);
    $('#navMenu').show();
    $(this).hide();
});

