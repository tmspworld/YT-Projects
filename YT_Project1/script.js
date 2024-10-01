let scrolledOnce = false;
let scrolledTwice = false;

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const circleSectionHeight = document.querySelector('.circle-section').offsetHeight;

    // Trigger show of name when scrolls past 10% of circle section height
    if (scrollY > circleSectionHeight * 0.1 && !scrolledOnce) {
        document.body.classList.add('show-name');
        scrolledOnce = true;
    }

    // Trigger zoom out of circle after name has appeared
    if (scrollY > circleSectionHeight * 0.3 && !scrolledTwice) {
        document.body.classList.remove('show-name');
        document.body.classList.add('circle-zoom-out');
        scrolledTwice = true;
    }

    // After further scroll, turn circle yellow and scale down
    if (scrollY > circleSectionHeight * 0.6) {
        document.body.classList.add('show-next');
    }

    // Trigger the showing of page sections after circle scales down
    if (scrollY > circleSectionHeight * 0.9) {
        document.body.classList.add('show-page');
    }
});
