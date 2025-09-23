import { sql } from "./dbConnection.js"; 

const insertUser = async ({ name, email, Password }) => {
    try {
        const result = await sql`INSERT INTO "user" (name,email,password) VALUES (${name},${email},${Password})RETURNING id, email`;
        return result; 
    } catch (error) {
        console.error('Error inserting user:', error);
        throw error;
    }
}
export { insertUser };