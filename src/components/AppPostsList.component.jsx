import { Link } from "react-router-dom";

export const AppPostsList = ({ data }) => {
  return (
    <ul>
      {data &&
        data.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
    </ul>
  );
};
