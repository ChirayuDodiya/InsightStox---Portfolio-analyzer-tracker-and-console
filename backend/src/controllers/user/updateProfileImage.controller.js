import {
    uploadOnCloudinary,
    deleteFromCloudinary,
} from "../../utils/uploadOncloudinary.js";
import { updateProfileImage } from "../../db/updateProfileImage.js";
import { defaultProfileImage } from "../../../constants.js";
const updateProfileImageController = async (req, res) => {
    try {
        const oldProfileImage = res.user.profileimage;

        const profileImageLocalPath = req.file?.path;
        if (!profileImageLocalPath)
            return res.status(400).json({
                success: false,
                message: "Please provide a valid image.",
            });

        const profileImage = await uploadOnCloudinary(profileImageLocalPath);

        if (oldProfileImage !== defaultProfileImage) {
            const publicId = oldProfile.split("/upload/")[1].split(".")[0];
            await deleteFromCloudinary(publicId);
        }

        if (!profileImage.url)
            return res.status(500).json({
                success: false,
                message: "Failed to upload profile image.",
            });

        const email = res.user.email;

        await updateProfileImage(email, profileImage.url);
        return res.status(200).json({
            success: true,
            message: "Profile image updated successfully.",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error. Please try again.",
        });
    }
};

export { updateProfileImageController };
