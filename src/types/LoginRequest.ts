export default interface ILoginRequest {
    token: string,
    userId: string,
    active: boolean,
    createdAt: Date,
    updatedAt: Date
}