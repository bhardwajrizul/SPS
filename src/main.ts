const galleryContent = document.querySelector<HTMLDivElement>('.gallery-content');
const images = document.querySelectorAll<HTMLImageElement>('.gallery-content img');
let currentIndex: number = 0;

let prev = document.querySelector<HTMLButtonElement>('.gc-prev');
let next = document.querySelector<HTMLButtonElement>('.gc-next');

function updateGallery() {
  if (galleryContent) galleryContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// auto slide images
let slideInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
}, 5000);

prev?.addEventListener('click', () => {
  clearInterval(slideInterval);
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery();
});

next?.addEventListener('click', () => {
  clearInterval(slideInterval);
  currentIndex = (currentIndex + 1) % images.length;
  updateGallery();
});


// Code for popup modal
const modal = document.querySelector<HTMLDivElement>('.popup');
// on page load show modal
document.addEventListener('DOMContentLoaded', () => {
  modal?.classList.add('show');
}
);

const enbtn = document.querySelector<HTMLButtonElement>('#en-btn');

// on clicking english button
enbtn?.addEventListener('click', () => {
  modal?.classList.remove('show');
}
);
