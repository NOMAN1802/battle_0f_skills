/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeVideo = ({ videoUrl }) => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    // Extract the video ID from the YouTube URL
    const videoIdMatch = videoUrl.match(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/i
    );

    if (videoIdMatch) {
      const extractedVideoId = videoIdMatch[1];
      setVideoId(extractedVideoId);
    }
  }, [videoUrl]);

  return (
    <div>
      {videoId && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
          title="Embedded YouTube Video"
        />
      )}
    </div>
  );
};

export default YouTubeVideo;
