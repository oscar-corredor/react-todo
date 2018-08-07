import React from 'react';
import PropTypes from 'prop-types';

const TodoView = (props) => {
  const { title, content } = props;
  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {content}
      </p>
    </div>
  );
};

TodoView.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TodoView;
