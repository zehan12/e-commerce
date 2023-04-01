import { Fragment } from "react"

const Parallax = () => {
    return(
        <Fragment>
            <div class="w-full h-96 bg-fixed bg-cover bg-center object-cover flex justify-center items-center"
                style={{backgroundImage:"url(https://townofdon.github.io/yt-react-parallax/static/media/img-spaceport.05a4d26d.jpg)"}}>
                <h1 class="text-white opacity-80 drop-shadow-md text-4xl italic font-bold">Now What!!!</h1>
            </div>
        </Fragment>
    )
}

export default Parallax;