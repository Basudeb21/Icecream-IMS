import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../../../constants';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { StripedTable } from '../../../../components/framework';

const ProductArea = ({ items }) => {
    const productData = items.map((item, index) => ({
        id: `#${index + 1}`,
        name: item.product_billing_name,
        qty: item.quantity,
        price: item.total_price,
    }));

    const productHeadings = [
        { key: 'id', title: '#', width: '10%', align: 'center' },
        { key: 'name', title: 'Name', width: '40%', align: 'center' },
        { key: 'qty', title: 'Qty', width: '20%', align: 'center' },
        { key: 'price', title: 'Price', width: '30%', align: 'right', bold: true },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: verticalScale(50) }}>
                <Text style={styles.header}>Product Details</Text>
                <StripedTable tHead={productHeadings} data={productData} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ProductArea;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: moderateScale(16),
        marginTop: verticalScale(15),
        marginBottom: verticalScale(50)
    },
    header: {
        fontSize: scale(14),
        fontWeight: 'bold',
        marginBottom: verticalScale(12),
        marginStart: moderateScale(15),
        textAlign: "left",
        color: Colors.GRAY,
    },
    table: {
        minWidth: scale(320),
        borderRadius: scale(10),
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.TABLE_BORDER, // Light border color for the whole table
    },
    row: {
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.ROW_BORDER, // Light row border
    },
    headerRow: {
        backgroundColor: Colors.TABLE_HEAD,
        elevation: 2,
        borderBottomWidth: 1,
        borderBottomColor: Colors.HEADER_BORDER,
    },
    evenRow: {
        backgroundColor: Colors.LIGHT_GRAY
    },
    oddRow: {
        backgroundColor: Colors.WHITE
    },
    cell: {
        fontSize: scale(13),
        color: Colors.BLACK,
        paddingHorizontal: scale(4),
    },
    headerText: {
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
    id: {
        flex: 1,
        textAlign: 'center',
    },
    name: {
        flex: 3,
    },
    qty: {
        flex: 1,
        textAlign: 'center',
    },
    price: {
        flex: 2,
        textAlign: 'right',
        fontWeight: '600',
    },
});
