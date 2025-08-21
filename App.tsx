import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import ApiKeysScreen from './screens/ApiKeysScreen';
import SmsLogsScreen from './screens/SmsLogsScreen';

const AppContent: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen flex items-center justify-center font-sans">
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/dashboard" element={<DashboardScreen />} />
                        <Route path="/api-keys" element={<ApiKeysScreen />} />
                        <Route path="/sms-logs" element={<SmsLogsScreen />} />
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                )}
            </Routes>
        </div>
    );
};

const App: React.FC = () => (
    <AuthProvider>
        <HashRouter>
            <AppContent />
        </HashRouter>
    </AuthProvider>
);

export default App;