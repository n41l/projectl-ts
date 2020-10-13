interface MoxingComponentElementLayout extends BaseModel{
    user?: User;
    index: number;
    isTemplate: boolean;
    title: string;
    element?: MoxingComponentElement;
    scale: Vector3;
    zRotation: number;
    position: Vector3;
    material?: Material;
}

interface MoxingComponentElement extends BaseModel{
    user?: User;
    type: number;
    title: string;
    imageUrl?:string;

    fontName?: string;
    textContent?: string;

    sticker?: Sticker;
}

interface Sticker extends BaseModel{
    title: string;
    user?: User;
    image_url: string;
}