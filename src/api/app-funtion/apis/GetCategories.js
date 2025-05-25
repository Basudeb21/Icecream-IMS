import axios from 'axios';
import { ToastAndroid } from 'react-native';
import API from '../../common/API';
import GetStoredToken from '../../token-manager/GetStoredToken';

const GetCategories = async () => {
    try {
        const token = await GetStoredToken();
        if (!token) {
            ToastAndroid.show("Token not found...", ToastAndroid.SHORT);
            return null;
        }

        const response = await axios.get(`${API.BASE_URL}get-gategory`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
            }
        });



        if (response.data.status === "true") {
            return response.data.data;
        } else {
            ToastAndroid.show(response.data.massage, ToastAndroid.SHORT);
            return { error: response.data.massage };
        }
    } catch (error) {
        console.error("FULL ERROR:", {
            message: error.message,
            response: error.response,
            stack: error.stack
        });
        ToastAndroid.show("Network error occurred", ToastAndroid.SHORT);
        return null;
    }
};

export default GetCategories;