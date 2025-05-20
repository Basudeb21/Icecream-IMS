import axios from "axios";
import API from "../common/API";
import RemoveToken from "../token-manager/RemoveStoredToken";
import { ToastAndroid } from "react-native";
import GetStoredToken from "../token-manager/GetStoredToken";

const LogMeOut = async () => {
    try {
        const token = await GetStoredToken();
        await axios.post(`${API.BASE_URL}logout`, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        ToastAndroid.show("Logout Successful", ToastAndroid.SHORT);
        await RemoveToken();
    } catch (error) {
        console.error("Logout failed:", error);
        ToastAndroid.show("Logout failed", ToastAndroid.SHORT);
        await RemoveToken();
    }
};

export default LogMeOut;
