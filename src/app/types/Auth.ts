export interface LoginForm{
    email: string,
    password: string
}

export interface RegisterForm{
    firstName: string,
    lastName: string,
    mobileNum?: number,
    email: string,
    password: string,
    confirm_password: string
}