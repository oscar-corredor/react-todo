import * as actionTypes from '../actions/actionTypes';
import Todo from '../../entities/Todo';


const generateRandomTodos = (quantity) => {
  const generatedTodos = [];
  let generatedQuantity = 0;
  while (quantity >= generatedQuantity) {
    generatedQuantity += 1;
    generatedTodos.push(new Todo(generatedQuantity, `Title ${generatedQuantity}`));
  }
  return generatedTodos;
};

const initialState = {
  todos: generateRandomTodos(10),
};

const removeTodo = (state, action) => ({
  ...state,
  todos: state.todos.filter(todo => todo.id !== action.id),
});

const addTodo = (state, action) => {
  const nTodo = new Todo(new Date(), action.title);
  return {
    ...state,
    todos: [...state.todos, nTodo],
  };
};

const switchTodoState = (state, action) => {
  const previousTodo = state.todos.find(todo => todo.id === action.id);
  const updatedTodo = {
    ...previousTodo,
    done: !previousTodo.done,
  };
  const newTodoList = state.todos.map(todo => (todo.id !== action.id ? todo : updatedTodo));

  return {
    ...state,
    todos: newTodoList,
  };
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REMOVE_TODO:
      return removeTodo(state, action);

    case actionTypes.ADD_TODO:
      return addTodo(state, action);

    case actionTypes.SWITCH_TODO_STATE:
      return switchTodoState(state, action);

    default:
      return state;
  }
};

export default reducer;
