

export default interface IUser {
    userId: string,
    displayName: string,
    email: string,
    subscription: Subscription,
    customer_id: string,
    joined: Date
}

interface Subscription {
    tier: Plan,
    start: Number,
    end: Number,
    amount: Number,
    interval: String,
    isActive: boolean,
    product_id: string,
    price_id: string,
}

export enum Plan {
    trial = "trial",
    basic = "basic",
    premium = "premium",
    agency = "agency",
    expired = "expired"
}