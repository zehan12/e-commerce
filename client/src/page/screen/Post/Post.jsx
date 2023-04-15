import { Fragment, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../../redux/slice/post.slice";
import "./style.css"

const Post = () => {

    const dispatch = useDispatch();
    const post = useSelector(state => state.post.data.data.ayahs);
    const [data, setData] = useState([])
    const [pageNo, setPageNo] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [scrolling, setScrolling] = useState(false);

    const callApi = (pageNo) => {
        let old = [...data]
        dispatch(getPost(pageNo));
        setData([...old, ...post].flat(Infinity))
    }
    console.log(post)
    useEffect(() => {
        function makeSomeCall() {
            const {
                clientHeight,
                scrollTop,
                scrollHeight,
            } = document.documentElement;

            if (clientHeight + scrollTop >= scrollHeight - 20) {
                setPageNo((prev) => prev + 1);
                callApi(pageNo)
                // dispatch(getPost(pageNo));
            }
        }
        window.addEventListener("scroll", makeSomeCall);

        return () => {
            window.removeEventListener("scroll", makeSomeCall);
        };
    }, [pageNo]);

    useEffect(() => {
        callApi(pageNo)
    }, [])

    return (
        <Fragment>
            <div className="container mx-auto post-container">
                <h1 className="text-center text-5xl font-mono uppercase font-bold">Posts</h1>
                {
                    data.length !== 0 &&
                    data.map((p) => (<details>
                        <summary> {p.number} {p.surah.name}   | {p.surah.englishName}</summary>
                        <p>{p.text}</p>
                    </details>))
                }
            </div>
        </Fragment>
    )
}

export default Post;