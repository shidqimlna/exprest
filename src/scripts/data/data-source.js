import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class DataSource {
    static async restaurantData() {
        const response = await fetch(API_ENDPOINT.LIST);
        return response.json();
    }

    static async detailRestaurants(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async PostReview(data) {
        const response = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': CONFIG.KEY,
            },
            body: JSON.stringify(data),
        });
        return response;
    }
}

export default DataSource;
