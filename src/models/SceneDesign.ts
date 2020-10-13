interface SceneDesign extends BaseModel{
    // list fields:
    user?: User;
    title: string;
    content: string;
    isTemplate: boolean;
    previewImageUrl?: string;
    sceneLightDesign?: SceneLightDesign;
    moxingDesigns?: [MoXingDesign];
}