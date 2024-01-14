imageZoomed = false;
var w = window.innerWidth;

$(window).resize(function(){

    w = $(window).width();

    if(w <= 600){
        $(".project-pic").css('width', '40%');
    } else if(w >= 601){
        $(".project-pic").css('width', '20%');
    }


});

$(".project-pic").click(function(){

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
            $(this).css('width', '20%');
            imageZoomed = false;

            $("#Image-Safety").css('display', 'none');

        if(w <= 600){
            $(this).css('width', '40%');
        }
    }

});

$("#Image-Safety").click(function(){
    $(".project-pic").removeClass("Image-Zoom");
    $(".project-pic").css('width', '20%');
    imageZoomed = false;

    $("#Image-Safety").css('display', 'none');

    if(w <= 600){
        $(".project-pic").css('width', '40%');
    }

});