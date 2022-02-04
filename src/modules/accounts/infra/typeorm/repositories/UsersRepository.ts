import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create(data: ICreateUserDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
}
