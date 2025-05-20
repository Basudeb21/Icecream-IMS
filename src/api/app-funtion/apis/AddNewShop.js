import axios from "axios";
import GetStoredToken from "../../token-manager/GetStoredToken";
import API from "../../common/API";
import { ToastAndroid } from "react-native";

const AddNewShop = async (shopName, ownerName, whatsAppNumber, address) => {
    try {
        const token = await GetStoredToken();
        const response = await axios.post(`${API.BASE_URL}add-new-shop`, {
            shop_name: shopName,
            owner_name: ownerName,
            whatsapp_number: whatsAppNumber,
            address: address,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })

        if (response.data.status == "true") {
            ToastAndroid.show("Stored added successfully", ToastAndroid.SHORT)
        }
        else {
            ToastAndroid.show("Store not added due to error....", ToastAndroid.SHORT);
            console.error(response.data.error);
            return;
        }
    } catch (error) {
        console.error("Unable to add store", {
            message: error.message,
            status: error?.response?.status,
            data: error?.response?.data,
        })
    }
}

export default AddNewShop;