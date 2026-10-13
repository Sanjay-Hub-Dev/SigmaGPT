// import "dotenv/config";
// import Groq from "groq-sdk";

// // ✅ Groq setup
// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// const getOpenAIAPIResponse = async(message) => {
//     try {
//     const userMessage = message;

//     const response = await groq.chat.completions.create({
//       messages: [
//         { role: "user", content: userMessage }
//       ],
//       model: "llama-3.3-70b-versatile",
//     });

//     const reply = response.choices[0].message.content;

//     // res.json({ reply });
//     return reply;

//   } catch (err) {
//     console.log("Groq Error:", err);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// }

// export default getOpenAIAPIResponse;

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const getOpenAIAPIResponse = async (message) => {
  try {
    const response = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b", // Active model on Groq
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq Error:", error?.message || error);
    throw error; // Do NOT write res.status here!
  }
};

export default getOpenAIAPIResponse;