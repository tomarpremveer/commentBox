export type CommentProp = {
  id: string;
  author: string;
  text: string;
  parent: string | null;
  postedAt: Date;
};
