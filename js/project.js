/*
document.addEventListener('DOMContentLoaded', function () {
    const projectContainers = document.querySelectorAll('.card-block-wrap');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupDescription = document.getElementById('popup-description');
    const closeBtn = document.querySelector('.close');

    projectContainers.forEach(container => {
        container.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            const description = this.getAttribute('data-description');
            popup.style.display = "block";
            popupImg.src = imgSrc;
            popupDescription.innerText = description;
        });
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
*/