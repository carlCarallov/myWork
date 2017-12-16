document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('pagePreloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000);
}
new WOW().init();

$('document').ready(function () {
    showTable('all');


});





//function navMenuShow() {
//    var menu_width = 1340;
//    var menu_height = 768;
//    var menu = document.getElementById('w_menu');
//    var pix = 0;
//    menu.style.width = 10 + 'px';
//    menu.style.height = 10 + 'px';
//    menu.style.display = 'block';
//    var timer_show = setInterval(function () {
//        if (menu_width > pix) {
//            pix += 50;
//            menu.style.width = pix + 'px';
//            menu.style.height = pix + 'px';
//        } else {
//            menu.style.width = menu_width + 'px';
//            menu.style.height = menu_height + 'px';
//        }
//    }, 20);
//    setTimeout(function () {
//        clearInterval(timer_show);
//    }, 3000);
//
//}
//
//function navMenuHide() {
//    var menu = document.getElementById('w_menu');
//    var menu_width = 1340,
//        menu_height = 768;
//    var pix = 10,
//        pix_w = 30;
//    var timer_hide = setInterval(function () {
//        if (menu_height != 10) {
//            menu_width -= pix_w;
//            menu_height -= pix;
//            menu.style.width = menu_width + 'px';
//            menu.style.height = menu_height + 'px';
//        } else {
//            menu.style.width = 10 + 'px';
//            menu.stye.height = 10 + 'px';
//        }
//    }, 20);
//    setTimeout(function () {
//        clearInterval(timer_hide);
//        menu.style.display = 'none';
//    }, 2000);
//
//}

function animateCross() {
    var crossLeft = document.getElementById('a3');
    var crossRight = document.getElementById('a1');
    var crossCenter = document.getElementById('a2');
    if (!crossLeft.classList.contains('crossInLeft')) {
        crossLeft.classList.remove('crossOutLeft');
            crossRight.classList.remove('crossOutRight');
            crossCenter.classList.remove('crossOutCenter');
        
        crossLeft.classList.add('crossInLeft');
        crossRight.classList.add('crossInRight');
        crossCenter.classList.add('crossInCenter');
        setTimeout(function () {
           crossLeft.style.transform = 'translate(34%,-12%) rotate(45deg)';
            crossRight.style.transform = 'translate(-41%,92%) rotate(-45deg)';
            crossCenter.style.opacity = '0';
        }, 700);
    } else if (crossLeft.classList.contains('crossInLeft')) {
         crossLeft.classList.remove('crossInLeft');
            crossRight.classList.remove('crossInRight');
            crossCenter.classList.remove('crossInCenter');
        
        crossCenter.classList.add('crossOutCenter');
        crossLeft.classList.add('crossOutLeft');
        crossRight.classList.add('crossOutRight');
        setTimeout(function () {
            crossCenter.style.opacity = '1';
            crossLeft.style.transform = 'translate(0%,95%) rotate(0deg)';
            crossRight.style.transform = 'translate(0%,85%) rotate(0deg)';
        }, 700);
    }
}

//document.getElementById('navMenu').onclick = function () {
//
//    if (i == 0) {
//        navMenuShow();
//        animateCross();
//        i = 1;
//    } else if (i == 1) {
//        navMenuHide();
//        animateCross();
//        i = 0;
//    }
//
//}
var i = 0;

    $('#navMenu').on('click', function () {

    if (i == 0) {
        animateCross();
        $('#w_menu').show(1000);
        $('#w_menu').css('z-index', '2');
        i++;
    } else if (i == 1) {
        animateCross();
        $('#w_menu').hide(1000);
        i = 0;
    }
});
    


var id, timer, elem_offset, y;

function scrollToElem(id) {
    var elem = document.querySelector(id);
    elem_offset = elem.offsetTop;
    y = window.pageYOffset;
    if (y > elem_offset) {
        slowScrollTop();
    
    } else if (y < elem_offset) {
        slowScrollDown();
    }


}

function slowScrollTop() {
    if (window.pageYOffset > elem_offset) {
        window.scrollTo(0, y);
        y -= 50;
        timer = setTimeout(slowScrollTop, 20)
    } else {
        clearTimeout(timer);
        window.scrollTo(0, elem_offset);
       
    }
}

function slowScrollDown() {
    if (window.pageYOffset < elem_offset) {
        window.scrollTo(0, y);
        y += 50;
        timer = setTimeout(slowScrollDown, 20);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, elem_offset);
      
    }
}

//function slowScroll(id){
//    var pix = 20;
//    $('html,body').animate({
//        scrollTop:$(id).offset().top + pix,
//    },700);
//    i = 0;
//    $('#w_menu').hide(1000);
//    $('#navMenu').html('<div><p id="a1">&mdash;</p><p id="a2">&mdash;</p><p id="a3">&mdash;</p></div>');
//    return false;
//}

document.getElementById('nav').onclick = function (event) {
    var indef1 = event.target.className;
    showTable(indef1);
}

function showTable(indef) {
    $.getJSON('table.json', function (data) {
        var dropName = '';
        var out = '';
        if (indef == 'all') {
            for (var key in data) {
                dropName = data[key].name;
                out += '<div class="imgWin"><img  src="' + data[key].imgMin + '" class="imgWork">';
                out += '<div class="dropWin"> <p class="nameWork">' + data[key].name + '</p>';
                out += '<button class="' + dropName + '" id="present">Посмотреть</button>';
                out += '</div>';
                out += '</div>';

            }
        } else {

            for (var key in data) {
                if (data[key].type == indef) {
                    dropName = data[key].name;
                    out += '<div class="imgWin"><img  src="' + data[key].imgMin + '" class="imgWork">';
                    out += '<div class="dropWin"> <p class="nameWork">' + dropName + '</p>';
                    out += '<button class="' + dropName + '" id="present">Посмотреть</button>';
                    out += '</div>';
                    out += '</div>';
                }
            }

            
        }
$('#portfolioTabl').html(out);
       
        //        $('.imgWin').hover(imgEnter,imgLeave);
        $('#present').on('click', function (event) {
            $('#navMenu').hide();
            $('.closeF').show();
            $('#fullShow').show(1000);
            var outF = '',
                key1 = '';
            var btName = $(event.target).className;
            for (key1 in data) {
                if (data[key1].name == btName) {
                    outF += '<img src="' + data[key1].img + '">';
                    outF += '<p>' + data[key1].title + '</p>';
                }
                
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
//$('.closeF').on('click', function () {
//    $('#fullShow').hide(1000);
//    $('#navMenu').show();
//    $(this).hide();
//});
