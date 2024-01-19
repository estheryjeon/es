function openMenu() {
    document.getElementById("mobile-nav").style.display = "block";
}

function closeMenu() {
    document.getElementById("mobile-nav").style.display = "none";
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function show(url) {
    document.getElementById("replaceme").src = 'assets/'+url;
    document.getElementById("replaceme").style.visibility = "visible";
}

function hide() {
    document.getElementById("replaceme").style.visibility = "hidden";;
}

function populateGallery() {
    var myElements = document.getElementsByClassName("pic");

    for (let i = 0; i < myElements.length; i++) {
        // myElements[i].src = 'assets/galleryPhotos/gallery-1.jpg';
        myElements[i].src = 'assets/galleryPhotos/gallery-' + (i+1) + '.jpg';
    }

}

document.addEventListener("DOMContentLoaded", function(e) {
    populateGallery();
  });

// // Get the modal
// var modal = document.getElementById("susieModal");
              
// // Get the button that opens the modal
// var btn = document.getElementById("susieBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }