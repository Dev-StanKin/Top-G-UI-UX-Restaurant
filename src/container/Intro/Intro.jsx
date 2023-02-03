import React from 'react';
import { meal } from '../../constants';
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        controls={false}
        loop
        muted
        ref={vidRef}
        type="video/mp4"
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill fontSize={30} color="#fff" />
          ) : (
            <BsFillPlayFill fontSize={30} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
