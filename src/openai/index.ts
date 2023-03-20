import { Configuration, OpenAIApi } from "openai";
import { OPEN_API_KEY } from "../config";

const configuration = new Configuration({
  apiKey: OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

export { openai };
