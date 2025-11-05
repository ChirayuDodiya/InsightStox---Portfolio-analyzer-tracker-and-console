import { sql } from "./dbConnection.js";

const deleteActiveSessionByToken = async (token) => {
    try {
        const row = await sql`Delete FROM "active_session" WHERE token = ${token}`;
        return row;
    } catch (error) {
        console.log('Database error - deleteAcriveSessionByToken');
        return null;
    }
};

export { deleteActiveSessionByToken };