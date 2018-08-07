import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TodoSimpleView from '../TodoSimpleView/TodoSimpleView';
import TodoCreator from '../TodoCreator/TodoCreator';

const StyledUL = styled.ul`
list-style: none;
width: 70%;
margin: auto;
`;

const TodoList = (props) => {
  const {
    todos,
    onDelete,
    newTodoText,
    onKeyDownHandler,
    onChange,
    onTodoAdded,
    onStateClicked,
  } = props;
  const todoElements = todos.map(todo => (
    <TodoSimpleView
      key={todo.id}
      id={todo.id}
      title={todo.title}
      content={todo.content}
      done={todo.done}
      onDelete={() => onDelete(todo.id)}
      onStateClicked={() => onStateClicked(todo.id)}
    />
  ));

  return (
    <StyledUL>
      <TodoCreator
        newTodoText={newTodoText}
        onKeyDownHandler={onKeyDownHandler}
        onChange={onChange}
        onTodoAdded={onTodoAdded}
      />
      {todoElements}
    </StyledUL>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onKeyDownHandler: PropTypes.func.isRequired,
  newTodoText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onTodoAdded: PropTypes.func.isRequired,
  onStateClicked: PropTypes.func.isRequired,
};

export default TodoList;
