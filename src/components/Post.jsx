import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import {PostList} from '../store/post-list-store';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card mx-8 my-4" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag, idx) => (
          <span key={idx} className="badge text-bg-primary mx-1">{tag}</span>
        ))}
        <div className="alert alert-success m-0 mt-4" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};

export default Post;
