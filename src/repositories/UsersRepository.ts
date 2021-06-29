import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository()
class UsersRepository extends Repository<User>{}

export { UsersRepository }
