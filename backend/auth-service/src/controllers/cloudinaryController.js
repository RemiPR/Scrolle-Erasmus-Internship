import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const signCloudinaryParams = async (request, response) => {
  try {
    const signature = cloudinary.utils.api_sign_request(
      request.body.paramsToSign,
      process.env.CLOUDINARY_API_SECRET
    );
    response.json({ signature, params: request.body.paramsToSign });
  } catch (error) {
    response.status(500).send(error);
  }
};

export const CloudinaryController = { signCloudinaryParams };
