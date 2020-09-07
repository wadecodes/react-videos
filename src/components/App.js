import React, { Component } from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';




class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onSubmit('cspg wade');
  }

  onSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container red segment">
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
