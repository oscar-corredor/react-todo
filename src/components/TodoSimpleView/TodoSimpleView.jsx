import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import deleteIcon from '../../public/icons/delete_icon.svg';

const StyledLi = styled.li`

`;

const StyledDiv = styled.div`
/*border: 2px solid #345995;*/
background: ${props => (props.done ? '#437F97' : '#345995')};
height: 50px;
margin: 3px;
display:grid;
grid-template-columns: 20px 7fr 2fr;
align-items: center;
`;

const StyledCheckbox = styled.input`

`;

const MainButton = styled.button`
background: transparent;
border-style: none;
font-size: 1.2em;
font-weight: bold;
${props => (props.done ? 'text-decoration-line: line-through;' : 'text-decoration-line: none;')}
color: white;
justify-self: start;
`;

const ButtonSpan = styled.span`
justify-self: end;
`;

const DeleteButton = styled.button`
background: url(${deleteIcon});
background-repeat: no-repeat;
border-style: none;
width: 20px;
height: 20px;
`;

const TodoSimpleView = (props) => {
  const {
    title,
    onDelete,
    done,
    onStateClicked,
  } = props;
  const elementContent = `${title}`;
  return (
    <StyledLi>
      <StyledDiv done={done}>
        <StyledCheckbox type="checkbox" checked={props.done} onClick={onStateClicked} />
        <MainButton type="button" done={done}>
          {elementContent}
        </MainButton>
        <ButtonSpan>
          <DeleteButton type="button" onClick={onDelete} />
        </ButtonSpan>
      </StyledDiv>
    </StyledLi>
  );
};

TodoSimpleView.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStateClicked: PropTypes.func.isRequired,
};

export default TodoSimpleView;
