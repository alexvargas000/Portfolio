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