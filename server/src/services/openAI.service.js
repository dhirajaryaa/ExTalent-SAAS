import OpenAI from "openai";
import { open_ai_key } from "../config/env.js";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: open_ai_key,
  //     defaultHeaders: {
  //     "HTTP-Referer": "<YOUR_SITE_URL>", //*later save on production
  //     "X-Title": "<YOUR_SITE_NAME>", //*later save on production
  //   },
});

async function parseWithAI(prompt, systemPrompt, config = {}) {
  const aiRes = await main(prompt, systemPrompt, config);
  const output = aiRes.choices[0]?.message?.content;
  return output;
}

async function main(prompt, systemPrompt, config = {}) {
  const messages = [
    // prompt here
    {
      role: "system",
      content: `your are smart extalent ai assistant, your name is 'miro'. and your task extract given information from given input data with structured output. if anther question ask with your simple avoid it or return message out of context, straitly follow this role`,
    },
  ];
  if (systemPrompt) {
    messages.push({
      role: "system",
      content: systemPrompt,
    });
  }
  if (prompt) {
    messages.push({
      role: "user",
      content: prompt,
    });
  }
  const completion = await openai.chat.completions.create({
    model: "nvidia/nemotron-nano-9b-v2:free",
    temperature: 0.4,
    messages,
    response_format: { type: "json_object" },
    ...config,
  });

  return completion;
}

export { parseWithAI };
