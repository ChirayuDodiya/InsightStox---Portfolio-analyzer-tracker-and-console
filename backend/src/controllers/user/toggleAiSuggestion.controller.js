import { toggleAiSuggestion } from "../../db/toggleAiSuggestion.js";

const toggleAiSuggestionController = (req, res) => {
    try {
        const result = toggleAiSuggestion(req.user.email);
        if (!result) {
            return res
                .status(500)
                .json({ success: false, message: "Database error" });
        }
        if (result.length == 0) {
            return res
                .status(400)
                .json({ success: false, message: "User not found" });
        }
        req.user.aisuggestion = !req.user.aisuggestion;
        return res
            .status(200)
            .json({ success: true, message: "ai suggestion toggled" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { toggleAiSuggestionController };
