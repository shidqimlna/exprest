import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Like = {
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
            <h2 class="content__label">Your Favorite Restaurant</h2>
            <restaurant-list></restaurant-list>
        </section>
    `;
    },

    async afterRender() {
        const movies = await FavoriteRestaurantIdb.getAllMovies();
        const moviesContainer = document.querySelector('#movies');
        movies.forEach((movie) => {
            moviesContainer.innerHTML += createMovieItemTemplate(movie);
        });
    },
};

export default Like;
