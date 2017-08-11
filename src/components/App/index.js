import React, { Component } from 'react';
import './style.css';
import UnityContainer from '../../containers/UnityContainer';

class App extends Component {
  render() {
    const { gameUrl, dispatchLaunchGame } = this.props;
    return (
      <div className='App'>
        {gameUrl ? (
          <UnityContainer />
        ) : (
          <span>
            <button onClick={() => dispatchLaunchGame('/games/space-shooter/Build/space-shooter.json')}>Launch space shooter</button>
            <button onClick={() => dispatchLaunchGame('/games/roll-a-ball/Build/RollABall.json')}>Launch roll a ball</button>
          </span>
        )}
      </div>
    );
  }
}

export default App;
