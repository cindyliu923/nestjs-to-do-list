import { Table, Column, Model, DataType, Sequelize } from 'sequelize-typescript';

@Table
export class Todo extends Model<Todo> {
  @Column({
    autoIncrement: true,
    allowNull: true,
    type: DataType.INTEGER,
    primaryKey: true
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('now()'),
  })
  createdAt: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('now()'),
  })
  updatedAt: Date;
}
