imageZoomed = false;
var w = window.innerWidth;

$(window).resize(function(){

    w = $(window).width();

    if(w <= 600 && imageZoomed == false){
        $(".day-pic").css('width', '40%');
        $(".poster-pic").css('width', '90%');
        $(".project-pic").css('width', '40%');
    } else if(w >= 601 && imageZoomed == false){
        $(".day-pic").css('width', '20%');
        $(".poster-pic").css('width', '25%');
        $(".project-pic").css('width', '25%');
    }


});

$(".day-pic").click(function(){

    if (imageZoomed == false){
        $(this).addClass("Image-Zoom");
        $(this).css('width', '40%');
        imageZoomed = true;

        $("#Image-Safety").css('display', 'block');

        if(w <= 600){
            $(this).css('width', '70%');
        };

    } else {
            $(this).removeClass("Image-Zoom");
            $(this).css('width', '20%');
            imageZoomed = false;

            $("#Image-Safety").css('display', 'none');

        if(w <= 600){
            $(this).css('width', '40%');
        }
    };

});

$(".poster-pic").click(function(){

    if (imageZoomed == false){
        $(this).addClass("Image-Zoom");
        imageZoomed = true;

        $("#Image-Safety").css('display', 'block');

    if(w <= 600){
        $(this).css('width', '100%');
    } else if(w >= 601){
        $(this).css('width', '40%')
    };

    } else {
            $(this).removeClass("Image-Zoom");
            imageZoomed = false;

            $("#Image-Safety").css('display', 'none');

        if(w <= 600){
            $(this).css('width', '90%');
        } else if(w >= 601){
            $(this).css('width', '25%')
        };

    };

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
            $(this).css('width', '25%');
            imageZoomed = false;

            $("#Image-Safety").css('display', 'none');

        if(w <= 600){
            $(this).css('width', '40%');
        }
    }

});

$("#Image-Safety").click(function(){
    $(".day-pic").removeClass("Image-Zoom");
    $(".poster-pic").removeClass("Image-Zoom");
    $(".project-pic").removeClass("Image-Zoom");
    imageZoomed = false;

    $("#Image-Safety").css('display', 'none');

    if(w <= 600){
        $(".day-pic").css('width', '40%');
        $(".poster-pic").css('width', '90%');
        $(".project-pic").css('width', '40%');
    } else if(w >= 601){
        $(".day-pic").css('width', '20%');
        $(".poster-pic").css('width', '25%');
        $(".project-pic").css('width', '25%');
    };

});