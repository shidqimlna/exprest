// import DataSource from '../data-source';

class RestaurantItem extends HTMLElement {
    set restaurant(item) {
        this._item = item;
        this.render();
    }

    render() {
        // console.log(_item);
        this.innerHTML = `
        <article class="item">
            <img class="item__thumbnail" src="${this._item.pictureId}" alt="${this._item.name}">
            <div class="item__content">
                <p class="item__title">${this._item.name}</p>
                <p class="item__city">${this._item.city}</p>
                <p class="item__rating">${this._item.rating}</p>
                <p class="item__description">${this._item.description}</p>
            </div>
        </article>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);
