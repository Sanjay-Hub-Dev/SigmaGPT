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
  apiKey: process.env.GROQ_API_KEY_LATEST,
});

const getOpenAIAPIResponse = async (message) => {
  try {
    const response = await groq.chat.completions.create({
      model: "gemma2-9b-it", // Valid, active model on Groq
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq Error:", error);
    throw error; // Let the route handler catch it where 'res' actually exists
  }
};

export default getOpenAIAPIResponse;