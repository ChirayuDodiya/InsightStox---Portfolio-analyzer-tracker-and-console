import { sql } from "./dbConnection.js";

const updateProfileInfo = async (email,name,investmentExperience,riskProfile,financialGoals,investmentHorizon) => {
    try {
        const result =
            await sql`UPDATE "user" SET name=${name},investmentExperience=${investmentExperience},riskProfile=${riskProfile},financialGoals=${financialGoals},investmentHorizon=${investmentHorizon} WHERE email=${email} RETURNING id`;
        return result;
    } catch (error) {
        console.log("Error updating profile image:", error);
        return null;
    }
};

export { updateProfileInfo };
