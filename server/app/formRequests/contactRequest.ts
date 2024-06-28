import {z} from "zod";

const contactRequestSchema = z.object({
    email:
        z
            .string({
                required_error: "L'email est requis",
            })
            .email(),

    first_name:
        z
            .string({
                required_error: "Le prénom est requis",
            }),
    last_name:
        z
            .string({
                required_error: "Le nom est requis",
            }),
    message:
        z
            .string({
                required_error: "Le mot de passe est requis",
            }),
});

export type ContactRequestType = z.infer<typeof contactRequestSchema>;

export default async function validateContactRequest(credentials: ContactRequestType) {
    return await contactRequestSchema.parseAsync(credentials);
}
