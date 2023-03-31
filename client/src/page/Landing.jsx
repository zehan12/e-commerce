import { Fragment } from "react";
import Content from "../components/landing/Content";
import VideoBackground from "../components/landing/VideoBackground";
import Header from "../components/layout/Header";

const Landing = () => {
    return (
        <Fragment>
            <Header />
            <Content />
            <VideoBackground />
            <div className="h-[100vh] bg-[crimson]"></div>
        </Fragment>
    )
}

export default Landing;