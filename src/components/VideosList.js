import React from 'react';

import VideoItem from './VideoItem';

function VideosList({ videos , onVideoSelect}) {
  const renderedLists = videos.map((video) => <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>);

  return <div className="ui relaxed divided list">{renderedLists}</div>;
}

export default VideosList;
