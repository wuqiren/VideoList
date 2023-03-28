import  { useRef,useState } from "react";
import './index.css'
interface VideoPlayerProps {
  src: string;
}
function formatVideoTime(seconds:any) {
  let s:any = Math.floor(seconds % 60);
  let m:any = Math.floor(seconds / 60 % 60);
  let h:any = Math.floor(seconds / 3600);

  h = (h > 0) ? h + ':' : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = ((m < 10) ? '0' + m : m) + ':';

  // Check if leading zero is need for seconds
  s = (s < 10) ? '0' + s : s;
  return h + m + s;
}

function VideoPlayer(props: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onPlay = () => {
    videoRef.current?.play()
  }
  const onPause = () => {
    videoRef.current?.pause()
  }
  const onCanPlay = () => {
    console.log(videoRef.current?.duration)
  }
  return (
    <div id='playWindow' className="playWindow">
      <div className="leftContent">
        <video
          id="video"
          ref={videoRef}
          src={props.src}
          onCanPlay={onCanPlay}
        >
        </video>
        <button onClick={onPlay}>播放</button>
        <button onClick={onPause}>暂停</button>
      </div>
      <div className="rightContent">

      </div>
    </div>
  );
}

export default VideoPlayer;
