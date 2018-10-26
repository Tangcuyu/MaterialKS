export interface IUserConfig {
    email: string;
    usersUrl?: string;
    imgfile?: string;
}

export class User implements IUserConfig {
    email: '';
}
