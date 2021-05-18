import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Like = {
    async render() {
        return `
        <section class="hero">
            <div class="hero__overlay">
                <div class="hero__inner">
                    <h1 class="hero__title">Foodies welcome</h1>
                    <p class="hero__tagline">
                        We’ve got something for everyone!
                    </p>
                </div>
            </div>
        </section>

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
                content.innerHTML = '<h2>Your Favorite List is Empty!</h2>';
            } else restaurantList.restaurant = response.restaurants;
        } catch (message) {
            console.log(message);
            content.innerHTML =
                '<h2>Oops! Something went wrong, please check your connection and try again later!</h2>';
        }
    },
};

export default Like;
