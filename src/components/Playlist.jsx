import React from 'react';
import videojs from 'video.js';
import 'videojs-playlist';
import videojsPlaylistPlugin from 'videojs-playlist';
videojs.registerPlugin('playlist', videojsPlaylistPlugin);
export const Playlist = () => {
    return (
            <div data-vjs-player>
              <video className="video-js" controls>
              <source src="vids/1.mp4" type="video/mp4" />
              </video>
            </div>
    )}