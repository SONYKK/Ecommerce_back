import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Brand} from "../brand/brand.model";
import {Type} from "./type.model";

interface TypeBrandCreationAttrs {
    id: number;
    typeId: number;
    brandId: number;
}

@Table({tableName: 'type_brand'})
export class TypeBrand extends Model<TypeBrand, TypeBrandCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ForeignKey(() => Type)
    @Column({type: DataType.INTEGER})
    typeId: number;
    @ForeignKey(() => Brand)
    @Column({type: DataType.INTEGER})
    brandId: number;

}