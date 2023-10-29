const mainImage = document.getElementById('mainImage');
const imageDetail = document.getElementById('imageDetail');
const thumbnailImages = document.querySelectorAll('.carousel-thumbnails img');

function changeImage(imageSrc, detail) {
    mainImage.src = imageSrc;
    imageDetail.textContent = detail;
    imageDetail.style.display = 'block';
}

thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const imageSrc = this.src;
        const detail = this.getAttribute('data-detail');
        changeImage(imageSrc, detail);
    });
});
