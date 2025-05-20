import EncryptedStorage from "react-native-encrypted-storage";

const RemoveToken = async () => {
    try {
        await EncryptedStorage.removeItem('login_token');
        console.log("Token removed successfully");
    } catch (error) {
        console.error("Failed to remove token:", error);
    }
};
export default RemoveToken;