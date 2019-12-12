import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/actions/index';

import TodoList from '../../components/TodoList/TodoList';


class GeneralOverview extends Component {
  state = {
    newTodoText: '',
  }

  deleteHandler = (id) => {
    this.props.onTodoRemoved(id);
  }

  keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      this.todoAddedHandler();
    }
  }

  changeHandler = (event) => {
    this.setState({ newTodoText: event.target.value });
  }

  todoAddedHandler = () => {
    if (this.state.newTodoText !== '') {
      this.props.onTodoAdded(this.state.newTodoText);
      this.setState({ newTodoText: '' });
    }
  }

  switchTodoStateHandler = (id) => {
    this.props.switchTodoState(id);
  }

  render() {
    const { todos: todoList } = this.props;

    return (
      <div>
        <TodoList
          todos={todoList}
          onDelete={this.deleteHandler}
          newTodoText={this.state.newTodoText}
          onKeyDownHandler={this.keyDownHandler}
          onChange={this.changeHandler}
          onTodoAdded={this.todoAddedHandler}
          onStateClicked={this.switchTodoStateHandler}
        />
      </div>
    );
  }
}

GeneralOverview.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoRemoved: PropTypes.func.isRequired,
  onTodoAdded: PropTypes.func.isRequired,
  switchTodoState: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.generalOverview.todos,
});

const mapDispatchToProps = dispatch => ({
  onTodoRemoved: id => dispatch(actions.removeTodo(id)),
  onTodoAdded: title => dispatch(actions.addTodo(title)),
  switchTodoState: id => dispatch(actions.switchTodoState(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GeneralOverview));
