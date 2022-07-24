import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
// import { Todo } from './todo.entity';
import { Todo } from '.././models/todo.entity';
import { TodoService } from './todo.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Todo]),
    // TypeOrmModule.forFeature([Todo])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
