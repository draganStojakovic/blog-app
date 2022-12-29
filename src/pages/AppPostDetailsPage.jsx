import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../services/PostService";
import { AppPostDetailsComponent } from "../components/AppPostDetailsComponent.component";
import { AddCommentForm } from "../components/AddCommentForm.component";
import { AppComments } from "../components/AppComments.component";

export const AppPostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    text: "",
    comments: [],
  });
  const [comment, setComment] = useState({
    text: "",
  });

  const handleGetPost = async (id) => {
    const { data } = await postService.get(Number(id));
    setPost(data);
  };

  useEffect(() => {
    handleGetPost(id);
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!comment.text) {
      alert("Comment cannot be empty");
      return;
    }
    const { data } = await postService.addComment(comment, id);
    setPost((prevState) => {
      return {
        ...prevState.post,
        post: {
          ...prevState.post.comments,
          comments: [...prevState, data],
        },
      };
    });
  };

  return (
    <div>
      <AppPostDetailsComponent data={post} />
      <AddCommentForm
        comment={comment}
        onChange={setComment}
        handleComment={handleAddComment}
      />
      <AppComments data={post} />
    </div>
  );
};
