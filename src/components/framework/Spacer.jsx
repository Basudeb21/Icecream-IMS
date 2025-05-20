import { View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const Spacer = ({ height = 0, width = 0 }) => {
    return (
        <View style={{ marginHorizontal: moderateScale(width), marginVertical: verticalScale(height) }} />
    )
}

export default Spacer
