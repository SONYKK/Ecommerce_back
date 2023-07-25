import {Column, DataType, Model, Table} from "sequelize-typescript";

interface PostCreationAttrs {
    title: string;
    body: string;
}

@Table({tableName: 'posts'})
export class Posts extends Model<Posts, PostCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    title: string;
    @Column({type: DataType.STRING, unique: true})
    body: string;
}