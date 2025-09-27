import { v2 as cloudinary } from "cloudinary";
import fs from "node:fs/promises";
import {
  cloudinary_cloud_name,
  cloudinary_cloud_id,
  cloudinary_secret_key,
} from "../config/env.js";

// cloudinary configure
cloudinary.config({
  cloud_name: cloudinary_cloud_name,
  api_secret: cloudinary_secret_key,
  account_id: cloudinary_cloud_id,
});

// upload on cloudinary
const uploadOnCloudinary = async (localFilePath) => {
  if (!localFilePath) return;
  const uploadRes = await cloudinary.uploader.upload(localFilePath, {
    resource_type: "auto",
    unique_filename: true,
  });
  // remove file form local server
  await fs.unlink(localFilePath);
  return uploadRes;
};

// remove from cloudinary
const removeFromCloudinary = async (publicId) => {
  if (!publicId) return;
  const res = await cloudinary.uploader.destroy(publicId);
  return res;
};

export {uploadOnCloudinary,removeFromCloudinary}