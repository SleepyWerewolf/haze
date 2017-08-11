import { Component } from 'react';

const loadScript = (url) => {
    // Adding the script tag to the head as suggested before
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    body.appendChild(script);

    return script;
};

class LoadScript extends Component {
  componentDidMount() {
    this.script = loadScript(this.props.url);
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0];
    body.removeChild(this.script);
  }

  render() {
    return null;
  }
}

export default LoadScript;
