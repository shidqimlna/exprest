import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
        <section class="content">
            <restaurant-detail></restaurant-detail>
        </section>
    `;
    },

    async afterRender() {
        // lazy load font awesome
        let scriptElement = document.querySelector(
            'script[src="https://use.fontawesome.com/b070c8f1df.js"]'
        );

        if (!scriptElement) {
            scriptElement = document.createElement('script');
            scriptElement.src = 'https://use.fontawesome.com/b070c8f1df.js';
            document.body.appendChild(scriptElement);
        }

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await DataSource.detailMovie(url.id);
        const movieContainer = document.querySelector('#movie');
        movieContainer.innerHTML = createMovieDetailTemplate(movie);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            movie: {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                backdrop_path: movie.backdrop_path,
                vote_average: movie.vote_average,
            },
        });
    },
};

export default Detail;
