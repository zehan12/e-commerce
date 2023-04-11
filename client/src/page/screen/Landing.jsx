import { Fragment, useState, useEffect } from "react";

import Content from "../../components/landing/Content";
import Parallax from "../../components/landing/Parallax";
import VideoBackground from "../../components/landing/VideoBackground";
import Header from "../../components/layout/Header";
import LandingWall from "../../components/landing/LandingWall";
import Social from "../../components/landing/Social";


const Landing = () => {

    return (
        <Fragment>
            <Header />
            <Content />
            <VideoBackground />
            <LandingWall />
            <Parallax />
            <Parallax />
            <Social />
        </Fragment>
    )
}

export default Landing;