import React from 'react';

function VideoDetail({ video }) {
  if (!video) return <div>Loading...</div>;
  const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={video.snippet.title}/>
      </div>
      <div className="ui segment">
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
        <h5>By {video.snippet.channelTitle}</h5>
      </div>
    </div>
  );
}

VideoDetail.propTypes = {};

export default VideoDetail;
