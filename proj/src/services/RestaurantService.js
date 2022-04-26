import axios from "axios";

const RESTAURANT_API_BASE_URL = "http://localhost:8080/api/v1/restaurants";

class RestaurantService {

    getRestaurants() {
        return axios.get(RESTAURANT_API_BASE_URL);
    }

    createRestaurant(restaurant) {
        return axios.post(RESTAURANT_API_BASE_URL, restaurant);
    }

    getRestaurantById(restaurantId) {
        return axios.get(RESTAURANT_API_BASE_URL + '/' + restaurantId);
    }

    updateRestaurant(restaurant, restaurantId) {
        return axios.put(RESTAURANT_API_BASE_URL + '/' + restaurantId, restaurant);
    }

    deleteRestaurant(restaurantId) {
        return axios.delete(RESTAURANT_API_BASE_URL + '/' + restaurantId);
    }
}

export default new RestaurantService();