import DataSource from '../../data/data-source';
import '../../components/restaurant-list';

const NowPlaying = {
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
            <h2 class="content__label">Explore Restaurant</h2>
            <restaurant-list></restaurant-list>
        </section>
    `;
    },

    async afterRender() {
        const restaurants = document.querySelector('.content');
        const restaurantsContainer = document.querySelector('restaurant-list');

        try {
            const response = await DataSource.restaurantData();
            restaurantsContainer.restaurant = response;
        } catch (message) {
            restaurants.innerHTML =
                '<h2>Loading Data Failed! Please Check Your Connection</h2>';
        }
    },
};

export default NowPlaying;
