import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './entities/user.entity';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<UserDocument>;
    findAll(): import("mongoose").Query<UserDocument[], UserDocument, {}, UserDocument>;
    findOne(id: string): import("mongoose").Query<UserDocument, UserDocument, {}, UserDocument>;
    update(id: string, updateUserDto: UpdateUserDto): import("mongoose").Query<UserDocument, UserDocument, {}, UserDocument>;
    remove(id: string): Promise<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }>;
}
