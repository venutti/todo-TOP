import Todo from './todo.js';

export default class Proyect {
  constructor(name) {
    this.name = name;
    this.todos = new Set();
  };
  add(todoData) {
    const newTodo = new Todo(todoData);
    this.todos.add(newTodo);
  };
  remove(todo) {
    this.todos.delete(todo);
  };
};
