import React from 'react'

import { TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';
import useAuth from '../../auth/login/useAuth ';
import { Colors } from '../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Header } from '../../../components/framework';
import { ProfileCard } from '../../../components/micro-components';

const Profile = () => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <Header name={"Profile"} isSerchReq={false} color={Colors.THEME_LIGHT} contentColor={Colors.WHITE} />
            <ScrollView>
                <ProfileCard />
                <TouchableOpacity onPress={logout} style={styles.btn}>
                    <Text style={styles.txt}>LOGOUT</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Profile;




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        alignSelf: "center",
        backgroundColor: Colors.THEME,
        padding: scale(10),
        paddingHorizontal: moderateScale(20),
        borderRadius: scale(12),
        marginTop: verticalScale(20)
    },
    txt: {
        color: Colors.WHITE,
        fontWeight: "600",
        fontSize: scale(12)
    }
})