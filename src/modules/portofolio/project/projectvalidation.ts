import type { readonly } from "zod";
import z from "zod"

export class ProjectValidation{
    static readonly CREATE = z.object({
        title: z.preprocess(
        (v) => (v == null ? '' : v),
        z.string()
        .min(1, 'title must be at least 1 character long')
        .max(50, 'title maximum 50 characters'),
     ),

        description: z.preprocess(
            (v) => (v === null ? '' : v),
            z.string()
            .min(1, 'description must be at least 1 character long')
            .max(200, 'description maximum 50 characters')
        ),

        category: z.preprocess(
            (v) => (v === null ? '' : v),
            z.string()
            .min(1, 'categories must be at least 1 character long')
            .max(20, 'categories maximum 50 characters')
        ),

         imageUrl: z.preprocess(
            (v) => (v === null ? '' : v),
            z.string()
            .min(1, 'imageUrl must be at least 1 character long')
            .max(20, 'imageUrl maximum 50 characters')
        ),
    }).strict()
     
    static readonly UPDATE =  z.object({
        title: z.preprocess(
        (v) => (v == null ? '' : v),
        z.string()
        .min(1, 'title must be at least 1 character long')
        .max(50, 'title maximum 50 characters').optional(),
     ),

        description: z.preprocess(
            (v) => (v === null ? '' : v),
            z.string()
            .min(1, 'description must be at least 1 character long')
            .max(200, 'description maximum 50 characters').optional()
        ),

        category: z.preprocess(
            (v) => (v === null ? '' : v),
            z.string()
            .min(1, 'categories must be at least 1 character long')
            .max(20, 'categories maximum 50 characters').optional()
        ),

         imageUrl: z.preprocess(
            (v) => (v === null ? '' : v),
            z.string()
            .min(1, 'imageUrl must be at least 1 character long')
            .max(20, 'imageUrl maximum 50 characters').optional()
        ),
    }
    )
}