import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Inputs from './components/Inputs'
const mapStateToProps = ({
  placeInfo,
  errors
}) => ({
  placeInfo,
  errors
});

export function TodoApp(props) {
  return (
    <div className="todo-app">
      {JSON.stringify(props.placeInfo)}
      <Inputs  />
      {
        props.errors.has('get-place-info-error')
        ? (
          <div>
            {props.errors.get('get-place-info-error')}
          </div>
        ) : null
      }
    </div>
  );
}

export const App = compose(
  connect(mapStateToProps),
)(TodoApp);
