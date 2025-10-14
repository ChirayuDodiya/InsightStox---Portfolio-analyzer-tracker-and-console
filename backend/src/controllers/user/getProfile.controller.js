const getProfile = async (req, res) => {
    try {
        const user = {
            name: req.user.name,
            email: req.user.email,
            investmentExperience: req.user.investmentexperience,
            riskProfile: req.user.riskprofile,
            profileImage: req.user.profileimage,
            regestrationMethod: req.user.registrationmethod,
        };
        return res.status(200).json({ success: true, user: user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { getProfile };
