import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../services/PostService";
import { AppPostDetailsComponent } from "../components/AppPostDetailsComponent.component";

export const AppPostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    text: "",
  });

  const handleGetPost = async (id) => {
    const { data } = await postService.get(Number(id));
    setPost(data);
  };

  useEffect(() => {
    handleGetPost(id);
  }, [id]);

  return <AppPostDetailsComponent data={post} />;
};
