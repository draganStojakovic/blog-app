export const AddCommentForm = ({ comment, onChange, handleComment }) => {
  return (
    <form onSubmit={handleComment}>
      <label htmlFor="comment">Comment:</label>
      <input
        id="comment"
        type="text"
        required
        value={comment.title}
        onChange={(e) => onChange({ ...comment, text: e.target.value })}
      />
      <button type="submit">Comment</button>
    </form>
  );
};
