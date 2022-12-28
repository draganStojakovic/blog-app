import { AppPostsList } from "../components/AppPostsList.component";
import { useState, useEffect } from "react";
import { postService } from "../services/PostService";

export const AppPostsPage = () => {
  const [posts, setPosts] = useState([]);

  const handleGetPosts = async () => {
    const { data } = await postService.getAll();
    setPosts(data);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div>
      <AppPostsList data={posts} />
    </div>
  );
};
