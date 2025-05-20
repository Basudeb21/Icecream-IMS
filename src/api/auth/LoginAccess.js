import axios from "axios";
import API from "../common/API";

const LoginAccess = async (phone, password) => {
    try {
        const response = await axios.post(`${API.BASE_URL}login`, {
            phone,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        throw error;
    }
};

export default LoginAccess