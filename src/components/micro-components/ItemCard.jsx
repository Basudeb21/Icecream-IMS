import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../constants';
const ItemCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconBg}>
                <MaterialCommunityIcons
                    name="ice-pop"
                    size={scale(20)}
                    color={Colors.THEME}
                />
            </View>
            <Text style={styles.text}>90 ML CUPS</Text>
        </View>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "30%",
        backgroundColor: Colors.WHITE,
        elevation: scale(10),
        padding: scale(15),
        borderRadius: scale(10),
        alignSelf: "flex-start",
        marginHorizontal: moderateScale(20)

    },
    iconBg: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        padding: scale(5),
        borderRadius: scale(100)
    },
    text: {
        marginTop: verticalScale(5),
        fontWeight: "400",
        fontSize: scale(12)
    }
})