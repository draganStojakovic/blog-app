export const AppComments = ({ data }) => {
  return (
    <ul>
      {data.comments &&
        data.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
    </ul>
  );
};
