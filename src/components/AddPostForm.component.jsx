export const AddPostForm = ({ post, handlePost, onChange }) => {
  return (
    <div>
      <h1>Submit a post</h1>
      <form onSubmit={handlePost}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          minLength={2}
          value={post.title}
          onChange={(e) => onChange({ ...post, title: e.target.value })}
        />
        <br />
        <label htmlFor="text">Text:</label>
        <textarea
          rows="5"
          cols="50"
          id="text"
          value={post.text}
          required
          maxLength={300}
          onChange={(e) => onChange({ ...post, text: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={() =>
          onChange({
            title: "",
            text: "",
          })
        }
      >Reset</button>
    </div>
  );
};
