import {BelongsTo, Column, DataType, ForeignKey, Index, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Device} from "../device/device.model";

interface RaitingCreationAttrs {
    id: number;
    rate: number;
    userId: number;
    deviceId: number;
}

@Table({tableName: 'raiting'})
export class Raiting extends Model<Raiting, RaitingCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Index
    @Column({type: DataType.INTEGER, defaultValue: 0})
    rate: number;
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number;

    @BelongsTo(() => User)
    user: User
}