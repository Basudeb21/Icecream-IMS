import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavigationStrings from '../../constants/all-constants/NavigationStrings';
import { AllShops, Expences, Orders } from '../../screens/app';
import Strings from '../../constants/all-constants/Strings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Logout } from '../../screens/auth';
import { Colors } from '../../constants';
import { verticalScale } from 'react-native-size-matters';



const BottomNavBar = ({ route }) => {
    const { setIsLoggedIn } = route.params || {};
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.navBar,
                tabBarActiveTintColor: Colors.ACTIVE_NAVIGATION_COLOR,
                tabBarInactiveTintColor: Colors.DISABLED_NAVIGATION_COLOR,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name={NavigationStrings.ALL_SHOP}
                component={AllShops}
                options={{
                    tabBarLabel: Strings.ALL_SHOP,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="store"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.EXPENCES}
                component={Expences}
                options={{
                    tabBarLabel: Strings.EXPENCES,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="attach-money"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.ALL_ORDERS}
                component={Orders}
                options={{
                    tabBarLabel: Strings.OREDERS,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome5
                            name="tasks"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={NavigationStrings.LOGOUT}
                component={Logout}
                options={{
                    tabBarLabel: Strings.LOGOUT,
                    tabBarIcon: ({ focused }) => (
                        <MaterialIcons
                            name="logout"
                            size={24}
                            color={focused ? Colors.ACTIVE_NAVIGATION_COLOR : Colors.DISABLED_NAVIGATION_COLOR}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavBar

const styles = StyleSheet.create({
    navBar: {
        paddingVertical: verticalScale(5)
    }
})