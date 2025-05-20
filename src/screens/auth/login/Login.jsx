// Login.jsx
import React, { useState, useContext } from 'react';
import { Image, View, ToastAndroid, StyleSheet } from 'react-native';
import { Colors, Images } from '../../../constants';
import { InputBox, Spacer, SubmitButton } from '../../../components/framework';
import { LoginAccess } from '../../../api';
import { AuthContext } from './AuthProvider';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async () => {
        try {
            const result = await LoginAccess(phone, password);

            if (result?.token) {
                ToastAndroid.show("Login successful", ToastAndroid.SHORT);
                await login(result.token);
            } else {
                ToastAndroid.show("Invalid server response", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log("Login Error:", error);
            ToastAndroid.show("Login credentials not matching...", ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: Images.ICECREAM }} style={styles.img} />
            <View style={styles.credContainer}>
                <Image source={Images.LOGO} style={styles.logo} />
                <InputBox placeholder={"Enter your phone number"} type='phone' value={phone} onChangeText={setPhone} />
                <Spacer height={10} />
                <InputBox placeholder={"Enter your password"} type='password' value={password} onChangeText={setPassword} />
                <Spacer height={10} />
                <SubmitButton text={"Login"} onPress={handleLogin} />
            </View>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        width: "100%",
        height: "100%"
    },
    img: {
        width: "100%",
        height: "55%"
    },
    credContainer: {
        width: "100%",
        height: "45%"
    },
    logo: {
        height: verticalScale(120),
        width: moderateScale(120),
        alignSelf: "center"

    },
    input: {

    },
    btn: {

    },
    btnTxt: {

    }
})