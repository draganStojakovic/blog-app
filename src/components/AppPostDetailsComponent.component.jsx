import { useFormattedDate } from "../hooks/useFormattedDate";

export const AppPostDetailsComponent = ({ data }) => {
  const formatedDate = useFormattedDate(data.createdAt);
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{formatedDate}</p>
      <p>{data.text}</p>
    </div>
  );
};
