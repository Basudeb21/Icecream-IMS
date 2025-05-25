import { ToastAndroid } from "react-native";
import GetStoredToken from "../../token-manager/GetStoredToken";
import axios from "axios";
import API from "../../common/API";

const GetOrderedItems = async (id) => {
    try {
        const token = await GetStoredToken();
        if (!token) {
            ToastAndroid.show("Token not found...", ToastAndroid.SHORT);
            console.log("No token found in storage");
            return null;
        }

        const response = await axios.get(`${API.BASE_URL}get-order-items/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.data.status == "true") {
            return response.data.data;
        } else {
            console.error("Backend responded with error:", response.data);
            ToastAndroid.show("Error to load items...", ToastAndroid.SHORT);
            return null;
        }


    } catch (error) {
        console.error("unabled to fetch order items....", {
            message: error.message,
            status: error?.response?.status,
            data: error?.response?.data,
        });
        return null;
    }
}

export default GetOrderedItems