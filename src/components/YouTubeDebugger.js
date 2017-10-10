// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: "1080p" } }
    };
  }

  handleBit = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    });
  };

  handleRes = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: "720p" }
      })
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBit}>
          Change bitrate
        </button>
        <button className="resolution" onClick={this.handleRes}>
          Change res
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
