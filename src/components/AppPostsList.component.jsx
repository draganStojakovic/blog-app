export const AppPostsList = ({ data }) => {
  return (
    <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
  );
};
