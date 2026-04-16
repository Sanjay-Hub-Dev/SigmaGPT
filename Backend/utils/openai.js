import "dotenv/config";
import Groq from "groq-sdk";

// ✅ Groq setup
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const getOpenAIAPIResponse = async(message) => {
    try {
    const userMessage = message;

    const response = await groq.chat.completions.create({
      messages: [
        { role: "user", content: userMessage }
      ],
      model: "llama-3.1-8b-instant",
    });

    const reply = response.choices[0].message.content;

    // res.json({ reply });
    return reply;

  } catch (err) {
    console.log("Groq Error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export default getOpenAIAPIResponse;