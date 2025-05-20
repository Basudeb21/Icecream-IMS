import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale } from 'react-native-size-matters';
import { Colors } from '../../constants';

const InputBox = ({ placeholder = "loading", type = "text", value, onChangeText }) => {
    const [isFocused, setIsFocused] = useState(false)
    const getKeyboardType = () => {
        switch (type) {
            case 'email':
                return 'email-address';
            case 'number':
                return 'numeric';
            case 'phone':
                return 'phone-pad';
            default:
                return 'default';
        }
    };

    const isSecure = type === 'password';
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={Colors.PLACEHOLDER}
                secureTextEntry={isSecure}
                onChangeText={onChangeText}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                keyboardType={getKeyboardType()}
                style={[styles.textInput, isFocused ? styles.active : styles.disabled]}

            />
        </View>
    )
}

export default InputBox

const styles = StyleSheet.create({
    textInput: {
        borderWidth: scale(1),
        marginHorizontal: moderateScale(40),
        padding: scale(10),
        borderRadius: scale(12),
        borderColor: 'transparent',
        color: Colors.BLACK,
    },
    active: {
        borderColor: Colors.THEME,
        borderWidth: scale(2)
    },
    disabled: {
        borderColor: Colors.BLACK
    }
})