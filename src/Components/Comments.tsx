import React from "react";
import useFetchComments from "../hooks/useFetchComments";
import { CommentProp } from "../Types";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

export default function Comments() {
  const comments = useFetchComments();
  const handleAddComment = (
    event: React.MouseEvent<HTMLButtonElement>,
    comment: CommentProp
  ) => {};
  return (
    <div>
      <AddComment onAddComment={handleAddComment} />
      <CommentList comments={comments} />
    </div>
  );
}
