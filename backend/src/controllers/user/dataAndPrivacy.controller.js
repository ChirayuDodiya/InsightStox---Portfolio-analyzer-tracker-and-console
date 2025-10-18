const dataAndPrivacy = async (req, res) => {
    try {
        const data = {
            aisuggestion: req.user.aisuggestion,
            theme: req.user.theme,
        };
        return res.status(200).json({ success: true, data: data });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { dataAndPrivacy };
