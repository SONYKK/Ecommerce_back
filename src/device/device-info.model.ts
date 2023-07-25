import {BelongsTo, Column, DataType, ForeignKey, Index, Model, Table} from "sequelize-typescript";
import {Device} from "./device.model";

interface DeviceInfoCreationAttrs {
    id: number;
    title: string;
    description: string;
    deviceId: number;
}

@Table({tableName: 'device_info'})
export class DeviceInfo extends Model<DeviceInfo, DeviceInfoCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Index
    @Column({type: DataType.STRING, allowNull: false})
    title: string;
    @Column({type: DataType.STRING, allowNull: false})
    description: string;
    @ForeignKey(() => Device)
    @Column({type: DataType.INTEGER})
    deviceId: number;

    @BelongsTo(() => Device)
    device: Device;

}