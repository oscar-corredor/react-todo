export default class Todo {
  constructor(id, title) {
    this.title = title;
    this.id = id;
    this.creationDate = new Date();
    this.done = false;
  }
}
