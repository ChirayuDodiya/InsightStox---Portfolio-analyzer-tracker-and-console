import { asyncHandler } from "../../utils/asyncHandler.js";
import { apiResponse } from "../../utils/apiResponse.js";

const logoutUser = asyncHandler(async (req, res) => {
    res
    .clearCookie("token")
    .status(200)
    .json(new apiResponse(200, null, "Logout successful"));
});

export { logoutUser };
