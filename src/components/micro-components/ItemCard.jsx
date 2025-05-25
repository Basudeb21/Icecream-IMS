import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../constants';
const ItemCard = ({ itemName, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.iconBg}>
                <MaterialCommunityIcons
                    name="ice-pop"
                    size={scale(20)}
                    color={Colors.THEME}
                />
            </View>
            <Text style={styles.text}>{itemName}</Text>
        </TouchableOpacity>
    )
}

export default ItemCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: moderateScale(6),
        alignItems: 'center',
        backgroundColor: Colors.THEME_TRANSPARENT,
        elevation: scale(3),
        padding: scale(15),
        borderRadius: scale(10),
        justifyContent: "center"
    },
    iconBg: {
        backgroundColor: Colors.WHITE,
        padding: scale(5),
        borderRadius: scale(100)
    },
    text: {
        marginTop: verticalScale(5),
        fontWeight: "600",
        fontSize: scale(12),
        color: Colors.ICE_CREAM_TYPE,
    }
})