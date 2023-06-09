export interface MessageModel {
    id: number,
    GroupId: number,
    UserId:number,
    messageType: 'text' | 'image' | 'audio',
    message: string
}