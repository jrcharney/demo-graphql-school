import dotenv from "dotenv";

dotenv.config();

export default {
  mongooseSchemaOptions: {
    new: true,
    runValidators: true,
    versionKey: false,
  },
  mongoURL: process.env.MONGO_URL,
  port: process.env.PORT || 4000,
};
