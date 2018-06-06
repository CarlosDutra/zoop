import { Endpoint } from './endpoint';
import { Marketplace } from './marketplace';

export interface BuyerCreationInfo {
    first_name: string;
    last_name: string;
    taxpayer_id: string;
    description?: string;
    email: string;
    phone_number?: string;
    facebook?: string;
    twitter?: string;
    address: {
        line1: string;
        line2?: string;
        line3?: string;
        neighborhood: string;
        city: string;
        state: string;
        postal_code: string;
        country_code: string;
    };
    metadata?: any;
}

export interface BuyerInfo {
    id: string;
    status: string;
    resource: 'buyer';
    account_balance: string;
    current_balance: string;
    first_name: string;
    last_name: string;
    taxpayer_id: string;
    description: string | null;
    email: string;
    phone_number: string | null;
    facebook: string | null;
    twitter: string | null;
    address: {
        line1: string;
        line2: string | null;
        line3: string | null;
        neighborhood: string;
        city: string;
        state: string;
        postal_code: string;
        country_code: string;
    };
    delinquent: boolean;
    payment_methods: any | null;
    default_debit: any | null;
    default_credit: any | null;
    default_receipt_delivery_method: any | null;
    uri: string;
    metadata: any;
}

export class Buyer extends Endpoint<BuyerInfo> {
    constructor(marketplace: Marketplace, id: string) {
        super(marketplace.base + `/buyers/${id}`, marketplace.apiKey);
    }

    async get() {
        return this.request('GET');
    }
}