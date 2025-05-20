import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../../constants'

const InputBoxWithLabel = ({ label, placeholder, type = 'text', value, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false)

    const getKeyboardType = () => {
        switch (type) {
            case 'email':
                return 'email-address'
            case 'number':
                return 'numeric'
            case 'phone':
                return 'phone-pad'
            default:
                return 'default'
        }
    }

    const isSecure = type === 'password'

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.PLACEHOLDER}
                keyboardType={getKeyboardType()}
                secureTextEntry={isSecure}
                onChangeText={onChangeText}
                value={value}
                style={[
                    styles.textInput,
                    isFocused && styles.textInputFocused // Apply border style only when focused
                ]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </View>
    )
}

export default InputBoxWithLabel

const styles = StyleSheet.create({
    container: {
        marginTop: verticalScale(10),
        width: '48%'
    },
    label: {
        marginStart: moderateScale(15),
        marginBottom: verticalScale(5),
        color: Colors.LABEL,
        fontWeight: '500'
    },
    textInput: {
        paddingStart: scale(10),
        borderRadius: scale(8),
        backgroundColor: Colors.WHITE,
        width: moderateScale(160),
        marginStart: moderateScale(10)
    },
    textInputFocused: {
        borderWidth: 1.5,
        borderColor: Colors.THEME
    }
})
