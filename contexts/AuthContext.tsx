
import React, { createContext, useState, useCallback, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = useCallback(() => {
        setIsAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
        setIsAuthenticated(false);
    }, []);

    const value = { isAuthenticated, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
