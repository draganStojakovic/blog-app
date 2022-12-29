import { useState } from "react";
import { useHistory } from "react-router-dom";
import { postService } from "../services/PostService";
import { AddPostForm } from "../components/AddPostForm.component";

export const AddPostPage = () => {
  const history = useHistory();
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!post.title || !post.text) {
      alert("One or more field is blank.");
      return;
    }
    await postService.add(post);
    history.push("/posts");
  };

  return (
    <AddPostForm post={post} onChange={setPost} handlePost={handleAddPost} />
  );
};
