export interface User {
    code: number;
    userId: string;
    name: string;
    address: {
        addressLine: string;
        city: string | null;
        zipCode: string | null;
        country: string;
    };
    email: string;
    msisdn: number;
    locale: string;
    cardRequired: boolean;
    greenProfile: boolean;
    marketingPermission: boolean;
    smilStudyPermission: boolean;
    createdBy: number;
    admin: boolean;
    expires: number;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
}
export interface Card {
    userId: String;
    cardId: String;
    name: String;
    truncatedCardNumber: String;
    cardTypeId: Number;
    expiry: {
        month: Number;
        year: Number;
    };
    multipleCardNumbers: Boolean;
    externalCardId: String;
    origin: String;
}
export interface Directory {
}
export interface Price {
    amount: number;
    vat: number;
    currency: string;
    exchangeRate: number | null;
    vatPercentage: number;
    vatRates?: {
        rate: number;
        value: number;
    }[];
}
export interface Merchant {
    merchantId: string;
    storeId: string;
    name: string;
    address: string;
    address2: string;
    zipCode: string;
    city: string;
    phoneNumber: string;
    registrationNumber: string;
    logo: string | null;
    country: string;
}
export interface Payment {
    transactionId: null;
    type: string;
    price: Price;
    foreignPrice: null;
    card: Card;
}
export interface ReceiptLine {
    receiptLineId: string;
    lineNumber: number;
    productNumber: string;
    name: string;
    description: string | null;
    count: number;
    itemPrice: Price;
    totalPrice: Price;
    category: 84;
}
export interface Receipt {
    id: number;
    type: string;
    receiptId: string;
    purchaseDate: number;
    purchaseDateTimeString: string;
    orderNumber: string;
    price: Price;
    merchant: Merchant;
    receiptLines: ReceiptLine[];
    terminalId: string;
    payments: Payment[];
    barcode: {
        type: string;
        value: string;
        displayValue: string;
    };
    headerTexts: [];
    footerTexts: [];
    userIds: [];
    imageId: null;
    headerText: string;
    footerText: string;
}
export declare class Storebox {
    private client;
    constructor(cookie: string);
    private getResource;
    getCards(): Promise<Card[]>;
    getDirectories(): Promise<Directory[]>;
    getReceipts(count: number, direction: string, directoryId: string, offset: number): Promise<Receipt[]>;
}
