import React from 'react'

import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import useAuth from './useAuth ';
import { Colors } from '../../../constants';
import { scale } from 'react-native-size-matters';

const Logout = () => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={logout} style={styles.btn}>
                <Text style={styles.txt}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Logout;




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",

    },
    btn: {
        alignSelf: "center",
        backgroundColor: Colors.THEME,
        padding: scale(20),
        borderRadius: scale(12)
    },
    txt: {
        color: Colors.WHITE,
        fontWeight: "600",
        fontSize: scale(16)
    }
})