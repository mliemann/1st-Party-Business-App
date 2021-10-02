import axios from "axios";
const backend = axios.create({
    baseURL: "http://localhost:3001"
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDishes: function(user_id) {
        return backend.get("/api/dish/" + user_id);
    },
    loginUser: function(credentials) {
        return backend.post("/api/user/login", credentials);
    },
    doLike: function(dish_id, user_id, action) {
        return backend.post("/api/dish/" + dish_id + "/like/" + user_id, action)
    }
}
