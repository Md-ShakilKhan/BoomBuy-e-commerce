export const COUPON_CODES = {
    SUPERSALE: "SUPER50",
    BOSONTO: "BOSONTO50",
    NEWYEAR: "NYEAR50"
} as const;

export type CouponCode = keyof typeof COUPON_CODES;