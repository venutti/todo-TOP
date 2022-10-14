export default class Todo {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.dueDate = data.dueDate;
    this.priority = data.priority;
    this.completed = false;
  };
  toggleComplete() {
    this.completed = !this.completed;
  };
  changePriority(newPriority) {
    this.priority = newPriority;
  };
  isCompleted() {
    return this.completed;
  };
  edit(newData) {
    this.title = newData.title;
    this.description = newData.description;
    this.dueDate = newData.dueDate;
    this.priority = newData.priority;
  };
};
