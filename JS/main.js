const daysImages = ['Assets/All 100 Days Finals/Day 29 Final.png', 
'Assets/3D Works/Snoopy.png',
'Assets/All 100 Days Finals/Day 31 Final copy.png',
'Assets/All 100 Days Finals/Day 32 Final copy.png',
'Assets/All 100 Days Finals/Day 35 Final copy.png',
'Assets/All 100 Days Finals/Day 38 Final copy.png',
'Assets/All 100 Days Finals/Day 39 Final copy.png'
]
let projectImage = document.getElementById('scrolling-images');
let index = 0;

setInterval(changeImages, 4000);

function changeImages(){
    index++;
    if(index >= 6){
        index = 0;
    }
    projectImage.src = daysImages[index];
};