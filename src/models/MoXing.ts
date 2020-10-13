interface MoXing extends BaseModel{
    title: string;
    user?: User
    dataUrl?: string;
    components: [MoXingComponent];
}

interface MoXingComponent extends BaseModel{
    title: string;
    compKey: string;
    isDesignable: boolean;
    uvIndicatorUrl?: string;
}

