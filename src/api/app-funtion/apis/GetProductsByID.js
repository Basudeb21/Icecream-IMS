import axios from 'axios';
import GetStoredToken from '../../token-manager/GetStoredToken';
import API from '../../common/API';

const GetProductsByID = async (category_id) => {
    try {
        const token = await GetStoredToken();
        if (!token) {
            console.warn("Token not found");
            return null;
        }

        const response = await axios.post(
            `${API.BASE_URL}get-products-by-category`,
            { category_id },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error('GetProductsByID error:', error.response?.data || error.message);
        throw error;
    }
};

export default GetProductsByID