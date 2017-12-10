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

export interface LoginUser {
    id: number;
    createdAt: string;
    password: string;
    email: string;
    name: string;
    radius: number;
    gender: number;
    age: number;
    role: number;
    location: {
        createdAt: string;
        id: number;
        longitude: number;
        latitude: number;
    };
}

export interface PendingUser {
    age: number;
    approvalStatus: number;
    createdAt: string;
    email: string;
    gender: number;
    id: number;
    name: string;
    radius: number;
    role: number;
    location: {
        createdAt: string;
        id: number;
        longitude: number;
        latitude: number;
    };
}
