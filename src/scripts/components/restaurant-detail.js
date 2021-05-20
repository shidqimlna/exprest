import CONFIG from '../global/config';

class RestaurantDetail extends HTMLElement {
    set restaurant(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
                <img class="lazyload item__thumbnail" src="images/loading.gif" data-src="
                    ${CONFIG.BASE_IMAGE_URL.MEDIUM + this._item.pictureId}"
                    data-srcset="${CONFIG.BASE_IMAGE_URL.SMALL + this._item.pictureId} 480w, 
                    ${CONFIG.BASE_IMAGE_URL.LARGE + this._item.pictureId} 800w"
                    alt="${this._item.name}" crossorigin="anonymous"
                />

                <div class="item__content">
                    <p class="item__title">${this._item.name}</p>
                    <div class="item__detail__container">
                        <div class="item__detail">
                            <i class="fas fa-map-marker-alt" style="color: crimson"></i>
                            <p class="item__city">${this._item.address}, ${this._item.city}</p>
                        </div>
                        <div class="item__detail">
                            <i class="fas fa-star" style="color: gold"></i>
                            <p class="item__rating">${this._item.rating}</p>
                        </div>
                    </div>
                    <p class="item__description">${this._item.description}</p>
                    <input id="name">
                    <input id="review">
                    <button id="submit">Submit</button>
                </div>
        `;
    }
}

customElements.define('restaurant-detail', RestaurantDetail);
