import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(
            null,
            file.fieldname +
                "-" +
                uniqueSuffix +
                path.extname(file.originalname)
        );
    },
});

const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
const allowedMimes = ["image/jpeg", "image/png", "image/webp"];

export const upload = multer({
    storage: storage,
    limits: { fileSize: 500 * 1024 },
    fileFilter: (req, file, cb) => {
        const extname = allowedExtensions.includes(
            path.extname(file.originalname).toLowerCase()
        );
        const mimetype = allowedMimes.includes(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb(new Error("Only images are allowed (jpg, jpeg, png, webp)"));
        }
    },
});
