import React, { useEffect, useState } from 'react';

import useVideos from '../hooks/useVideos';

import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos('cspg wade');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container red segment">
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideosList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
