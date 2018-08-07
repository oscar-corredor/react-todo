import * as actionTypes from './actionTypes';

export const removeTodo = id => ({
  type: actionTypes.REMOVE_TODO,
  id,
});

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  title,
});

export const switchTodoState = id => ({
  type: actionTypes.SWITCH_TODO_STATE,
  id,
});
