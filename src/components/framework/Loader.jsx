import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { ActivityIndicator } from 'react-native-paper'
import { Colors } from '../../constants'

const Loader = ({ text = "Loading..." }) => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={50} color={Colors.THEME} />
            <Text style={styles.loadingText}>{text}</Text>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    loadingText: {
        marginTop: moderateScale(16),
        fontSize: moderateScale(14),
        color: Colors.BLACK,
        fontWeight: '500',
    },
})