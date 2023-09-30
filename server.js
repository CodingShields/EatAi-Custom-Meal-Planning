const express = require('express');
const app = express();
const port = 5173;
const openai = require('openai');
const dotenv = require('dotenv'); // For loading environment variables
const { process } = require('./env')

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});

console.log(chatCompletion.data.choices[0].message.content);













// dotenv.config(); // Load environment variables from .env file

// const apiKey = process.env.OPENAI_API_KEY; // Use the API key from environment variables

// if (!apiKey) {
//   console.error('Please provide your OpenAI API key.');
//   process.exit(1);
// }

// openai.apiKey = process.env.OPENAI_API_KEY;

// app.use(express.json()); // Parse JSON request bodies

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });

// app.post('/chatgpt', async (req, res) => {
//   const prompt = req.body.prompt;

//   try {
//     const response = await axios.post('http://localhost:5173/chatgpt', { prompt });


//     res.json({ text: response.choices[0].text });
//   } catch (error) {
//     console.error('OpenAI API Error:', error.message);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// });
