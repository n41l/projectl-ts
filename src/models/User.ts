interface User extends BaseModel{
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    isActive: boolean;
    dateJoined: Date;
    lastLogin: Date;
    phoneNumber: string;
    followers: number;
    following: number;
    likes: number;
    messages: number;
    union_id: string;
    gender: number;// 0 男， 1 女 默认男
    nickname?: string;
    avatarUrl?: string;
    region?: string; //地址
}





