/*
 * AI Proxy Server
 *
 * This Express server acts as a proxy between the frontend dashboard and
 * OpenAI's Chat Completion API. It stores the OpenAI API key on the server
 * side (via the OPENAI_API_KEY environment variable) so that it never
 * appears in client-side code. Requests from the dashboard are sent to
 * `/api/chat` with a JSON body containing the user prompt and the chosen
 * task. The server constructs an appropriate system message, forwards
 * the request to OpenAI, and returns the assistant's reply as JSON.
 */

const express = require('express');
// Use the global `fetch` available in modern versions of Node.js

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Ensure the API key is provided
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.warn('Warning: The OPENAI_API_KEY environment variable is not set. The server will reject requests.');
}

/*
 * Helper function to build the system message based on the selected task.
 * @param {string} task - Task identifier from the client
 */
function buildSystemMessage(task) {
  switch (task) {
    case 'summarize':
      return 'Eres un asistente que resume textos en español de forma concisa.';
    case 'translate':
      return 'You are a translator that translates Spanish text to English.';
    case 'question':
      return 'Eres un experto que responde preguntas educativas en español.';
    case 'example':
      return 'Eres un tutor que genera ejemplos claros en español sobre el tema proporcionado.';
    default:
      return 'Eres un asistente útil.';
  }
}

/*
 * POST /api/chat
 *
 * Expected body: { prompt: string, task: string }
 * Responds with: { result: string }
 */
app.post('/api/chat', async (req, res) => {
  if (!OPENAI_API_KEY) {
    return res.status(500).send('El servidor no está configurado con una clave de API de OpenAI.');
  }
  const { prompt, task } = req.body;
  if (typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).send('El campo "prompt" es obligatorio.');
  }
  const systemMessage = buildSystemMessage(task);
  const messages = [
    { role: 'system', content: systemMessage },
    { role: 'user', content: prompt }
  ];
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).send(errorText);
    }
    const data = await response.json();
    const result = data.choices?.[0]?.message?.content?.trim() || '';
    return res.json({ result });
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error al comunicarse con el servicio de OpenAI.');
  }
});

// Serve static files if needed (e.g. index.html, ai_dashboard.html)
app.use(express.static('.'));

// Start the server
app.listen(port, () => {
  console.log(`AI proxy server listening on http://localhost:${port}`);
});
