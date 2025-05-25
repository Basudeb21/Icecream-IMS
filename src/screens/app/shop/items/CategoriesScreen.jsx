import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { CategoriesShopInfoCard, ItemCard } from '../../../../components/micro-components'
import { Header, Loader, Spacer } from '../../../../components/framework'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { scale, verticalScale } from 'react-native-size-matters'
import { ActivityIndicator } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, NavigationStrings } from '../../../../constants'
import { GetCategories } from '../../../../api/app-funtion'

const CategoriesScreen = ({ route }) => {

    const [allCategories, setAllCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            const fetchCategories = async () => {
                setLoading(true);
                try {
                    const data = await GetCategories();
                    if (data) {
                        setAllCategories(data);
                    }
                } catch (error) {
                    console.error("Failed to load shops", error);
                }
                setLoading(false);
            };
            fetchCategories();
        }, [])
    );

    const handelOnPress = item => {
        navigation.navigate(NavigationStrings.SUB_STACK, {
            screen: NavigationStrings.PRODUCT_BY_CATEGORY,
            params: {
                info: item
            }
        })
    }

    if (loading) {
        return (
            <Loader />
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header name={"Categories Page"} isSerchReq={false} />
            <CategoriesShopInfoCard storeInfo={route.params?.info} />
            <Spacer height={20} />
            <FlatList
                data={allCategories}
                contentContainerStyle={styles.listContainer}
                keyboardShouldPersistTaps="handled"
                numColumns={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemCard
                        itemName={item.name}
                        onPress={() => handelOnPress(item)}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    listContainer: {
        paddingBottom: verticalScale(60),
        paddingHorizontal: scale(10),
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