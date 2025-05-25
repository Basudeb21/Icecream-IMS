import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Strings } from '../../constants'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from 'react-native-paper';

const AddOrderCard = ({ productName, stock, price, count, value, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                    name="ice-pop"
                    size={scale(40)}
                    color={Colors.WHITE}
                />
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.topTextContainer}>
                    <Text style={styles.iceCreamName}>{productName}</Text>
                </View>
                <View style={styles.centerTextContainer}>
                    <Text style={styles.stockTxt}>Stock: {stock}</Text>
                    <Text style={styles.priceTxt}>Box Price: {Strings.RS_SYMBOL}{price}\-</Text>
                </View>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.itemInsideTxt}>Item inside box {count}</Text>
                </View>
            </View>
            <View style={styles.quantityContainer}>
                <TextInput
                    placeholder={"Qty"}
                    placeholderTextColor={Colors.PLACEHOLDER}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    keyboardType={"numeric"}
                    style={[styles.textInput, isFocused ? styles.active : styles.disabled]}
                    dense={true}
                    mode="flat"
                    underlineColor="transparent"
                    activeUnderlineColor="transparent"
                />
                <TouchableOpacity style={styles.txtBtn}>
                    <Text style={styles.btnTxt}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddOrderCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.THEME,
        marginHorizontal: moderateScale(20),
        borderRadius: scale(12),
        flexDirection: "row",
        alignItems: 'stretch',
        marginBottom: verticalScale(10),
        paddingEnd: moderateScale(10),
    },

    iconContainer: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        borderTopLeftRadius: scale(12),
        borderBottomLeftRadius: scale(12),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        alignSelf: 'stretch'
    },

    dataContainer: {
        marginEnd: moderateScale(20),
        flex: 5,
        paddingLeft: moderateScale(15),
        paddingTop: verticalScale(10)
    },
    quantityContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iceCreamName: {
        color: Colors.WHITE,
        fontSize: scale(14),
        fontWeight: "800",
        marginBottom: verticalScale(5),
    },
    stockTxt: {
        color: Colors.RED,
        fontSize: scale(14),
        fontWeight: "500",
    },
    priceTxt: {
        color: Colors.WHITE,
        fontSize: scale(14),
        fontWeight: "300"
    },
    itemInsideTxt: {
        color: Colors.WHITE,
        marginTop: verticalScale(2),
        fontSize: scale(14),
        fontWeight: "300"
    },
    textInput: {
        borderWidth: scale(1),
        color: Colors.BLACK,
        width: scale(80),
        height: scale(30),
        backgroundColor: Colors.WHITE,
        textAlign: 'center',
        marginEnd: moderateScale(6),
        marginTop: verticalScale(10),
        borderBottomRightRadius: scale(5),
        borderBottomLeftRadius: scale(5),
        borderTopLeftRadius: scale(5),
        borderTopRightRadius: scale(5)
    },
    active: {
        borderColor: Colors.THEME_TRANSPARENT,
        borderWidth: scale(2)
    },
    disabled: {
        borderColor: Colors.BLACK
    },

    txtBtn: {
        backgroundColor: Colors.THEME_TRANSPARENT,
        marginEnd: moderateScale(6),
        alignSelf: "center",
        marginVertical: verticalScale(10),
        width: scale(76),
        paddingVertical: verticalScale(6),
        borderRadius: scale(8),
    },
    btnTxt: {
        fontSize: scale(14),
        fontWeight: "500",
        color: Colors.WHITE,
        alignSelf: "center"
    }
})