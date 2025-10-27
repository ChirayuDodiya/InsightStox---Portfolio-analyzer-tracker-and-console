import { updatePreferencesAndPersonalisation } from "../../db/updatePreferencesAndPersonalisation.js";

const updatePreferencesAndPersonalisationController = async (req, res) => {
    try {
        const { theme, dashboardlayout } = req.body;
        if (!theme || !dashboardlayout) {
            return res.status(400).json({
                success: false,
                message: "theme and dashboardlayout are required"
            })
        }

        const email = req.user.email;
        const PrevTheme = req.user.theme;
        const PrevDashboardLayout = req.user.dashboardlayout;

        if (theme === PrevTheme && dashboardlayout === PrevDashboardLayout) {
            return res.status(200).json({ success: false, message: "Nothing to update" });
        }

        const result = await updatePreferencesAndPersonalisation(email, theme, dashboardlayout);
        if (!result || result.length === 0) {
            return res.status(500).json({ success: false, message: "Database error while updating preferences and personalisation" });
        }

        req.user.theme = theme;
        req.user.dashboardlayout = dashboardlayout;

        return res.status(200).json({ success: true, message: "Preferences and personalisation updated successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

export { updatePreferencesAndPersonalisationController };
