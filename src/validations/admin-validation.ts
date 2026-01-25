import z from "zod";

export class AdminValidation {
    static CREATE = z.object({
        username: z.string().min(3).max(30),
        password: z.string().min(8).max(100),
    })
}