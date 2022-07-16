import { Schema, model } from "mongoose"
import { ILoginRequest } from "../../types";

const tokenSchema = new Schema<ILoginRequest>({
    token: { type: String, unique: true },
    userId: { type: String },
    active: { type: Boolean, default: true },
}, {
    timestamps: true
})

const Token = model<ILoginRequest>('token', tokenSchema)

export default Token