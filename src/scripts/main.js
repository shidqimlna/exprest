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
            // console.log(result);
            renderResult(result);
        } catch (message) {
            console.log(message);
            // fallbackResult(message);
        }
    };

    const renderResult = (result) => {
        console.log(result.restaurants);
        restaurantList.restaurant = result.restaurants;
    };

    // const fallbackResult = (message) => {};

    restaurantData();
};

export default main;
