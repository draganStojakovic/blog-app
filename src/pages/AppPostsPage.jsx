import { AppPostsList } from "../components/AppPostsList.component";
import { useState, useEffect } from "react";
import { postService } from "../services/PostService";
import { useHistory } from "react-router-dom";

export const AppPostsPage = () => {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    const { data } = await postService.getAll();
    setPosts(data);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  const editPost = (id) => {
    history.push(`/edit/${id}`);
  };

  const deletePost = async (id) => {
    await postService.delete(Number(id));
    setPosts(posts.filter((post) => id !== post.id));
  };

  return (
    <div>
      <AppPostsList
        data={posts}
        handleEditPost={editPost}
        handleDeletePost={deletePost}
      />
    </div>
  );
};
