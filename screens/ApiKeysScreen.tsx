
import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import { ApiKey, ApiKeyStatus } from '../types';

const MOCK_API_KEYS: ApiKey[] = [
    { id: '1', client: 'App1', key: '1234abcd5678efgfi', status: ApiKeyStatus.Active },
    { id: '2', client: 'App2', key: '9876xy2432lmno', status: ApiKeyStatus.Revoked },
    { id: '3', client: 'App3', key: 'qwerty9876uiop', status: ApiKeyStatus.Active },
];

const ApiKeyCard: React.FC<{ apiKey: ApiKey; isSelected: boolean; onSelect: () => void; }> = ({ apiKey, isSelected, onSelect }) => {
    const statusColor = apiKey.status === ApiKeyStatus.Active ? 'text-green-600' : 'text-red-600';
    return (
        <div 
          className={`bg-white p-4 rounded-lg border transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-500' : 'border-gray-200'}`}
          onClick={onSelect}
        >
            <p className="text-gray-500 text-sm">Client: {apiKey.client}</p>
            <p className="text-gray-800 font-mono break-all">Key: {apiKey.key}</p>
            <p className={`font-semibold mt-2 ${statusColor}`}>{apiKey.status}</p>
        </div>
    );
};

const ApiKeysScreen: React.FC = () => {
    const [apiKeys, setApiKeys] = useState<ApiKey[]>(MOCK_API_KEYS);
    const [selectedKeyId, setSelectedKeyId] = useState<string | null>(null);

    const generateNewKey = () => {
        const newKey: ApiKey = {
            id: (apiKeys.length + 1).toString(),
            client: `App${apiKeys.length + 1}`,
            key: Math.random().toString(36).substring(2, 15),
            status: ApiKeyStatus.Active
        };
        setApiKeys([newKey, ...apiKeys]);
    };

    const revokeSelected = () => {
        if (!selectedKeyId) return;
        setApiKeys(keys => keys.map(key => 
            key.id === selectedKeyId ? { ...key, status: ApiKeyStatus.Revoked } : key
        ));
        setSelectedKeyId(null);
    };

    const selectedKey = useMemo(() => {
        return apiKeys.find(key => key.id === selectedKeyId);
    }, [apiKeys, selectedKeyId]);

    return (
        <Layout title="API Keys" showBackButton={true}>
            <div className="flex flex-col h-full">
                <div className="flex-grow overflow-y-auto pr-2 space-y-4">
                    {apiKeys.map(key => (
                        <ApiKeyCard 
                            key={key.id} 
                            apiKey={key} 
                            isSelected={selectedKeyId === key.id}
                            onSelect={() => setSelectedKeyId(key.id === selectedKeyId ? null : key.id)}
                        />
                    ))}
                </div>
                <div className="pt-4 space-y-3 border-t mt-4">
                    <Button variant="primary" onClick={generateNewKey}>
                        Generate New Key
                    </Button>
                    <Button 
                        variant="secondary" 
                        onClick={revokeSelected}
                        disabled={!selectedKey || selectedKey.status === ApiKeyStatus.Revoked}
                        className="disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Revoke Selected
                    </Button>
                </div>
            </div>
        </Layout>
    );
};

export default ApiKeysScreen;
