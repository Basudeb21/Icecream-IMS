import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '../../../../components/framework'
import { OrderDetailsCard } from '../../../../components/micro-components'
import ProductArea from './ProductArea'
import { GetOrderedItems } from '../../../../api/app-funtion'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const OrderDetails = ({ route }) => {
    const orderedItem = route.params;
    const [orderedItems, setOrderedItems] = useState([])

    useEffect(() => {
        const loadItems = async () => {
            const items = await GetOrderedItems(orderedItem.id);
            console.log('Fetched ordered items:', items);
            if (items) {
                setOrderedItems(items);
            }
        };
        loadItems();
    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header isSerchReq={false} name={"Order Details"} />

            <ScrollView
                contentContainerStyle={{
                    paddingTop: verticalScale(10),
                    paddingBottom: verticalScale(5),
                }}
            >
                <OrderDetailsCard orderedItem={orderedItem} />
                <ProductArea items={orderedItems} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderDetails