interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    cpf: string;
    isAdmin?: boolean;
    created_at: Date;
    updated_at: Date;
    avatar?: string;
    id?: string;
}

export { ICreateUserDTO };
