import { Fragment } from "react";
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github';

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
            <Parallax />

            <div className="h-[30vh] bg-[rgb(255,163,255)]" style={{ background: "linear-gradient(0deg, rgba(255,163,255,1) 0%, rgba(255,211,78,1) 100%)" }} >
                <a
                    className="flex justify-center items-center p-20"
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://github.com/zehan12'>
                    <UseAnimations animation={github} size={90} />
                </a>
            </div>
        </Fragment>
    )
}

export default Landing;