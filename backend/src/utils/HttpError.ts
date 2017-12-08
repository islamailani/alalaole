
export class HttpError extends Error {
    public name: string;
    public message: string;
    public stack?: string;
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}
