import { sql } from "./dbConnection";

const updatePassword = async (email, hashedPassword) => {
    try {
        const result = await sql`UPDATE "user" SET password=${hashedPassword} WHERE email=${email} RETURNING id, email`;
        return result;
    } catch (error) {
        console.error('Error updating password:', error);
        throw error;
    }
}
export { updatePassword };