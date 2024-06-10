import { Document } from "mongoose"; 

export interface ITweetInterface extends Document{
    tweetId: string,
    content: string,
    createdAt: string,
    adminId: string
}