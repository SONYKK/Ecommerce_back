import {BelongsToMany, Column, DataType, HasMany, HasOne, Model, Table} from "sequelize-typescript";
import {UserRoles} from "src/roles/user-roles.model";
import {Role} from "../roles/roles.model";
import {Basket} from "../basket/basket.model";
import {Raiting} from "../raiting/raiting.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @Column({type: DataType.STRING, unique: true})
    name: string;
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
    @HasOne(() => Basket)
    basket: Basket;
    @HasMany(() => Raiting)
    rating: Raiting[];
}
