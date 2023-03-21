let overlay = document.getElementById('overlay');
let imagePreviewBlock = document.getElementById('image-overlay');

function hideOverlay(){
    overlay.style.display = 'none';
    console.log("ay");
}

function imagePreview(index){
    currentImage = document.getElementById('All-projects').children[index].src;
    imagePreviewBlock.style.display = 'block';
    console.log(index);

    imagePreviewBlock.children[0].src = currentImage;
}

function imageHide(){
    imagePreviewBlock.style.display = 'none';
}