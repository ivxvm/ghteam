export type LookupStatus = "idle" | "pending" | "success" | "failure";

export interface User {
    username: string;
    fullname?: string;
    avatar: string;
    role?: string;
};
