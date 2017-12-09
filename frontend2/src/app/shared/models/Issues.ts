export interface CreateIssue {
    title: string;
    description: string;
    location: {
        longitude: number,
        latitude: number
    };
    photos: [string];
}
