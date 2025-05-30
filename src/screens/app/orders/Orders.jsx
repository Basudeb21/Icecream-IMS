import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { OrderCard } from '../../../components/micro-components'
import { Header, Loader } from '../../../components/framework'
import { GetAllOrder } from '../../../api/app-funtion'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Colors, NavigationStrings } from '../../../constants'
import { verticalScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'

const Orders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation()
    const handelOnPress = (item) => {
        navigation.navigate(NavigationStrings.SUB_STACK, {
            screen: NavigationStrings.ORDER_DETAILS,
            params: item
        })
    }

    useFocusEffect(
        useCallback(() => {
            const fetchOrders = async () => {
                setLoading(true);
                try {
                    const data = await GetAllOrder();
                    if (data) {
                        setAllOrders(data);
                    }
                } catch (error) {
                    console.error("Failed to load shops", error);
                }
                setLoading(false);
            };
            fetchOrders();
        }, [])
    );

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                name="All Orders"
                isSerchReq={false}
            />
            <FlatList
                data={allOrders}
                contentContainerStyle={styles.listContainer}
                keyboardShouldPersistTaps="handled"
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderCard
                        onPress={() => handelOnPress(item)}
                        date={item.created_at}
                        shopName={item.shop_name}
                        paymentMehod={item.payment_mode}
                        ammount={item.grand_total}
                        paymentStatus={item.is_paid == 1 ? "Full Paid" : "Not Paid"}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    listContainer: {
        paddingBottom: verticalScale(60),
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 16,
        fontSize: 14,
        color: Colors.BLACK,
        fontWeight: '500',
    },
})