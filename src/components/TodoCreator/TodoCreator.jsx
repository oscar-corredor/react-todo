import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledAddButton = styled.button`
  background: transparent;
  border-style: none;
  border-radius: 20%;
  height: 30px;
`;

const StyledInput = styled.input`
width: 40%;
height: 30px;
`;

const TodoCreator = props => (
  <li>
    <StyledDiv>
      <StyledAddButton type="button" onClick={props.onTodoAdded}>
        Add
      </StyledAddButton>
      <StyledInput type="text" onChange={props.onChange} onKeyDown={props.onKeyDownHandler} value={props.newTodoText} />
    </StyledDiv>
  </li>
);


TodoCreator.propTypes = {
  onKeyDownHandler: PropTypes.func.isRequired,
  newTodoText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onTodoAdded: PropTypes.func.isRequired,
};

export default TodoCreator;
