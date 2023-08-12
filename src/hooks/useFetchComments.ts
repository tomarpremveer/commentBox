import { useEffect, useState } from "react";
import { getComments } from "../server";
import { CommentProp } from "../Types";

export default function useFetchComments() {
  const [comments, setComments] = useState<CommentProp[]>([]);

  useEffect(() => {
    setComments(getComments());
  }, []);

  return comments;
}
