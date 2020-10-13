interface PostItem extends BaseModel{
    user?: User;
    content: string;
    contentType: number;
    sceneDesign?: SceneDesign;
//    var article: [ArticleItem] = []
    imageUrls: string;
    permission: number;
}