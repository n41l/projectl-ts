interface BaseModel {
    id: number;
}

interface Material extends BaseModel {
    user: User
    isTemplate: boolean;
    title: string;
    previewImage?: string;
    baseColor: string;
    baseColorMapUrl?: string;
    metalness: number;
    metalnessMapUrl?: string;
    roughness: number;
    roughnessMapUrl?: string;
    normalMapUrl?: string;
}


