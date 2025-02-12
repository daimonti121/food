function slider() {
    // Slides 

    const slides = document.querySelectorAll('.offer__slide');
    const slider = document.querySelector('.offer__slider');
    const dots = [];
    const next = document.querySelector('.offer__slider-next');
    const prev = document.querySelector('.offer__slider-prev');
    const total = document.querySelector('#total');
    const current = document.querySelector('#current');
    const sliderWrapper = document.querySelector('.offer__slider-wrapper');
    const sliderField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(sliderWrapper).width;

    let slidesIndex = 1;
    let offset = 0;

    sliderField.style.display = 'flex';
    sliderField.style.width = 100 * slides.length + '%';
    sliderField.style.transition = '0.5s all';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicator = document.createElement('ol');
    indicator.classList.add('carousel-indicators');
    indicator.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicator);

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1;
        }

        indicator.append(dot);
        dots.push(dot);
    }

    function getDots(dots) {
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
        });

        return dots[slidesIndex - 1].style.opacity = 1;
    }

    function strMod(str) {
        return +str.replace(/\D/g, '');
    }

    function pushNumber(width, slides) {
        return strMod(width) * (slides.length - 1)
    }

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slidesIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slidesIndex;
    }

    next.addEventListener('click', () => {
        if (offset == pushNumber(width, slides)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == slides.length) {
            slidesIndex = 1;
        } else {
            slidesIndex += 1;
        }

        if (slidesIndex < 10) {
            current.textContent = `0${slidesIndex}`;
        } else {
            current.textContent = slidesIndex;
        }

        getDots(dots);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = pushNumber(width, slides);
        } else {
            offset -= +width.replace(/\D/g, '');
        }

        sliderField.style.transform = `translateX(-${offset}px)`;

        if (slidesIndex == 1) {
            slidesIndex = slides.length;
        } else {
            slidesIndex -= 1;
        }

        if (slidesIndex < 10) {
            current.textContent = `0${slidesIndex}`;
        } else {
            current.textContent = slidesIndex;
        }

        getDots(dots);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slidesIndex = slideTo;
            offset = +width.replace(/\D/g, '') * (slideTo - 1);

            sliderField.style.transform = `translateX(-${offset}px)`;

            if (slidesIndex < 10) {
                current.textContent = `0${slidesIndex}`;
            } else {
                current.textContent = slidesIndex;
            }

            getDots(dots);
        });
    });
}

module.exports = slider;