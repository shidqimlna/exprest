import DataSource from '../../data/data-source';
import '../../components/restaurant-list';
import '../../components/hero-component';

const Home = {
    async render() {
        return `
        <hero-component></hero-component>

        <section class="content">
            <h2 class="content__label">Explore Restaurant</h2>
            <restaurant-list></restaurant-list>
        </section>
    `;
    },

    async afterRender() {
        const content = document.querySelector('.content');
        const restaurantList = document.querySelector('restaurant-list');

        try {
            const response = await DataSource.restaurantData();
            restaurantList.restaurants = response.restaurants;
        } catch (message) {
            content.innerHTML = `
            <h2 class="content__label" style="text-align: center;">
                Oops! Something went wrong, please check your connection and try again later!
            </h2>
            <p class="content__label" style="text-align: center;">
                Error message: ${message}
            </p>
            `;
        }
    },
};

export default Home;
