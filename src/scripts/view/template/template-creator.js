// import CONFIG from '../../global/config';

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };

// class template {
//     static restaurantItemTemplate(result) {
//         return `
//         <div class="col">
//         <a href="#/detail/${result.id}" tabindex="0">
//             <div class="card" >
//                 <div class="card-img">
//                     <img class=" lazyload" src="" data-src="${
//                         CONFIG.BASE_IMAGE_URL_S + result.pictureId
//                     }" alt="restoran ${result.name}">
//                     <div class="rating rate-${result.id}" >
//                     </div>
//                 </div>
//                 <div class="description">
//                         <span class="number-rating" aria-label="rating restoran ${
//                             result.name
//                         } "><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>    ${
//             result.rating
//         }</span>
//                     <h3 class="title">${result.name}</h3>
//                     <p class="subtitle">${result.description}</p>
//                     <div></div>
//                     <span class="city">${result.city}</span>
//                 </div>
//             </div>
//             </a>
//         </div>`;
//     }
// }

// export default template;
