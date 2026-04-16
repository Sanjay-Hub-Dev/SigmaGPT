import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import Groq from "groq-sdk";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

// ✅ Groq setup
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// // ✅ Chat API (replacing OpenAI)
// app.post("/api/chat", async (req, res) => {
//   try {
//     const userMessage = req.body.message;

//     const response = await groq.chat.completions.create({
//       messages: [
//         { role: "user", content: userMessage }
//       ],
//       model: "llama-3.1-8b-instant",
//     });

//     const reply = response.choices[0].message.content;

//     res.json({ reply });

//   } catch (err) {
//     console.log("Groq Error:", err);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// ✅ MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");
  } catch (err) {
    console.log("Failed to connect with Db", err);
  }
};

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});









// import Groq from "groq-sdk";
// import "dotenv/config";

// const groq = new Groq({
//     apiKey: process.env.GROQ_API_KEY,
// });
// async function run() {
//     const chatCompletion = await groq.chat.completions.create({
//         messages: [
//             { role: "user", content: "crack a joke" }
//         ],
//         model: "llama-3.1-8b-instant",
//     });

//     console.log(chatCompletion.choices[0].message.content);
// }

// run();