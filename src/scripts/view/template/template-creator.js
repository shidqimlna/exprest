// import CONFIG from '../../global/config';

const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="btn-fab">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="btn-fab">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createFavoriteButtonTemplate, createFavoritedButtonTemplate };
