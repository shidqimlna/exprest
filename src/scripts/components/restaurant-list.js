import './restaurant-item';

class RestaurantList extends HTMLElement {
    set restaurants(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.innerHTML = '';
        this._items.forEach((item) => {
            const restaurantItemElement = document.createElement('restaurant-item');
            restaurantItemElement.restaurant = item;
            this.appendChild(restaurantItemElement);
        });
    }
}

customElements.define('restaurant-list', RestaurantList);
