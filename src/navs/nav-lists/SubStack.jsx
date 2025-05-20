import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../../constants';
import { AddNewShopScreen } from '../../screens/app/shop';



const SubStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.ADD_NEW_SHOP} component={AddNewShopScreen} />
        </Stack.Navigator>
    )
}

export default SubStack