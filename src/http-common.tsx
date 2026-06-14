
import axios from "axios";
export default axios.create({
    baseURL: "http://localhost/GitHub-Repository/php-rest-authenticator/rest",
    headers: {
        "Content-type": "application/json",
    }
});

