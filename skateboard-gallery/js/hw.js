const galleryView = document.getElementById('view');
const galleryNav = document.getElementById('nav');
const galleryItems = galleryNav.getElementsByTagName('a');


function showFullImage(event) {
    event.preventDefault();
    let activeThumb = document.getElementsByClassName('gallery-current')[0];
    activeThumb.classList.remove('gallery-current');
    this.classList.add('gallery-current');
    galleryView.src = this.href;
}

for(const key of galleryItems){
    key.addEventListener('click', showFullImage);
}