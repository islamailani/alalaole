export interface RegisterUser {
    password: string;
    email: string;
    name: string;
    radius: number;
    gender: number;
    age: number;
    location: {
        longitude: number;
        latitude: number;
    };
}
