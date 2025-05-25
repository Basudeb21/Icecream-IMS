import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../../constants';
import { AddNewShopScreen, CategoriesScreen, CategoriesWiseProductScreen } from '../../screens/app/shop';
import { OrderDetails } from '../../screens/app/orders';




const SubStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.ADD_NEW_SHOP} component={AddNewShopScreen} />
            <Stack.Screen name={NavigationStrings.CATEGORIES_SCREEN} component={CategoriesScreen} />
            <Stack.Screen name={NavigationStrings.PRODUCT_BY_CATEGORY} component={CategoriesWiseProductScreen} />
            <Stack.Screen name={NavigationStrings.ORDER_DETAILS} component={OrderDetails} />
        </Stack.Navigator>
    )
}

export default SubStack