import React from 'react';
import videojs from 'video.js';
import 'videojs-playlist';
import videojsPlaylistPlugin from 'videojs-playlist';
import videos from './videos';
videojs.registerPlugin('playlist', videojsPlaylistPlugin);
export const Playlist = ({video_id}) => {
let video = videos.filter((vid)=>{
  return vid.id==video_id
})
console.log(video)
    return (
            <div data-vjs-player>
              <video key={video[0].id} className="video-js" controls>
              <source src={video[0].sources[0].src} type="video/mp4" />
              </video>
            </div>
    )}