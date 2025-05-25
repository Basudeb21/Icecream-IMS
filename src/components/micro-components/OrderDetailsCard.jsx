import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Colors, Strings } from '../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import OrderDetailsModal from './OrderDetailsModal';

const OrderDetailsCard = ({ orderedItem }) => {
    const [isModalShown, setIsModalShown] = useState(false);

    return (
        <View style={styles.card}>
            <View style={styles.detailsContainer}>
                <Text style={styles.shopName}>{orderedItem.shop_name}</Text>
                <Text style={styles.orderID}>{orderedItem.order_number}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => setIsModalShown(!isModalShown)}
                >
                    <Entypo
                        name="info-with-circle"
                        size={24}
                        color={Colors.WHITE}
                    />
                </TouchableOpacity>
            </View>

            <OrderDetailsModal
                visible={isModalShown}
                onClose={() => setIsModalShown(!isModalShown)}
                data={orderedItem}
            />
        </View>
    );
};

export default OrderDetailsCard;
const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: moderateScale(30),
        backgroundColor: Colors.THEME,
        borderLeftWidth: scale(15),
        borderRightWidth: scale(15),
        padding: scale(20),
        borderColor: Colors.THEME_TRANSPARENT,
        marginTop: verticalScale(15),
        borderRadius: scale(12)
    },
    detailsContainer: {
        flex: 9,
        justifyContent: "center"
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    iconButton: {
        alignItems: "center",
        justifyContent: "center"
    },
    shopName: {
        fontSize: scale(15),
        fontWeight: "700",
        color: Colors.WHITE,
    },
    orderID: {
        fontSize: scale(12),
        fontWeight: "700",
        color: Colors.WHITE,
    }
})