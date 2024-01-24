import axios from "axios";

// set up axios
// enable us to avoid repeating the base URL with each HTTP request in the code
export default axios.create({
    // baseURL:"https://9c96-103-106-239-104.ap.ngrok.io",// base address of the API endpoints
    baseURL: "http://localhost:8080",
    headers: {"ngrok-skip-browser-warning": "true"}// avoid the HTTP request from being blocked by CORES(cross-origin resource sharing)
});