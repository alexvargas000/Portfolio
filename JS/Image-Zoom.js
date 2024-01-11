imageZoomed = false;
var w = window.innerWidth;

$(window).resize(function(){

    w = $(window).width();

    if(w <= 600){
        $("img").css('width', '45%');
    } else if(w >= 601){
        $("img").css('width', '25%');
    }


});

$("img").click(function(){

    if (imageZoomed == false){
        $(this).addClass("Image-Zoom");
        $(this).css('width', '40%');
        imageZoomed = true;

        $("#Image-Safety").css('display', 'block');

    if(w <= 600){
        $(this).css('width', '70%');
    }

    } else {
            $(this).removeClass("Image-Zoom");
            $(this).css('width', '25%');
            imageZoomed = false;

            $("#Image-Safety").css('display', 'none');

        if(w <= 600){
            $(this).css('width', '40%');
        }
    }

});

$("#Image-Safety").click(function(){
    $("img").removeClass("Image-Zoom");
    $("img").css('width', '25%');
    imageZoomed = false;

    $("#Image-Safety").css('display', 'none');

    if(w <= 600){
        $("img").css('width', '40%');
    }

});