import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Basket} from "../basket/basket.model";
import {Device} from "./device.model";

interface BasketDeviceCreationAttrs {
    id: number;
    deviceId: number;
    basketId: number;
}

@Table({tableName: 'basket_device', createdAt: false, updatedAt: false})
export class BasketDevice extends Model<BasketDevice, BasketDeviceCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number;
    @ForeignKey(() => Basket)
    @Column({type: DataType.INTEGER})
    basketId: number;

    @BelongsTo(() => Basket)
    basket: Basket;
    @BelongsTo(() => Device)
    device: Device;

}