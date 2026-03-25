export type UserData = {
    id: number;
    email: string;
    username: string;
    avatarUrl: string;
    isPro: boolean;
    token: string;
};

export type AuthData = {
    email: string;
    password: string;
};