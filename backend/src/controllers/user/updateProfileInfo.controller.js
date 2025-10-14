import { updateProfileInfo } from "../../db/updateProfileInfo.js";
const updateProfileInfoController = async (req, res) => {
    try {
        const { name, investmentExperience, riskProfile } = req.body;
        if (!name || !investmentExperience || !riskProfile) {
            return res.status(400).json({
                success: false,
                message:
                    "name, investmentExperience, RiskProfile all are required.",
            });
        }
        const email = req.user.email;
        const prevName = req.user.name;
        const prevInvestmentExperience = req.user.investmentexperience;
        const prevRiskProfile = req.user.riskprofile;

        if (
            name === prevName &&
            investmentExperience === prevInvestmentExperience &&
            riskProfile === prevRiskProfile
        ) {
            return res
                .status(200)
                .json({ success: false, message: "Nothing to update." });
        }

        const result = await updateProfileInfo(
            email,
            name,
            investmentExperience,
            riskProfile
        );

        if (!result || result.length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Error updating profile." });
        }

        req.user.name = name;
        req.user.investmentexperience = investmentExperience;
        req.user.riskprofile = riskProfile;

        return res
            .status(200)
            .json({ success: true, message: "Profile updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { updateProfileInfoController };
