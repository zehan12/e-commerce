import { Fragment, useLayoutEffect, useState } from "react";
import { Text } from 'react-font';

const LandingWall = () => {
    return (
        <Fragment>
            <div className="h-[100vh] bg-[url('https://raw.githubusercontent.com/Chensokheng/island/master/public/assets/bg.jpg')] bg-no-repeat	bg-cover">
                <div id="title" className="flex justify-center h-[100vh] items-center animate__animated animate__bounceInUp">
                    <Text family='Nunito' className="text-[4rem] text-white font-extrabold">
                        Welcome to <br /> My <span className="text-[#5bdd45] font-mono"> Application</span>
                    </Text>
                </div>
            </div>
            <video class="w-full" muted
                loop
                autoPlay
                src={`https://tecdn.b-cdn.net/img/video/Tropical.mp4`}
                type="video/mp4"
            />
        </Fragment>
    )
}

export default LandingWall;
