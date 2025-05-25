import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Strings } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const OrderCard = ({ date, shopName, paymentMehod, ammount, paymentStatus, onPress }) => {
    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const month = date.toLocaleString('en-US', { month: 'short' });
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();

        return `${month}\n${day}\n${year}`;
    };

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.dateConatiner}>
                <Text style={styles.date}>{formatDate(date)}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.shopName}>{shopName}</Text>
                <Text style={styles.paymentMethod}>{paymentMehod}</Text>
                <Text style={styles.ammount}>{Strings.RS_SYMBOL + " " + ammount}</Text>
            </View>
            <View style={styles.paymentContainer}>
                <Text style={[styles.paymetTxt, { backgroundColor: paymentStatus == "Full Paid" ? Colors.THEME_LIGHT : Colors.RED }]}>{paymentStatus}</Text>
            </View>
            <View></View>

        </TouchableOpacity >
    )
}

export default OrderCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(18),
        flexDirection: "row",
        alignItems: "center",
        borderRadius: scale(15),
        elevation: scale(8),
        paddingEnd: moderateScale(4),
    },
    dateConatiner: {
        backgroundColor: Colors.THEME,
        padding: scale(12),
        borderTopLeftRadius: scale(15),
        borderBottomLeftRadius: scale(15),
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    infoContainer: {
        flex: 6,
        marginStart: moderateScale(15),

    },
    paymentContainer: {
        flex: 3

    },
    date: {
        color: Colors.WHITE,
        fontWeight: "600",
        alignSelf: "center"
    },

    shopName: {
        fontSize: scale(14),
        fontWeight: "700",
    },
    paymentMethod: {
        marginTop: verticalScale(5)
    },
    ammount: {

    },
    paymetTxt: {
        alignSelf: "flex-start",
        paddingVertical: verticalScale(4),
        paddingHorizontal: moderateScale(12),
        borderRadius: scale(100),
        color: Colors.WHITE,
        fontSize: scale(11),
        fontWeight: "800"
    }
})