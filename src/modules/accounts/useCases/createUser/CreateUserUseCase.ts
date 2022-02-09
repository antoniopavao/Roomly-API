import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        password,
        cpf,
    }: ICreateUserDTO): Promise<void> {
        const userEmailExists = await this.usersRepository.findByEmail(email);
        const userCpfExists = await this.usersRepository.findByCpf(cpf);

        if (userEmailExists) {
            throw new AppError(`User with  ${email} already exists`, 401);
        } else if (userCpfExists) {
            throw new AppError(`User with ${cpf} already exists`, 401);
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            cpf,
        });
    }
}
export { CreateUserUseCase };
