var characterMenu = $(".Character");
var characterImage = $(".Character-image");
var characterWriting = $(".Character-writing");

$(characterMenu).mouseenter(function(){
    $(this).css('width', '110%');
    $(this).css('transition', 'all 2s');
});

$(characterMenu).mouseleave(function(){
    $(this).css('width', '100%');
    $(this).css('transition', 'all 2s');
});