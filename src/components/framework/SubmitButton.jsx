import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../../constants'

const SubmitButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.txt}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.THEME,
        marginHorizontal: moderateScale(40),
        borderWidth: scale(2),
        borderColor: Colors.THEME,
        paddingVertical: verticalScale(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scale(12)
    },
    txt: {
        fontSize: scale(16),
        alignSelf: "center",
        color: Colors.WHITE,
        fontWeight: "600"
    }
})