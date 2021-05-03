import './restaurant-item';

class RestaurantList extends HTMLElement {
    set restaurant(items) {
        console.log(items);
        this._items = items;
        this.render();
    }

    render() {
        // console.log(_items);
        this.innerHTML = '';
        this._items.forEach((item) => {
            console.log(item);
            const restaurantItemElement = document.createElement(
                'restaurant-item'
            );
            restaurantItemElement.restaurant = item;
            this.appendChild(restaurantItemElement);
        });
    }
}

customElements.define('restaurant-list', RestaurantList);
