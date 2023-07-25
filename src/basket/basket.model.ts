import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {BasketDevice} from "../device/basket-device.model";

interface BasketCreationAttrs {
    id: number;
    userId: number;
}

@Table({tableName: 'basket'})
export class Basket extends Model<Basket, BasketCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    userId: number;

    @BelongsTo(() => User)
    user: User;
    @HasMany(() => BasketDevice)
    basketDevice: BasketDevice[];
}
