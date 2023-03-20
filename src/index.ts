import { deepl_api } from "./deepl";
import { openai } from "./openai";

async function main() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.5,
    prompt:
      "Write a project description for a new project using nodejs, react and typescript. Expected completion in 1 year.",
  });

  const openai_text = completion.data.choices[0].text;
  const res = await deepl_api.post("/translate", {
    text: openai_text,
    target_lang: "DE",
  });

  const translated = res.data.translations[0].text;
  console.log("result", translated, openai_text);
}

void main();
