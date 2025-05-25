import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AddOrderCard } from '../../../../components/micro-components'
import { Header, Loader, Spacer } from '../../../../components/framework'
import { GetProductsByID } from '../../../../api/app-funtion'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const CategoriesWiseProductScreen = ({ route }) => {
    const categoryId = route.params.info.id;
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await GetProductsByID(categoryId);
                setProducts(data);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    const renderProductCard = ({ item }) => (
        <AddOrderCard
            productName={item.name}
            stock={item.quantity}
            price={item.total_price}
            count={item.box_quantity}
        />
    );



    return (
        <View style={styles.container}>
            <Header name={"Category Wise Product"} isSerchReq={false} />
            <Spacer height={1} />

            {loading ? (
                <Loader />
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.product_id.toString()}
                    renderItem={renderProductCard}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No products found.</Text>
                    }
                />
            )}
        </View>
    );
}

export default CategoriesWiseProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BACKGROUND,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 14,
        fontWeight: '500',
    },
    listContent: {
        paddingBottom: 20,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: Colors.GREY,
    }
})