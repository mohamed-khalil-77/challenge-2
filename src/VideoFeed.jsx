// VideoFeed.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import VideoCard from './VideoCard';

const VideoFeed = () => {
  const videos = useSelector((state) => state.video.videos);

  return (
    <div>
      <h2>Video Feed</h2>
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
