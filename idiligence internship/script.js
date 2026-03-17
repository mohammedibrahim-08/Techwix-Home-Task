document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll(".counter-box h2");
    let started = false;

    window.addEventListener("scroll", function () {

        const section = document.querySelector(".counter");
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight && !started) {
            started = true;

            counters.forEach(counter => {
                let target = +counter.innerText;
                let count = 0;

                let updateCounter = () => {
                    let increment = target / 100;

                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCounter();
            });
        }

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const bars = document.querySelectorAll(".progress-bar");
    let started = false;

    window.addEventListener("scroll", function () {

        const section = document.querySelector(".skills");
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // Jab section screen me aaye tab animation start ho
        if (sectionTop < screenHeight - 100 && !started) {

            started = true;

            bars.forEach(bar => {
                let width = bar.getAttribute("data-width");

                // animation trigger
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });

        }

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.querySelector(".hero-content");

    setTimeout(() => {
        hero.classList.add("show");
    }, 200);

});