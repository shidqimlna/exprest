import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the favorite button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWitRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
    });

    it('should not show the unfavorite button when the restaurant has not been favorited before', async () => {
        await TestFactories.createFavoriteButtonPresenterWitRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
    });

    it('should be able to favorite the restaurant', async () => {
        await TestFactories.createFavoriteButtonPresenterWitRestaurant({ id: 1 });

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant again when its already favorited', async () => {
        await TestFactories.createFavoriteButtonPresenterWitRestaurant({ id: 1 });

        await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

        FavoriteRestaurantIdb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createFavoriteButtonPresenterWitRestaurant({});

        document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});
