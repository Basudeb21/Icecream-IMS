import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationStrings } from '../../constants';
import BottomNavBar from '../../components/framework/BottomNavBar';
import SubStack from './SubStack';



const MainStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.BOTTOM_NAV} component={BottomNavBar} />
            <Stack.Screen name={NavigationStrings.SUB_STACK} component={SubStack} />
        </Stack.Navigator>
    )
}

export default MainStack