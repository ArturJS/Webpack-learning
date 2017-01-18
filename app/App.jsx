import React from 'react';
import NotesContainer from './containers/NotesContainer';
import Lane from './components/Lane/Lane';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NotesContainer />
        <Lane />
      </div>
    );
  }
}
