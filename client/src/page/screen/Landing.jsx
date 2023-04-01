import { Fragment } from "react";
import Content from "../../components/landing/Content";
import Parallax from "../../components/landing/Parallax";
import VideoBackground from "../../components/landing/VideoBackground";
import Header from "../../components/layout/Header";

const Landing = () => {
    return (
        <Fragment>
            <Header />
            <Content />
            <VideoBackground />
            <Parallax />
            <div className="h-[30vh] bg-[crimson]"></div>
        </Fragment>
    )
}

export default Landing;