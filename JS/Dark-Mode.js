var darkModeOn = false;

$("#dark-mode-button").click(function(){

    if(darkModeOn == false){
        $("*").css('background-color', '#0e0c1c');
        $("*").css('transition', 'all 1s');
        $("#Headings").css('background-color', 'transparent');
        $("#Header-Links").css('background-color', 'transparent');
        $("li").css('background-color', 'transparent');
        $("a").css('background-color', 'transparent');
        $("p, h1, a, h2, button, li").css('opacity', '50%');
        darkModeOn = true;
        $('#dark-mode-button').html('Turn Lights On');
    } else {
        $("*").css('background-color', '#1f283a');
        $("#Headings").css('background-color', 'transparent');
        $("#Header-Links").css('background-color', 'transparent');
        $("li").css('background-color', 'transparent');
        $("a").css('background-color', 'transparent');
        $("p, h1, a, h2, button, li").css('opacity', '100%');
        darkModeOn = false;
        $('#dark-mode-button').html('Turn Lights Off');
    };

});