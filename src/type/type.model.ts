import {BelongsToMany, Column, DataType, HasMany, Index, Model, Table} from "sequelize-typescript";
import {Brand} from "../brand/brand.model";
import {Device} from "../device/device.model";
import {TypeBrand} from "./type-brand.model";

interface TypeCreationAttrs {
    id: number;
    name: string;
}

@Table({tableName: 'type'})
export class Type extends Model<Type, TypeCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Index
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @HasMany(() => Device)
    device: Device;
    @BelongsToMany(() => Brand, () => TypeBrand)
    brands: Brand[]

}