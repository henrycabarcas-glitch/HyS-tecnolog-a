import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';
import {nextJS} from '@genkit-ai/next';

export const ai = genkit({
  plugins: [
    googleAI(),
    nextJS(),
  ],
  model: 'googleai/gemini-2.5-flash',
});
