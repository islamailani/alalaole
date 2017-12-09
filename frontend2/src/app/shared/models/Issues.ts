export interface CreateIssue {
    title: string;
    description: string;
    location: {
        longitude: number,
        latitude: number
    };
    photos: number[];
}

export interface Issue {
    id: number;
    title: string;
    description: string;
    location: {
        longitude: number,
        latitude: number
    };
    score: number;
    voteStatus: number;
    photos: [
        {
            id: number;
            path: string;
        }];
    commentNumber: number;
}
