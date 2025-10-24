import { sql } from "./dbConnection.js";

const updatePreferencesAndPersonalisation = async (email,theme,dashboardlayout) => {
    try {
        const result =
        await sql`UPDATE "user" SET theme=${theme},dashboardlayout=${dashboardlayout} WHERE email=${email} RETURNING id`;
        return result;
    } catch (error) {
        console.log("Error updating profile image:", error);
        return null;
    }
};

export { updatePreferencesAndPersonalisation };
