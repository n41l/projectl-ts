class Vector2 {
    x: number = 0
    y: number = 0
    constructor(value: string) {
        const values = value.split(',')
        this.x = +values[0]
        this.y = +values[1]
    }
}

class Vector3 {
    x: number = 0
    y: number = 0
    z: number = 0
    constructor(value: string) {
        const values = value.split(',')
        this.x = +values[0]
        this.y = +values[1]
        this.z = +values[2]
    }
}

class Vector4 {
    x: number = 0
    y: number = 0
    z: number = 0
    w: number = 0

    constructor(value: string) {
        const values = value.split(',')
        this.x = +values[0]
        this.y = +values[1]
        this.z = +values[2]
        this.w = +values[3]
    }
}

interface MoXingDesign extends BaseModel{
    user?: User;
    title: string;
    moxing?: MoXing;
    isTemplate: boolean;
    position: Vector3
    rotation: Vector4
    scale: Vector3
    componentDesigns?: [MoXingComponentDesign];
}

interface MoXingComponentDesign extends BaseModel{
    user?: User;
    title: string;
    isTemplate: boolean;
    component?: MoXingComponent;
    material?: Material;
    isDesignable: boolean;
    elementLayouts?: [MoxingComponentElementLayout];
}