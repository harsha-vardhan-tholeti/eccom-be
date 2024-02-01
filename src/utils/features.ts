import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://harsha:JRk3vJnkDgop6eGZ@cluster0.cbcvwlv.mongodb.net/store24"
    )
    .then((c) => console.log(`DB Connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
