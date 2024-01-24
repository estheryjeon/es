/* For navigation */
function openMenu() {
    document.getElementById("mobile-nav").style.display = "block";
}
function closeMenu() {
    document.getElementById("mobile-nav").style.display = "none";
}

/* For modals */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
function clickOut(modalId) {
    var modal = document.getElementById(modalId);
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}

/* For Story */
function show(url) {
    document.getElementById("replaceme").src = 'assets/story/'+url;
    document.getElementById("replaceme").style.visibility = "visible";
}
function hide() {
    document.getElementById("replaceme").style.visibility = "hidden";;
}

/* For Gallery */
function populateGallery() {
    var myElements = document.getElementsByClassName("pic");
    for (let i = 0; i < myElements.length; i++) {
        myElements[i].src = 'assets/galleryPhotos/gallery-' + (i+1) + '.jpg';
    }
}

if (document.URL.includes("fuji-minolta")) {
    window.onload = populateGallery;
}

/* For Home */
function randomPhoto() {
    var randomNum = Math.floor(Math.random() * (4));
    document.getElementById("homePhoto").src = 'assets/homePhotos/home-' + randomNum + '.jpg';
}

if (document.URL.includes("potrerohill")) {
    window.onload = randomPhoto;
}