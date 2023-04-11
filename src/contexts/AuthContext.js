import React, { useState, useContext, createContext } from 'react';

export const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [isAuth, toggleIsAuth] = useState({ isAuth: false, user: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(null);


    const value = {
        isAuth,
        toggleIsAuth,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;