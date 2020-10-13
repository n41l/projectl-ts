interface RefreshToken extends BaseModel{
    refresh: string;
    token: string;
    username: string;
    userId: string;
    nickname?: string;
    gender: number;// 0 男， 1 女 默认男
    avatarUrl?: string;
    union_id?: string;
    region?: string; //地址
}

