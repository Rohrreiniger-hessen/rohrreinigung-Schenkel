document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.home-since-items .item');
    const totalItems = items.length;

    function showSlide(index) {
        const slider = document.querySelector('.home-since-items .slider1');
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);

    // document.querySelector('.prev').addEventListener('click', prevSlide);
    // document.querySelector('.next').addEventListener('click', nextSlide);
});