import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const CategoriesShopInfoCard = ({ storeInfo }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{storeInfo.shop_name}</Text>
            <Text style={styles.subTxt}>{storeInfo.owner_name}</Text>
            <Text style={styles.subTxt}>{storeInfo.address}</Text>
            <Text style={styles.subTxt}>{storeInfo.whatsapp_number}</Text>
        </View>
    )
}

export default CategoriesShopInfoCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.THEME,
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(18),
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
        borderRadius: scale(12),
        borderLeftWidth: scale(24),
        borderRightWidth: scale(24),
        borderColor: Colors.THEME_TRANSPARENT
    },
    name: {
        color: Colors.WHITE,
        fontSize: scale(16),
        fontWeight: "700",
        marginBottom: verticalScale(10),
    },
    subTxt: {
        color: Colors.WHITE,
        fontSize: scale(12),
        fontWeight: "500"
    }
})