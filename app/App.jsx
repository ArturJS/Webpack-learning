import React from 'react';
import NotesContainer from './containers/NotesContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NotesContainer />
    );
  }
}
