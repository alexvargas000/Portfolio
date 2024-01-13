var darkModeOn = false;

$("#dark-mode-button").click(function(){

    if(darkModeOn == false){
        $("*").css('transition', 'all .5s');
        $("*").css('background-color', '#0e0c1c');
        $("a, li, h1, #Header-Links, #Headings").css('background-color', 'transparent');
        $("p, h1, a, h2, button, li").css('opacity', '50%');
        darkModeOn = true;
        $('#dark-mode-button').html('Turn Lights On');
    } else {
        $("*").css('background-color', '#1f283a');
        $("a, li, h1, #Header-Links, #Headings").css('background-color', 'transparent');
        $("p, h1, a, h2, button, li").css('opacity', '100%');
        darkModeOn = false;
        $('#dark-mode-button').html('Turn Lights Off');
    };

});