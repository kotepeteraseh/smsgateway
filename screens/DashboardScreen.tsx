
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="text-4xl font-bold text-gray-800">{value}</p>
    </div>
);

const DashboardScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Layout title="SMS Gateway Dashboard">
            <div className="flex-grow flex flex-col justify-between">
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <StatCard label="Sent Today" value={120} />
                        <StatCard label="Failed" value={5} />
                    </div>
                    <StatCard label="Active Keys" value={8} />
                </div>
                <div className="space-y-3">
                    <Button variant="primary" onClick={() => navigate('/api-keys')}>
                        Manage API Keys
                    </Button>
                    <Button variant="secondary" onClick={() => navigate('/sms-logs')}>
                        View SMS Logs
                    </Button>
                    <Button variant="secondary" onClick={() => alert('Manage Clients clicked!')}>
                        Manage Clients
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default DashboardScreen;
