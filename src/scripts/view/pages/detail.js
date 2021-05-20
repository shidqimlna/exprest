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
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const content = document.querySelector('.content');
        const restaurantDetail = document.querySelector('restaurant-detail');

        try {
            const response = await DataSource.detailRestaurants(url.id);
            restaurantDetail.restaurant = response.restaurant;

            await this.postReview(url.id);

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
            content.innerHTML = `
            <h2 class="content__label" style="text-align: center;">
                Oops! Something went wrong, please check your connection and try again later!
            </h2>
            `;
        }
    },

    async postReview(id) {
        document
            .querySelector('#submit')
            .addEventListener('click', async (e) => {
                e.preventDefault();

                const name = document.getElementById('name').value;
                const review = document.getElementById('review').value;
                if (name !== '' || review !== '') {
                    const reviewData = {
                        id,
                        name,
                        review,
                    };

                    DataSource.postReview(reviewData).then((data) => {
                        console.log(data);
                        if (data.customerReviews) {
                            console.log(data);
                            //   swal('Thank You for Your Review', 'Your review has been sent successfully', 'success');

                            // document.querySelector('.main-review').html('');
                            // data.customerReviews.map((newReview) =>
                            //     $('.main-review').append(
                            //         createCustomerReviewTemplate(newReview)
                            //     )
                            // );
                        }
                    });
                } else {
                    // swal('Sorry!', 'Please fill out the form completely to add your review!', 'error');
                }
            });
    },
};

export default Detail;
