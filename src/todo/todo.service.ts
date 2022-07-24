import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodoDto } from './todo.dto';
import { Todo } from '.././models/todo.entity';
// import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  @InjectModel(Todo)
  // @InjectRepository(Todo)
  private todoModel: typeof Todo;
  // private readonly repository: Repository<Todo>;

  public getTodo(id: number): Promise<Todo> {
    return this.todoModel.findOne({
      where: {
        id,
      },
    });
  }

  public createTodo(body: CreateTodoDto): Promise<Todo> {
    const todo: Todo = new Todo();

    todo.title = body.title;
    todo.description = body.description;

    return this.todoModel.create(todo);
  }

  public getTodos(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }
}
