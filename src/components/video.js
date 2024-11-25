import React from "react";

function Video() {
  return (
    <>
      <video
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover mt-[-1px]  video-background max-sm:h-[100vh] object-[75%] sm:h-full w-full"
        loop
        autoPlay
        muted
      >
        <source src={require("../assets/time.mp4")}></source>
      </video>
    </>
  );
}

export default Video;
