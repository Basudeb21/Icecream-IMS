import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HR, Spacer } from '../framework'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Colors } from '../../constants'

const ProfileDataHolder = ({ userData, Icon, iconName }) => {
    return (
        <View>
            <View style={styles.singleData}>
                <Icon
                    name={iconName}
                    size={22}
                />
                <Spacer width={5} />
                <Text style={styles.data}>{userData}</Text>
            </View>
            <HR width='90%' color={Colors.DISABLED_NAVIGATION_COLOR} height={1} center={true} />
            <Spacer height={5} />
        </View>
    )
}

export default ProfileDataHolder

const styles = StyleSheet.create({

    singleData: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(15)
    },
    data: {
        fontSize: scale(18),
        fontWeight: "400",
        marginTop: verticalScale(5),
        color: Colors.BLACK
    },
})