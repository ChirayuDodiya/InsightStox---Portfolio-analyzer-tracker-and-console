import { updateProfileInfo } from "../../db/updateProfileInfo.js";
const updateProfileInfoController = async (req, res) => {
    try {
        const { name, investmentExperience, riskProfile,financialGoals,investmentHorizon } = req.body;
        if (!name || !investmentExperience || !riskProfile || !financialGoals || !investmentHorizon) {
            return res.status(400).json({
                success: false,
                message:
                    "name, investmentExperience, RiskProfile, financialGoals and investmentHorizon all are required.",
            });
        }
        const email = req.user.email;
        const prevName = req.user.name;
        const prevInvestmentExperience = req.user.investmentexperience;
        const prevRiskProfile = req.user.riskprofile;
        const prevFinancialGoals = req.user.financialgoals;
        const prevInvestmentHorizon = req.user.investmenthorizon;

        if (
            name === prevName &&
            investmentExperience === prevInvestmentExperience &&
            riskProfile === prevRiskProfile &&
            financialGoals === prevFinancialGoals &&
            investmentHorizon === prevInvestmentHorizon
        ) {
            return res
                .status(200)
                .json({ success: false, message: "Nothing to update." });
        }

        const result = await updateProfileInfo(
            email,
            name,
            investmentExperience,
            riskProfile,
            financialGoals,
            investmentHorizon,
        );

        if (!result || result.length === 0) {
            return res
                .status(400)
                .json({ success: false, message: "Error updating profile." });
        }

        req.user.name = name;
        req.user.investmentexperience = investmentExperience;
        req.user.riskprofile = riskProfile;
        req.user.financialgoals = financialGoals;
        req.user.investmenthorizon = investmentHorizon;

        return res
            .status(200)
            .json({ success: true, message: "Profile updated successfully." });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { updateProfileInfoController };
