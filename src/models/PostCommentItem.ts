
interface PostCommentItem extends BaseModel{
    // post?: PostItem
    user?: User;
    replyTo?: PostCommentItem;
    parentComment?: PostCommentItem;
    childComments?: [PostCommentItem];
    commentType: number;
    comment: string;
}