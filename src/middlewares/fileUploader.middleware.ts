import path from "path";
import multer from "multer";
import fs from "fs";

const bucketBasePath = path.join(__dirname, "../../buckets");

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { bucketName } = req.body;
    const bucketPath = path.join(bucketBasePath, bucketName);

    // Ensure the bucket exists
    if (!fs.existsSync(bucketPath))
      return cb(new Error("Bucket does not exist"), "");

    cb(null, bucketPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Save file with its original name
  },
});

export const fileUploader = multer({ storage }).single("file");
