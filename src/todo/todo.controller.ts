import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateTodoDto } from './todo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  @Inject(TodoService)
  private readonly service: TodoService;

  @Get(':id')
  public getTodo(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.service.getTodo(id);
  }

  @Post()
  public createTodo(@Body() body: CreateTodoDto): Promise<Todo> {
    return this.service.createTodo(body);
  }

  @Get()
  public getAll(): Promise<Todo[]> {
    return this.service.getTodos();
  }
}
