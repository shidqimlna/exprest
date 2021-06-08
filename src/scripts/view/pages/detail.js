import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import CONFIG from '../../global/config';

const Detail = {
    async render() {
        return `
        <section class="content">
            <div class="detail-content" id="restaurant-detail"></div>
            <div id="favoriteButtonContainer"></div>
        </section>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const content = document.querySelector('.content');
        const restaurantDetail = document.querySelector('#restaurant-detail');
        let reviewList = '';
        let categoriesList = '';
        let foodsList = '';
        let drinksList = '';

        try {
            const response = await DataSource.detailRestaurants(url.id);
            const data = response.restaurant;

            data.customerReviews.reverse().forEach((review) => {
                reviewList += `
                <article class="review__item" tabindex="0">
                    <div class="review__item-info">
                        <span class="review__item-name">${review.name}</span>
                        <span class="review__item-date">(${review.date})</span>
                    </div>
                    <p class="review__item-review">${review.review}</p>
                </article>
            `;
            });

            data.categories.forEach((category) => {
                categoriesList += `
                <span class="detail__category" tabindex="0">${category.name}</span>
            `;
            });

            data.menus.foods.forEach((food) => {
                foodsList += `
                <li class="detail__menu-item" tabindex="0">${food.name}</li>
            `;
            });

            data.menus.drinks.forEach((drink) => {
                drinksList += `
                <li class="detail__menu-item" tabindex="0">${drink.name}</li>
            `;
            });

            restaurantDetail.innerHTML = `
                <img class="lazyload detail__thumbnail" src="images/loading.gif" data-src="
                    ${CONFIG.BASE_IMAGE_URL.MEDIUM + data.pictureId}"
                    data-srcset="${CONFIG.BASE_IMAGE_URL.SMALL + data.pictureId} 480w, 
                    ${CONFIG.BASE_IMAGE_URL.LARGE + data.pictureId} 800w"
                    alt="${data.name}" crossorigin="anonymous"
                />

                <div class="detail__content">
                    <h2 class="detail__title" tabindex="0">${data.name}</h2>
                    <p class="detail__categories">${categoriesList}</p>
                    <div class="detail__info__container">
                        <div class="detail__info">
                            <i class="fas fa-map-marker-alt" style="color: crimson"></i>
                            <span class="detail__location" tabindex="0">${data.address}, ${data.city}</p>
                        </div>
                        <div class="detail__info">
                            <i class="fas fa-star" style="color: gold"></i>
                            <span class="detail__rating" tabindex="0">${data.rating}</p>
                        </div>
                    </div>
                    <p class="detail__description" tabindex="0">${data.description}</p>
                    <h3 class="detail__menu_label" tabindex="0">Menu</h3>
                    <div class="detail__menu">
                        <div class="detail__menu-container">
                            <h4 class="detail__menu_label" tabindex="0">Foods</h4>
                            <ul class="detail__menu-items">
                                ${foodsList}
                            </ul>
                        </div>
                        <div class="detail__menu-container">
                            <h4 class="detail__menu_label" tabindex="0">Drinks</h4>
                            <ul class="detail__menu-items">
                                ${drinksList}
                            </ul>
                        </div>
                    </div>
                    <form class="detail__form">
                    <h3 class="detail__menu_label">Review</h3>
                    <div class="detail__form-container">
                        <section class="detail__review-list">${reviewList}</section>
                        <div class="detail__form-inputcontainer">
                            <input type="text" id="name" class="detail__form-input" name="name" placeholder="Enter your name..." value="">    
                            <textarea id="review" name="review" class="detail__form-input" placeholder="Your review here..." rows="5"></textarea>
                            <button id="submitReview" aria-label="submit review" class="detail__form-submit">Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
        `;

            document
                .querySelector('#submitReview')
                .addEventListener('click', async (event) => {
                    event.preventDefault();
                    const { id } = url;
                    const name = document.getElementById('name').value;
                    const review = document.getElementById('review').value;
                    if (name !== '' || review !== '') {
                        const reviewData = {
                            id,
                            name,
                            review,
                        };
                        DataSource.postReview(reviewData).then((result) => {
                            if (result.customerReviews) {
                                let resultList = '';
                                result.customerReviews
                                    .reverse()
                                    .forEach((reviewResult) => {
                                        resultList += `
                                    <article class="review__item" tabindex="0">
                                        <div class="review__item-info">
                                            <span class="review__item-name">${reviewResult.name}</span>
                                            <span class="review__item-date">(${reviewResult.date})</span>
                                        </div>
                                        <p class="review__item-review">${reviewResult.review}</p>
                                    </article>
                                `;
                                    });
                                document.querySelector(
                                    '.detail__review-list',
                                ).innerHTML = '';
                                document.querySelector(
                                    '.detail__review-list',
                                ).innerHTML = resultList;
                            }
                        });
                    }
                });

            await FavoriteButtonInitiator.init({
                favoriteButtonContainer: document.querySelector(
                    '#favoriteButtonContainer',
                ),
                restaurant: {
                    id: data.id,
                    name: data.name,
                    pictureId: data.pictureId,
                    rating: data.rating,
                    city: data.city,
                    description: data.description,
                },
            });
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

export default Detail;
