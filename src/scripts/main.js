import './components/restaurant-list';

import DataSource from './data/data-source.js';

const main = () => {
    const menu = document.querySelector('#menu');
    const hero = document.querySelector('.hero');
    const main = document.querySelector('main');
    const drawer = document.querySelector('#drawer');

    menu.addEventListener('click', function (event) {
        drawer.classList.toggle('open');
        event.stopPropagation();
    });

    hero.addEventListener('click', function () {
        drawer.classList.remove('open');
    });

    main.addEventListener('click', function () {
        drawer.classList.remove('open');
    });

    const restaurantList = document.querySelector('restaurant-list');

    const restaurantData = async () => {
        try {
            const result = await DataSource.restaurantData();
            renderResult(result);
        } catch (message) {
            console.log(message);
        }
    };

    const renderResult = (result) => {
        restaurantList.restaurant = result.restaurants;
    };

    restaurantData();
};

export default main;
