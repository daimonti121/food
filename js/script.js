import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import { openModal } from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2025-03-15');
    cards();
    calc();
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prewArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    forms('form', modalTimerId);
});
