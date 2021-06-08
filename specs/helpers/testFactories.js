import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createFavoriteButtonPresenterWitRestaurant = async (restaurant) => {
    await FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createFavoriteButtonPresenterWitRestaurant };
