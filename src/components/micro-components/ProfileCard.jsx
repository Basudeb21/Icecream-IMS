import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors, Images } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ProfileDataHolder } from '.';

const ProfileCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bgContainer}>
                <Image source={Images.LOGO} style={styles.logo} />
                <Image source={Images.USER} style={styles.profilePic} />
            </View>

            <View style={styles.dataContainer}>
                <ProfileDataHolder userData={"Basudeb Paul Chowdhury"} Icon={FontAwesome6} iconName={"user-large"} />
                <ProfileDataHolder userData={"9832961542"} Icon={Feather} iconName={"phone-call"} />
                <ProfileDataHolder userData={"Active"} Icon={Entypo} iconName={"info"} />
                <ProfileDataHolder userData={"WB1234"} Icon={Fontisto} iconName={"car"} />
            </View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    bgContainer: {
        backgroundColor: Colors.THEME_LIGHT,
        width: "100%",
        height: verticalScale(130),
    },
    profilePic: {
        height: verticalScale(120),
        width: moderateScale(120),
        position: "absolute",
        bottom: scale(-50),
        left: moderateScale(15)
    },
    logo: {
        height: verticalScale(140),
        position: "absolute",
        width: moderateScale(140),
        alignSelf: "flex-end",
        top: scale(-10),
        opacity: 0.2
    },
    dataContainer: {
        marginTop: verticalScale(80),

    },



})