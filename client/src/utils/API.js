import axios from "axios";
const backend = axios.create({
    baseURL: "http://localhost:3001"
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDishes: function() {
        return backend.get("/api/dish");
    },
    loginUser: function(credentials) {
        return backend.post("/api/user/login", credentials);
    }
}
