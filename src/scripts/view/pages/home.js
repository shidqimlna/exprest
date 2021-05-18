import DataSource from '../../data/data-source';
import '../../components/restaurant-list';

const Home = {
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
        const content = document.querySelector('.content');
        const restaurantList = document.querySelector('restaurant-list');

        try {
            const response = await DataSource.restaurantData();
            restaurantList.restaurant = response.restaurants;
        } catch (message) {
            console.log(message);
            content.innerHTML =
                '<h2 class="content__label" style="text-align: center;">Oops! Something went wrong, please check your connection and try again later!</h2>';
        }
    },
};

export default Home;
