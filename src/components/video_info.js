import React from 'react';

const VideoInfo = ({video}) => {

  if (!video) {
    return <div>loading...</div>;
  }

  const videoURL = `http://youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="col-md-8">
      url: {videoURL}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={videoURL} className="embed-responsive-item" />
      </div>
    </div>
  );
}

export default VideoInfo;
