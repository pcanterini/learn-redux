import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.map(video => {
        return <VideoListItem onVideoClick={props.onVideoClick} video={video} key={video.etag} />
      })}
    </ul>
  );
}

export default VideoList;
