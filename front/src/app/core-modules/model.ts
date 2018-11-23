/* Email validation patten "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+(\.[A-Za-z]+)"  */

export interface IUserConfig {
    email?: string;
    usersUrl?: string;
    imgfile?: string;
}

export class User implements IUserConfig {
    email?: '';
    FirstName?: '';
    SecondName?: '';
}

export interface INotifyConifg {
    from: string;
    align: string;
    title: string;
    message: string;
    color: number;
    timer?: number;
    delay?: number;
}
