import { IUser } from "../../types";
import { Schema, model } from "mongoose"

const userSchema = new Schema<IUser>({
  userId: { type: String, unique: true },
  displayName: { type: String },
  email: { type: String },
  subscription: {
    tier: { type: String },
    start: { type: Number },
    end: { type: Number },
    amount: { type: Number },
    interval: { type: String },
    isActive: { type: Boolean },
    product_id: { type: String },
    price_id: { type: String },
  },
  customer_id: { type: String },
  joined: { type: Date }
})

const User = model<IUser>('User', userSchema)

export default User