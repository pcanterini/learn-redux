import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoClick(video)} className="list-group-item">
      <div className="media">
        <div className="media-left">
          <img src={imageURL} />
        </div>
        <div className="media-body">
          {video.snippet.title}
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
