// import { useParams } from "react-router";
// //make preciew page editable

// export default function Post({ post, file }) {
//     const { postId } = useParams();

//     return (
//         <>
//         post here {post.tile}
//         </>
//     )
// }
import { useLocation } from "react-router";

export default function Post() {
    const location = useLocation();
    const postData = location.state.post;
    const postFile = location.state.file;

    return (
        <>
        <h1> {postData.title} </h1>
        </>
    )
}