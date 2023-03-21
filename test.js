var menu = document.getElementById('Works-Menu');

function openSub(){
    menu.style.height = '9.5em';
    menu.style.transition = 'height 450ms ease-in-out';
}

function closeSub(){
    menu.style.height = '0';
    menu.style.transition = 'height 450ms ease-in-out 500ms';
}