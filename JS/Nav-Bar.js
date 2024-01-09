// LOGO TAKES YOU HOME

$("#Logo").click(function(){
    window.open("https://avargas.org/index");
})

// WORKS NAV BAR
var worksNavHover = $("#Nav-Activate");
var worksNav = $("#Header-Nav-Bar");
var worksNavUl = $("#Header-Nav-Bar > ul");

worksNavHover.mouseenter(function(){

    worksNavHover.append(worksNav);
    worksNav.css('display', 'block');
});

worksNavHover.mouseleave(function(){

    worksNavHover.remove(worksNav);
    worksNav.css('display', 'none');

});

// MOBILE MENU

var menuOn = false;

$("#Menu-Button").click(function(){

    if (menuOn == false){
    $("#Mobile-Menu").css('left', '0');
    $("#Menu-Button").removeClass("Open-Mobile-Menu");
    $("#Menu-Button").addClass("Close-Mobile-Menu");
        menuOn = true;
    } else {
        $("#Mobile-Menu").css('left', '11em');
        $("#Menu-Button").addClass("Open-Mobile-Menu");
        $("#Menu-Button").removeClass("Close-Mobile-Menu");
        menuOn = false;
    }
});

var worksMenuOn = false;

$("#Works-Menu-Mobile").click(function(){

    if (worksMenuOn == false){
    $(".Works-Menu-Item").css('display', 'block');
        worksMenuOn = true;
    } else {
        $(".Works-Menu-Item").css('display', 'none');
        worksMenuOn = false;
    }

});