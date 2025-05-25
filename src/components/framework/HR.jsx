import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants'

const HR = ({ height = 2, width = "100%", color, center = false }) => {
    return (
        <View style={{ alignSelf: center ? "center" : "flex-start", height: height, backgroundColor: color || Colors.RED, width: width }} />
    )
}

export default HR