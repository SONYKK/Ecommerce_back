import {BelongsTo, Column, DataType, ForeignKey, HasMany, Index, Model, Table} from "sequelize-typescript";
import {Type} from "../type/type.model";
import {Brand} from "../brand/brand.model";
import {Raiting} from "../raiting/raiting.model";
import {BasketDevice} from "./basket-device.model";
import {DeviceInfo} from "./device-info.model";

interface DeviceCreationAttrs {
    id: number;
    name: string;
    price: number;
    raitingId: number;
    img: string;
    typeId: number;
    brandId: number;
}

@Table({tableName: 'device'})
export class Device extends Model<Device, DeviceCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Index
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;
    @Index
    @Column({type: DataType.INTEGER, allowNull: false})
    price: number;
    @ForeignKey(() => Raiting)
    @Column({type: DataType.INTEGER, defaultValue: 0})
    raitingId: number;
    @Column({type: DataType.STRING})
    img: string;
    @ForeignKey(() => Type)
    @Column({type: DataType.INTEGER})
    typeId: number;
    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER})
    brandId: number;
    @Column({type: DataType.STRING})
    description: string;

    @BelongsTo(() => Type)
    type: Type;
    @BelongsTo(() => Brand)
    brand: Brand;
    @HasMany(() => Raiting)
    rating: Raiting;
    @HasMany(() => BasketDevice)
    basketDevice: BasketDevice;
    @HasMany(() => DeviceInfo, {as: 'info'})
    deviceInfo: DeviceInfo;

}