import React, { Component } from 'react';
import './style.css';

const { UnityLoader } = window;

export default class UnityGame extends Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };
  }

  componentDidMount() {
    const { url, isGameLaunching } = this.props;

    if (UnityLoader && url) {
      const unityInstance = UnityLoader.instantiate('unity-container', url, {
        onProgress: (unityInstance, progress) => {
          if (progress === 1) {
            isGameLaunching(false);
          }
        }
      });

      this.setState({ unityInstance });
      window.thing = unityInstance;
    } else {
      console.error('No buildUrl given');
    }
  }

  componentWillUnmount() {
    this.state.unityInstance.Modules.exit();
  }

  render() {
    return <div className='unity-container' id='unity-container'></div>;
  }
}
