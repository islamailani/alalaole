export interface RegisterUser {
    password: string;
    email: string;
    name: string;
    radius: number;
    gender: string;
    age: number;
    location: {
        longitude: number;
        latitude: number;
    };
}
