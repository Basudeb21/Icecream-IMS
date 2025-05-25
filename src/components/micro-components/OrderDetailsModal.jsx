import React from 'react';
import { Modal, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Colors, Strings } from '../../constants';
import { StripedTable } from '../framework';

const OrderDetailsModal = ({ visible, onClose, data }) => {

    const orderHeaders = [
        { key: 'id', title: '#', width: '10%' },
        { key: 'label', title: 'Label', width: '37%' },
        { key: 'value', title: 'Value', width: '55%', bold: true },
    ];

    const orderSummaryData = [
        { id: "#1", label: 'Order ID', value: data.order_number },
        { id: "#2", label: 'Total Product', value: data.total_product_count },
        { id: "#3", label: 'Sub Total', value: `${Strings.RS_SYMBOL + " " + data.sub_total}/-` },
        { id: "#4", label: 'Discount', value: `${Strings.RS_SYMBOL + " " + data.discount}/-` },
        { id: "#5", label: 'GST', value: `${Strings.RS_SYMBOL + " " + data.gst}/-` },
        { id: "#6", label: 'Grand Total', value: `${Strings.RS_SYMBOL + " " + data.grand_total}/-` },
        { id: "#7", label: 'Payment Method', value: data.payment_mode },
        ...(data.payment_mode === "Online&Cash"
            ? [
                { id: "#8", label: 'Cash Payment', value: `${Strings.RS_SYMBOL + " " + data.cash}/-` },
                { id: "#9", label: 'Online Method', value: `${Strings.RS_SYMBOL + " " + data.online}/-` },
            ]
            : [])
    ];



    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.header}>Order Summary</Text>
                    <ScrollView style={styles.table}>
                        <StripedTable tHead={orderHeaders} data={orderSummaryData} />
                    </ScrollView>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
                            <Text style={styles.btnTxt}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewButtonContainer} onPress={onClose}>
                            <Text style={styles.btnTxt}>View Bill</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default OrderDetailsModal;

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: Colors.TRANSPARENT,
        justifyContent: 'flex-end',
    },
    modal: {
        backgroundColor: Colors.WHITE,
        paddingVertical: scale(20),
        paddingHorizontal: scale(15),
        width: '100%',
        borderTopLeftRadius: scale(25),
        borderTopRightRadius: scale(25),
        maxHeight: '90%',
    },
    header: {
        fontSize: scale(16),
        fontWeight: '700',
        marginBottom: scale(10),
        textAlign: 'center',
    },
    table: {
        marginBottom: scale(20),
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: Colors.FADE,
        paddingVertical: scale(6),
        borderTopLeftRadius: scale(8),
        borderTopRightRadius: scale(8),
    },
    headerText: {
        fontWeight: '700',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: scale(8),
        borderBottomWidth: 1,
        borderBottomColor: Colors.ROW,
        alignItems: 'center',
    },
    cell: {
        paddingHorizontal: scale(5),
        fontSize: scale(13),
        color: Colors.BLACK,
    },
    id: {
        width: '15%',
        textAlign: 'center',
    },
    contentName: {
        width: '40%',
    },
    contentDescription: {
        width: '45%',
        fontWeight: '600',
    },
    closeButtonContainer: {
        alignItems: 'center',
        backgroundColor: Colors.DELETE,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(25),
        paddingVertical: verticalScale(6),
        borderRadius: scale(10)
    },
    viewButtonContainer: {
        alignItems: 'center',
        backgroundColor: Colors.THEME_LIGHT,
        alignSelf: "flex-start",
        paddingHorizontal: moderateScale(25),
        paddingVertical: verticalScale(6),
        borderRadius: scale(10)
    },
    btnTxt: {
        color: Colors.WHITE,
        fontWeight: "700",
        fontSize: scale(16)
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});
