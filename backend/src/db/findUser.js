import {sql} from './db.js';


const searchUserByEmail = async (email)=> {
    try {
        const row = sql`SELECT * FROM "user" WHERE email = ${email}`;
        return row;
    } catch (error) {
        console.error('Error searching user by email:', error);
        throw error;
    }
};
export { searchUserByEmail };