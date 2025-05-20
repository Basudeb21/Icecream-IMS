import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FloatingActionButton, Header } from '../../../components/framework';
import { Colors, NavigationStrings } from '../../../constants';
import { verticalScale } from 'react-native-size-matters';
import { StoreCard } from '../../../components/micro-components';
import { GetAllShop } from '../../../api/app-funtion';

const AllShops = () => {
    const [allShops, setAllShop] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            const fetchShops = async () => {
                setLoading(true); // Start loading
                try {
                    const data = await GetAllShop();
                    if (data) {
                        setAllShop(data);
                    }
                } catch (error) {
                    console.error("Failed to load shops", error);
                }
                setLoading(false); // Done loading
            };
            fetchShops();
        }, [])
    );

    const filteredShops = allShops.filter((shop) =>
        shop?.shop_name?.toLowerCase().includes(searchText.toLowerCase()) ||
        shop?.owner_name?.toLowerCase().includes(searchText.toLowerCase()) ||
        shop?.whatsapp_number?.toLowerCase().includes(searchText.toLowerCase()) ||
        shop?.address?.toLowerCase().includes(searchText.toLowerCase())
    );

    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate(NavigationStrings.SUB_STACK, {
            screen: NavigationStrings.ADD_NEW_SHOP
        });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={65} color={Colors.THEME} />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FloatingActionButton onPress={handleOnPress} />
            <Header
                name="All shop"
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <FlatList
                data={filteredShops}
                contentContainerStyle={styles.listContainer}
                keyboardShouldPersistTaps="handled"
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <StoreCard
                        shopName={item.shop_name}
                        ownerName={item.owner_name}
                        phone={item.whatsapp_number}
                        location={item.address}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default AllShops;

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

});
