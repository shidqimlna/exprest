import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurant-list';
import '../../components/hero-component';

const Favorite = {
    async render() {
        return `
        <hero-component></hero-component>

        <section class="content">
            <h2 class="content__label">Your Favorite Restaurant</h2>
            <restaurant-list></restaurant-list>
        </section>
    `;
    },

    async afterRender() {
        const content = document.querySelector('.content');
        const restaurantList = document.querySelector('restaurant-list');

        try {
            const response = await FavoriteRestaurantIdb.getAllRestaurants();
            if (response.length === 0) {
                content.innerHTML = `
                <h2 class="content__label" style="text-align: center;">
                    Your Favorite List is Empty!
                </h2>
                `;
            } else {
                console.log(response);
                restaurantList.restaurants = response;
            }
        } catch (message) {
            console.log(message);
            content.innerHTML = `
                <h2 class="content__label" style="text-align: center;">
                    Oops! Something went wrong, please check your connection and try again later!
                </h2>
                `;
        }
    },
};

export default Favorite;
