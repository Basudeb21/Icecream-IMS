import EncryptedStorage from 'react-native-encrypted-storage';

const GetStoredToken = async () => {
    try {
        const session = await EncryptedStorage.getItem("login_token");

        if (session !== null) {
            const parsed = JSON.parse(session);
            const token = parsed.token;
            console.log("Retrieved token:", token);
            return token;
        } else {
            console.log("No token found");
            return null;
        }
    } catch (error) {
        console.error("Failed to retrieve token:", error);
        return null;
    }
};

export default GetStoredToken