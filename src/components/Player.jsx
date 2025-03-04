"use client";
import ReactPlayer from "react-player";
import { useEffect, useRef } from "react";

const Player = (props) => {
  const { src, poster, playing, onEnded, ...rest } = props;

  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current && playing) {
      const playPromise = playerRef.current.getInternalPlayer().play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay prevented:", error);
        });
      }
    }
  }, [playing, src]); // Runs when `playing` state or `src` changes

  let config = { file: { attributes: { poster } } };

  return (
    <ReactPlayer
      ref={playerRef}
      playing={playing}
      className="rounded-3xl [&>*]:rounded-3xl"
      url={src}
      muted={true}
      config={config}
      width="100%"
      height="100%"
      controls={false}
      stopOnUnmount={true}
      onError={(error) => console.log(error)}
      onEnded={onEnded}
      {...rest}
    />
  );
};

export default Player;
