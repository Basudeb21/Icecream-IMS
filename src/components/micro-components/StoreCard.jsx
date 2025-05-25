import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../constants';
import { IconDetails } from '../framework';

const StoreCard = ({ shopName = "loading...", ownerName = "loading...", location = "loading...", phone = "loading...", onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <IconDetails
                    Icon={Entypo}
                    name="shop"
                    size={14}
                    color={Colors.WHITE}
                    desc={shopName}
                />
                <IconDetails
                    Icon={FontAwesome}
                    name="user"
                    size={14}
                    color={Colors.WHITE}
                    desc={ownerName}

                />
                <IconDetails
                    Icon={Entypo}
                    name="location-pin"
                    size={14}
                    color={Colors.WHITE}
                    desc={location}
                />
                <IconDetails
                    Icon={FontAwesome}
                    name="whatsapp"
                    size={14}
                    color={Colors.WHITE}
                    desc={phone}
                />

            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn} onPress={onPress}>
                    <Text style={styles.btnTxt}>Select</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default StoreCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.THEME,
        paddingHorizontal: moderateScale(10),
        paddingVertical: verticalScale(5),
        elevation: scale(10),
        borderLeftWidth: scale(20),
        borderRightWidth: scale(20),
        borderColor: Colors.THEME_TRANSPARENT,
        borderRadius: scale(8),
        flexDirection: "row",
        alignSelf: "center",
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(15)
    },

    detailsContainer: {
        flex: 7,
    },

    btnContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        backgroundColor: Colors.WHITE,
        padding: scale(10),
        borderRadius: scale(6),
        elevation: scale(10)
    },
    btnTxt: {
        color: Colors.THEME,
        fontWeight: "600"
    }
})