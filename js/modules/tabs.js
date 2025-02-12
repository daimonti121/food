// tabs

function tabs() {
    let tabs = document.querySelectorAll('.tabheader__item');
    let tabsConten = document.querySelectorAll('.tabcontent');
    let tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsConten.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsConten[i].classList.add('show', 'fade');
        tabsConten[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs;