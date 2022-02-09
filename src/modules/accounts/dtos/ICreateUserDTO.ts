interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    cpf: string;
    avatar?: string;
    id?: string;
}

export { ICreateUserDTO };
