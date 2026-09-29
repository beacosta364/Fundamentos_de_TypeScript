export interface Address {
city: string;
}

export interface User {
id: number;
name: string;
username: string;
email: string;
address: Address;
}
