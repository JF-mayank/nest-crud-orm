import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(user: Partial<User>): Promise<User>;
    update(id: number, user: Partial<User>): Promise<User>;
    delete(id: number): Promise<void>;
}
