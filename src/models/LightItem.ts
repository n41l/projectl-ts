interface SceneLightDesign extends BaseModel{
    title: string;
    is_template: boolean;
    user?: User;
    environmentDesign?: SceneLightEnvironmentDesign;
    // add light design latter
}

interface SceneLightEnvironmentDesign extends BaseModel{
    title: string
    user?: User;
    is_template: boolean;
    lightEnvironment?: SceneLightEnvironment;
    intensity: number;
    yRotation: number;
}

interface SceneLightEnvironment extends BaseModel{
    title: string;
    name: string;
    is_template: boolean;
    fileUrl: string;
    user?: User;
}