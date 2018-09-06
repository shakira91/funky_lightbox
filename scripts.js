let images = [
    "http://homework.warbyparker.com/images/kerouac-purple.jpg",
    "http://homework.warbyparker.com/images/kerouac-lilac.jpg",
    "http://homework.warbyparker.com/images/kerouac-blue.jpg",
    "http://homework.warbyparker.com/images/kerouac-green.jpg",
    "http://homework.warbyparker.com/images/kerouac-orange.jpg",
    "http://homework.warbyparker.com/images/kerouac-red.jpg"
];

//add overlay image to the DOM
function handleOverlayImage(e, element, index, overlay) {
    if (e.target.id.substr(-1) === index.toString()) {  
        overlay.innerHTML = "<img id=\"overlay-image\" src='" + element + "'>";
    }
}

images.forEach((element, index) => {
    let overlay = document.getElementById("overlay");
    //use first image in array for overlay on page load
    overlay.innerHTML = "<img id=\"overlay-image\" src='" + images[0] + "'>";
    //add thumbnails
    let thumbnailContainer = document.getElementById("thumbnails");
    let thumbnail = document.createElement("img");
    thumbnail.src = element;
    thumbnail.setAttribute("id", "thumbnail-" + index);
    thumbnailContainer.appendChild(thumbnail);

    window.addEventListener("click",  (e) =>  { handleOverlayImage(e, element, index, overlay); });
    
});

//on scroll, if the user is at the top of the page, lightbox container = 80%. if at the bottom, lightbox container = one-third the original width of the container. 
//otherwise, decrease container width as user scrolls down.
function changeWidth(lightboxContainer, computedWidth) {
    lightboxContainer.style.width = (computedWidth - window.pageYOffset).toString() + "px";
}

window.addEventListener("scroll",  () => { 
    let lightboxContainer = document.getElementById("container");
    let computedWidth = parseInt(getComputedStyle(lightboxContainer).getPropertyValue("width").slice(0, -2));
    if (document.documentElement.scrollTop === 0 ) {
        lightboxContainer.style.width = "80%";   
    } else if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        lightboxContainer.style.width = "calc(80% /3)";
    } else {
        changeWidth(lightboxContainer, computedWidth);
    }
}); 
