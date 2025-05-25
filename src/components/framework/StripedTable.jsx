// components/StripedTable.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Colors } from '../../constants';

const StripedTable = ({ tHead = [], data = [], striped = true }) => {
    return (
        <View style={styles.table}>
            <View style={[styles.row, styles.headerRow]}>
                {tHead.map((head, idx) => (
                    <Text
                        key={idx}
                        style={[
                            styles.cell,
                            styles.headerText,
                            { width: head.width || '25%', textAlign: head.align || 'left' },
                        ]}
                    >
                        {head.title}
                    </Text>
                ))}
            </View>

            {data.map((row, rowIndex) => (
                <View
                    key={rowIndex}
                    style={[
                        styles.row,
                        striped && rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
                    ]}
                >
                    {tHead.map((head, cellIndex) => (
                        <Text
                            key={cellIndex}
                            style={[
                                styles.cell,
                                {
                                    width: head.width || '25%',
                                    textAlign: head.align || 'left',
                                    fontWeight: head.bold ? '600' : '400',
                                },
                            ]}
                            numberOfLines={1}
                        >
                            {row[head.key]}
                        </Text>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default StripedTable;

const styles = StyleSheet.create({
    table: {
        borderWidth: 1,
        borderColor: Colors.TABLE_BORDER,
        borderRadius: scale(8),
        overflow: 'hidden',
    },
    row: {
        flexDirection: 'row',
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(10),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.ROW_BORDER,
    },
    headerRow: {
        backgroundColor: Colors.TABLE_HEAD,
    },
    evenRow: {
        backgroundColor: Colors.LIGHT_GRAY,
    },
    oddRow: {
        backgroundColor: Colors.WHITE,
    },
    cell: {
        fontSize: scale(13),
        color: Colors.BLACK,
    },
    headerText: {
        fontWeight: 'bold',
        color: Colors.WHITE,
    },
});
