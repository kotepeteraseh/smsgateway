
export enum ApiKeyStatus {
    Active = 'Active',
    Revoked = 'Revoked'
}

export interface ApiKey {
    id: string;
    client: string;
    key: string;
    status: ApiKeyStatus;
}

export interface SmsLog {
    id: string;
    phoneNumber: string;
    message: string;
    timestamp: string;
}
