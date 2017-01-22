import React from 'react';
import LanesContainer from './containers/LanesContainer/LanesContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LanesContainer />
      </div>
    );
  }
}
