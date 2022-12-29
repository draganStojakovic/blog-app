import { Link } from "react-router-dom";

export const AppPostsList = ({ data, handleEditPost, handleDeletePost }) => {
  return (
    <ul>
      {data &&
        data.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <button onClick={() => handleEditPost(post.id)}> Edit </button>
            <button onClick={() => handleDeletePost(post.id)}> Delete </button>
          </li>
        ))}
    </ul>
  );
};
