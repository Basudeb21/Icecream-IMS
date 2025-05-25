import { FlatList, StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Header, InputBoxWithLabel, Loader, SubmitButton } from '../../../components/framework'
import { ActivityIndicator } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { Colors } from '../../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetExpencesHead } from '../../../api/app-funtion';
import { verticalScale, moderateScale } from 'react-native-size-matters';

const Expences = () => {
    const [allExpences, setAllExpences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [amounts, setAmounts] = useState({}); // To store entered amounts

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const handleAmountChange = (id, value) => {
        setAmounts(prev => ({
            ...prev,
            [id]: value
        }));
    };

    useFocusEffect(
        useCallback(() => {
            const fetchExpences = async () => {
                setLoading(true);
                try {
                    const data = await GetExpencesHead();
                    if (data) {
                        setAllExpences(data);
                        // Initialize amounts state
                        const initialAmounts = {};
                        data.forEach(item => {
                            initialAmounts[item.id] = '';
                        });
                        setAmounts(initialAmounts);
                    }
                } catch (error) {
                    console.error("Failed to load expenses", error);
                }
                setLoading(false);
            };
            fetchExpences();
        }, [])
    );

    const handleSubmit = () => {
        // Process the amounts here
        console.log('Submitted amounts:', amounts);
        // Add your submission logic
    };

    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <SafeAreaView style={styles.container}>
                <Header name="All Expenses" isSerchReq={false} />

                <FlatList
                    data={allExpences}
                    contentContainerStyle={styles.listContainer}
                    keyboardShouldPersistTaps="handled"
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <InputBoxWithLabel
                            placeholder='Enter expense amount'
                            label={capitalizeFirstLetter(item.name)}
                            width='90%'
                            type='number'
                            value={amounts[item.id] || ''}
                            onChangeText={(text) => handleAmountChange(item.id, text)}
                            containerStyle={styles.inputContainer}
                            inputStyle={styles.deactiveInput}
                        />
                    )}
                    ListFooterComponent={
                        <View style={styles.buttonWrapper}>
                            <SubmitButton
                                text="SAVE EXPENSES"
                                onPress={handleSubmit}
                                style={styles.submitButton}
                            />
                        </View>
                    }
                />
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Expences;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    contentContainer: {
        flex: 1,
        paddingBottom: verticalScale(20),
    },
    buttonWrapper: {
        marginHorizontal: moderateScale(20),
        marginTop: verticalScale(20),
    },

    listContainer: {
        paddingBottom: verticalScale(80), // Space for button
        paddingTop: verticalScale(10),
    },
    inputContainer: {
        marginVertical: verticalScale(8),
    },
    deactiveInput: {
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY, // Add this to your Colors constants
        backgroundColor: Colors.WHITE,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: verticalScale(20),
        left: 0,
        right: 0,
        paddingHorizontal: moderateScale(20),
    },
    submitButton: {
        width: '100%',
    },
    footer: {
        height: verticalScale(20),
    },
});