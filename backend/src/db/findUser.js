import {sql} from './dbConnection.js';


const searchUserByEmail = async (email)=> {
    try {
        const row = sql`SELECT * FROM "user" WHERE email = ${email}`;
        return row;
    } catch (error) {
        console.log('Error searching user by email:', error);
        return null;
    }
};
export { searchUserByEmail };