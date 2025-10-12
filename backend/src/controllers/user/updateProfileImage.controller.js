import { uploadOnCloudinary } from "../../utils/cloudinary.js";
import { updateProfileImage } from "../../db/updateProfileImage.js";
const updateProfileImageController = async (req, res) => {
    try {
        const profileImageLocalPath = req.file?.path;
        if (!profileImageLocalPath)
            return res
                .status(400)
                .json({
                    success: false,
                    message: "Please provide a valid image.",
                });

        const profileImage = await uploadOnCloudinary(profileImageLocalPath);

        if (!profileImage.url)
            return res
                .status(500)
                .json({
                    success: false,
                    message: "Failed to upload profile image.",
                });

        const email = res.user.email;

        await updateProfileImage(email, profileImage.url);
        console.log(profileImage.url);
        return res
            .status(200)
            .json({
                success: true,
                message: "Profile image updated successfully.",
            });
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .json({
                success: false,
                message: "Internal server error. Please try again.",
            });
    }
};

export { updateProfileImageController };
