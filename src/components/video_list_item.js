import React from 'react';

const VideoListItem = ({video}) => {

  console.log(video);
  const imageURL = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
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
