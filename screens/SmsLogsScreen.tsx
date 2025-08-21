
import React, { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import { SmsLog } from '../types';
import SearchIcon from '../components/icons/SearchIcon';
import Button from '../components/Button';

const MOCK_SMS_LOGS: SmsLog[] = [
    { id: '1', phoneNumber: '+1234567890', message: 'Hello from SMS Gateway!', timestamp: '2023-10-27T10:00:00Z' },
    { id: '2', phoneNumber: '+1987654321', message: 'Welcome to our service.', timestamp: '2023-10-27T10:01:00Z' },
    { id: '3', phoneNumber: '+1234567890', message: 'Test message.', timestamp: '2023-10-27T10:02:00Z' },
    { id: '4', phoneNumber: '+1122334455', message: 'Your verification code is 123456', timestamp: '2023-10-27T10:03:00Z' },
    { id: '5', phoneNumber: '+1555444333', message: 'Appointment reminder for tomorrow.', timestamp: '2023-10-27T10:04:00Z' },
];

const SmsLogsScreen: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLogs = useMemo(() => {
        if (!searchTerm) return MOCK_SMS_LOGS;
        return MOCK_SMS_LOGS.filter(log =>
            log.phoneNumber.includes(searchTerm) ||
            log.message.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <Layout title="SMS Logs" showBackButton={true}>
            <div className="flex flex-col h-full">
                <div className="relative mb-4">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        icon={<SearchIcon />}
                        className="pl-10"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto border-t border-b">
                     <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                            <tr>
                                <th scope="col" className="px-4 py-3">Phone Number</th>
                                <th scope="col" className="px-4 py-3">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredLogs.map(log => (
                                <tr key={log.id} className="bg-white border-b">
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{log.phoneNumber}</td>
                                    <td className="px-4 py-3 text-gray-600 truncate max-w-[150px]">{log.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pt-4 mt-auto">
                    <Button variant="primary">FILTER</Button>
                </div>
            </div>
        </Layout>
    );
};

export default SmsLogsScreen;
