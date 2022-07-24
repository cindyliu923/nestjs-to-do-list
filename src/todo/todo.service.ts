import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  @InjectRepository(Todo)
  private readonly repository: Repository<Todo>;

  public getTodo(id: number): Promise<Todo> {
    return this.repository.findOneBy({ id: id });
  }

  public createTodo(body: CreateTodoDto): Promise<Todo> {
    const todo: Todo = new Todo();

    todo.title = body.title;
    todo.description = body.description;

    return this.repository.save(todo);
  }

  public getTodos(): Promise<Todo[]> {
    return this.repository.find();
  }
}
