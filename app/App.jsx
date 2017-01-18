import React from 'react';
import NotesContainer from './containers/NotesContainer';
import LanesContainer from './containers/LanesContainer/LanesContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NotesContainer />
        <LanesContainer />
      </div>
    );
  }
}
