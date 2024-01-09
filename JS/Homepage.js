menuItem = $(".Menu-item");

$(menuItem).mouseenter(function(){

    $(this).css('width', '26em');
});

$(menuItem).mouseleave(function(){

    $(this).css('width', '25em');
});

$('#Bloopers').mouseenter(function(){

    $(this).css('width', '52em');
});

$("#Bloopers").mouseleave(function(){

    $(this).css('width', '50em');
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
        $("#Mobile-Menu").css('left', '9.5em');
        $("#Menu-Button").addClass("Open-Mobile-Menu");
        $("#Menu-Button").removeClass("Close-Mobile-Menu");
        menuOn = false;
    }
});