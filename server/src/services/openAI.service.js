import OpenAI from "openai";
import Groq from "groq-sdk";
import { groq_api_key } from "../config/env.js";

const groqAi = new Groq({
  apiKey: groq_api_key,
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
  const completion = await groqAi.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages,
    response_format: { type: "json_object" },
    ...config,
  });

  return completion;
}

export { parseWithAI };
