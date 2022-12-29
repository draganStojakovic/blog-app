import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { postService } from "../services/PostService";
import { AddPostForm } from "../components/AddPostForm.component";

export const EditPostPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  const handleEditPost = async (e) => {
    e.preventDefault();
    await postService.edit(id, post);
    history.push("/posts");
  };

  const handleGetPost = async (id) => {
    const { data } = await postService.get(Number(id));
    setPost(data);
  };

  useEffect(() => {
    handleGetPost(id);
  }, [id]);

  return (
    <AddPostForm
      post={post}
      handlePost={handleEditPost}
      onChange={setPost}
      isCreateMode={false}
    />
  );
};
