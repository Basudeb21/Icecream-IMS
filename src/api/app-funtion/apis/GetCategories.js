import { View, Text } from 'react-native'
import React from 'react'
import GetStoredToken from '../../token-manager/GetStoredToken'

const GetCategories = async () => {
    try {
        const token = await GetStoredToken();
        if (!token) {
            ToastAndroid.show("Token not found...", ToastAndroid.SHORT);
            console.log("No token found in storage");
            return null;
        }

        const response = await axios.get(`${API.BASE_URL}get-gategory`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.data.status == "true") {
            return response.data.data;
        } else {
            console.error("Backend responded with error:", response.data);
            ToastAndroid.show("Error to load shops...", ToastAndroid.SHORT);
            return null;
        }



    } catch (error) {

    }
}

export default GetCategories