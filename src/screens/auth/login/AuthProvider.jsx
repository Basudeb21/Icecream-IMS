import React, { createContext, useEffect, useState } from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import LogMeOut from '../../../api/auth/LogMeOut';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    const checkLoginStatus = async () => {
        try {
            const tokenData = await EncryptedStorage.getItem('login_token');
            setIsLoggedIn(!!tokenData);
        } catch (error) {
            console.error('Auth Check Error:', error);
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const login = async (token) => {
        await EncryptedStorage.setItem('login_token', JSON.stringify({ token }));
        setIsLoggedIn(true);
    };

    const logout = async () => {
        await LogMeOut();
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
