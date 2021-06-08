import {
    createFavoriteRestaurantButtonTemplate,
    createUnfavoriteRestaurantButtonTemplate,
} from '../view/template/template-creator';

const FavoriteButtonPresenter = {
    async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._favoriteRestaurants = favoriteRestaurants;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;
        if (await this._isRestaurantExist(id)) this._renderFavorited();
        else this._renderFavorite();
    },

    async _isRestaurantExist(id) {
        const restaurant = await this._favoriteRestaurants.getRestaurant(id);
        return !!restaurant;
    },

    _renderFavorite() {
        this._favoriteButtonContainer.innerHTML = createFavoriteRestaurantButtonTemplate();
        const favoriteButton = document.querySelector('#favoriteButton');
        favoriteButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderFavorited() {
        this._favoriteButtonContainer.innerHTML = createUnfavoriteRestaurantButtonTemplate();
        const favoriteButton = document.querySelector('#favoriteButton');
        favoriteButton.addEventListener('click', async () => {
            await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default FavoriteButtonPresenter;
