import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ message: 'Question is required.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `
      You are an expert AI assistant for a Chartered Accountancy firm in India called "Gauri CA Consultancy".
      Your role is to answer basic tax and finance-related questions for potential clients.
      Keep your answers concise, helpful, and easy to understand for a non-expert.
      Do not provide any financial advice or opinions. Only provide factual information.
      If the question is not related to Indian taxes, finance, or accounting, politely decline to answer.

      User's Question: "${question}"
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ answer: text });
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ message: 'Failed to get an answer from the AI assistant.' });
  }
}