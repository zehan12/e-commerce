import { useEffect } from "react";

const VideoBackground = () => {

    return (
        <div className="absolute left-0 top-0 w-full h-screen" 
        // style={{ background: "linear-gradient(90deg, rgba(1, 1, 1, 1), rgba(39, 39, 39, 0))" }} 
        >
            <video
            
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{filter:"saturate(1.2)",mixBlendMode:"overlay"}}
                src="/video/home_bg_1.mp4"
                muted
                loop
                autoPlay
            ></video>
        </div>
    );
};

export default VideoBackground;