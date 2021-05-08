class RestaurantItem extends HTMLElement {
    set restaurant(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
        <article class="item" tabindex="0">
            <img class="item__thumbnail" src="${this._item.pictureId}" alt="${this._item.name}">
            <div class="item__content">
                <p class="item__title">${this._item.name}</p>
                <div class="item__detail__container">
                    <div class="item__detail">
                        <i class="fas fa-map-marker-alt" style="color: crimson"></i>
                        <p class="item__city">${this._item.city}</p>
                    </div>
                    <div class="item__detail">
                        <i class="fas fa-star" style="color: gold"></i>
                        <p class="item__rating">${this._item.rating}</p>
                    </div>
                </div>
                <p class="item__description">${this._item.description}</p>
            </div>
        </article>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);
