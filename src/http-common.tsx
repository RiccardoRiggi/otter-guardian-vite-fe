
import axios from "axios";
export default axios.create({
    baseURL: "http://localhost/otter-guardian-be/rest",
    headers: {
        "Content-type": "application/json",
    }
});

