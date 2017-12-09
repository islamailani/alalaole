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

export interface IssueView {
    id: number;
    description: string;
    score: number;
    title: string;
    location: {
        longitude: number,
        latitude: number
    };
    comments: [
        {
            id: number;
            text: string;
            createdAt: string;
            user: {
                name: string;
            }
        }
    ];
    photos: [
        {
            id: number;
            path: string;
        }];
    commentNumber: number;
    voteStatus: number;
    createdAt: string;
}
