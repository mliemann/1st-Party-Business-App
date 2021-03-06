import axios from "axios";
const backend = axios.create({
    baseURL: "/"
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDishes: function(user_id) {
        return backend.get("/api/dish/", {user_id: user_id});
    },
    loginUser: function(credentials) {
        return backend.post("/api/user/login", credentials);
    },
    doLike: function(dish_id, action) {
        return backend.post("/api/dish/" + dish_id + "/like/", action)
    },
    getLike: function() {
    //    return backend.get("/api/dish/like")
        return backend.get("/api/dish/", {user_id: 0})
    }
}
