import Image from "next/image";

const VideoBackground = ({ videoSrc }) => {
  return (
    <>
      <style jsx>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .video-background video {
          position: absolute;
          min-width: 100%;
          min-height: 100%;
          width: 100vw;
          height: 100vh;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          object-fit: cover;
        }
      `}</style>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default VideoBackground;
