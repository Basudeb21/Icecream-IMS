// Routes.jsx
import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../../screens/auth/login/AuthProvider';

const Routes = () => {
    const { isLoggedIn } = useContext(AuthContext);

    if (isLoggedIn === null) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
