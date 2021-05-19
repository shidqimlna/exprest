import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import '../../components/restaurant-detail';

const Detail = {
    async render() {
        return `
        <section class="content">
            <restaurant-detail></restaurant-detail>
            <div id="favoriteButtonContainer"></div>
        </section>
    `;
    },

    async afterRender() {
        // lazy load font awesome
        // let scriptElement = document.querySelector(
        //     'script[src="https://use.fontawesome.com/b070c8f1df.js"]'
        // );

        // if (!scriptElement) {
        //     scriptElement = document.createElement('script');
        //     scriptElement.src = 'https://use.fontawesome.com/b070c8f1df.js';
        //     document.body.appendChild(scriptElement);
        // }

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const content = document.querySelector('.content');
        const restaurantDetail = document.querySelector('restaurant-detail');

        try {
            const response = await DataSource.detailRestaurants(url.id);
            restaurantDetail.restaurant = response.restaurant;

            await FavoriteButtonInitiator.init({
                favoriteButtonContainer: document.querySelector(
                    '#favoriteButtonContainer'
                ),
                restaurant: {
                    id: response.restaurant.id,
                    name: response.restaurant.name,
                    pictureId: response.restaurant.pictureId,
                    rating: response.restaurant.rating,
                    city: response.restaurant.city,
                    description: response.restaurant.description,
                },
            });
        } catch (message) {
            console.log(message);
            content.innerHTML =
                '<h2 class="content__label" style="text-align: center;">Oops! Something went wrong, please check your connection and try again later!</h2>';
        }

        // const movie = await DataSource.detailRestaurants(url.id);
        // const movieContainer = document.querySelector('#movie');
        // movieContainer.innerHTML = createMovieDetailTemplate(movie);
    },
};

export default Detail;
