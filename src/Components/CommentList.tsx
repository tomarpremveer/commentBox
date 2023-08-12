import { CommentProp } from "../Types/";

type CommentListProps = {
  comments: CommentProp[];
};
export default function CommentList({ comments }: CommentListProps) {
  return (
    <div>
      {comments.length > 0
        ? comments.map((comment) => {
            return (
              <div key={comment.id} className="">
                {comment.text}
              </div>
            );
          })
        : null}
    </div>
  );
}
