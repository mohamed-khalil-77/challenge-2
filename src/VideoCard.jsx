// VideoCard.jsx

import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <video controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>{video.title}</h3>
      {/* Other video details */}
    </div>
  );
};

export default VideoCard;
