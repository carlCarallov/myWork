$('document').ready(function () {
    showTable('all');

});


var timer;
var i = 0;

var bt = document.getElementById('navMenu');
bt.onclick = function () {
    var menu = document.getElementById('w_menu');
    if (i == 0) {
       this.innerHTML = '<div><p class="a4">&times;</p></div>';
        menu.style.zIndex = '2';
        menu.style.display = 'block';
        i++;
    } else {
        this.innerHTML = '<div><p id="a1">&mdash;</p><p id="a2">&mdash;</p><p id="a3">&mdash;</p></div>';
        menu.style.display = 'none';
        i = 0;
    }


}

 document.getElementById('w_menu').onclick = function (event) {
    
    if (event.target.className == 'page_prew') {
        var pixY = window.pageYOffset;
        var stopY = 0;
        if (pixY > stopY) {
            scrollToUp(stopY, pixY);
        } else {
            scrollToDown(stopY, pixY);
        }
    } else if (event.target.className == 'page_myStory') {
         var pixY = window.pageYOffset;
        var stopY = 828;
        if (pixY > stopY) {
            scrollToUp(stopY, pixY);
        } else {
            scrollToDown(stopY, pixY);
        }
    } else if (event.target.className == 'page_portfolio') {
         var pixY = window.pageYOffset;
        var stopY = 1530;
        //1530, 2530, 3295
        if (pixY > stopY) {
            scrollToUp(stopY, pixY);
        } else {
            scrollToDown(stopY, pixY);
        }
    } else if (event.target.className == 'page_resume') {
         var pixY = window.pageYOffset;
        var stopY = 2530;
        if (pixY > stopY) {
            scrollToUp(stopY, pixY);
        } else {
            scrollToDown(stopY, pixY);
        }
    } else if (event.target.className == 'page_contacts') {
         var pixY = window.pageYOffset;
        var stopY = 3295;
        if (pixY > stopY) {
            scrollToUp(stopY, pixY);
        } else {
            scrollToDown(stopY, pixY);
        }
    }
}




function scrollToUp(stopUp, pix) {
    if (pix > stopUp) {
        window.scrollTo(0, pix);
        pix -= 100;
        timer = setTimeout(scrollToUp, 100);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, stopUp);
    }
}

function scrollToDown(stopDown, pix) {
    if (pix > stopDown) {
        window.scrollTo(0, pix);
        pix += 100;
        timer = setTimeout(scrollToDown, 100);
    } else {
        clearTimeout(timer);
        window.scrollTo(0, stopDown);
    }
}
//$('.nav').on('click', function(event){
//    var indef = event.target.className;
//    showTable(indef);
//});
document.getElementById('nav').onclick = function (event) {
    showTable(event.target.className);
}


function showTable(indef) {
    $.getJSON('table.json', function (data) {
        var out = '';
        if (indef == 'all') {
            for (var i in data) {
                out += '<div class="imgWin"><img  src="' + data[i].imgMin + '" class="imgWork">';
                out += '<div class="dropWin"> <p class="nameWork">' + data[i].name + '</p>';
                out += '<button id="present">Посмотреть</button>';
                out += '<p class="titleWorkMin">' + data[i].title_min + '</p></div>';
                out += '</div>';

            }
        } else {

            for (var i in data) {
                if (data[i]['type'] == indef) {
                    out += '<div class="imgWin"><img  src="' + data[i].imgMin + '" class="imgWork">';
                    out += '<div class="dropWin"> <p class="nameWork">' + data[i].name + '</p>';
                    out += '<button class="'+data[i].name+'" id="present">Посмотреть</button>';
                    out += '<p class="titleWorkMin">' + data[i].title_min + '</p></div>';
                    out += '</div>';
                }
            }


        }

        $('#portfolioTabl').html(out);
//        $('button#present').on('click', fullShow);
    });
}

//function fullShow(event){
//var tragetObj = document.getElementsByClassName('dropWin');
//    if(event.target.)
//}
