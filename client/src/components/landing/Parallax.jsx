import { Fragment } from "react"

const Parallax = () => {
    return(
        <Fragment>
            <div class="w-full h-96 bg-fixed bg-cover bg-center object-cover flex justify-center items-center"
                style={{backgroundImage:"url(https://townofdon.github.io/yt-react-parallax/static/media/img-spaceport.05a4d26d.jpg)"}}>
                <h1 class="opacity-80 font-semibold text-7xl italic drop-shadow-lg shadow-xl shadow-black text-black">React Renders When Renders !!!</h1>
            </div>
        </Fragment>
    )
}

export default Parallax;