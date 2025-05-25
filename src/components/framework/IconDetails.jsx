import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../../constants'

const IconDetails = ({ Icon, name, size, color, desc, fontColor }) => {
    return (
        <View style={{ flexDirection: "row", marginVertical: verticalScale(5) }}>
            <Icon
                name={name}
                size={scale(size || 10)}
                color={color || Colors.WHITE}
            />
            <Text style={{ fontSize: scale(size), marginStart: moderateScale(10), color: fontColor || Colors.WHITE }}>{desc}</Text>
        </View>
    )
}

export default IconDetails