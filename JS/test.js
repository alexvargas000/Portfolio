var menu = document.getElementById('Works-Menu');

function openSub(){
    var menuWordPosition = document.body.getBoundingClientRect().right - document.getElementById('sub-word').getBoundingClientRect().right;

    menu.style.height = '9.5em';
    menu.style.transition = 'height 450ms ease-in-out';

    menu.style.right = menuWordPosition.right + 'px'; 
    console.log(menuWordPosition.right + 'px')
}

function closeSub(){
    menu.style.height = '0';
    menu.style.transition = 'height 450ms ease-in-out 500ms';
}