const logoutUser = (req, res) => {
    try {
        return res
            .clearCookie("token")
            .status(200)
            .json({ success: true, message: "User logged out successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { logoutUser };
