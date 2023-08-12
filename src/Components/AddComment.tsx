import React from "react";
import { CommentProp } from "../Types/index";

type AddCommentProps = {
  onAddComment: (
    event: React.MouseEvent<HTMLButtonElement>,
    comment: CommentProp
  ) => void;
};

export default function AddComment({ onAddComment }: AddCommentProps) {
  return <div></div>;
}
