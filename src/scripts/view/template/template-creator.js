const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="btn-fab">
        <i class="fa fa-heart" style="color: pink" aria-hidden="true"></i>
    </button>
`;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="btn-fab">
        <i class="fa fa-heart" style="color: crimson" aria-hidden="true"></i>
    </button>
`;

export { createFavoriteButtonTemplate, createFavoritedButtonTemplate };
