export interface Mobile {
    data:   Data;
}

export interface Data {
    phones: Phone[];
}

export interface Phone {
    phone_name: string;
    hits:       number;
    favorites:  number;
}
