export default class Todo {
  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.dueDate = data.dueDate;
    this.priority = data.priority;
    this.completed = false;
  };
  complete() {
    this.completed = true;
  };
  changePriority(newPriority) {
    this.priority = newPriority;
  };
  isCompleted() {
    return this.completed;
  };
};
