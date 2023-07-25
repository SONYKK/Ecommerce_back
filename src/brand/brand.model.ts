import {BelongsToMany, Column, DataType, HasMany, Index, Model, Table} from "sequelize-typescript";
import {Device} from "../device/device.model";
import {TypeBrand} from "../type/type-brand.model";
import {Type} from "../type/type.model";

interface BrandCreationAttrs {
    id: number;
    name: string;
}

@Table({tableName: 'brand'})
export class Brand extends Model<Brand, BrandCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Index
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @HasMany(() => Device)
    device: Device;
    @BelongsToMany(() => Type, () => TypeBrand)
    types: Type[]
}