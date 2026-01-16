import {NextRequest} from 'next/server';
import {ai} from '@/ai/genkit';

// Import flows so they are registered with Genkit.
import '@/ai/flows/interactive-faq-chatbot';

export async function POST(req: NextRequest) {
  return await ai.run(req);
}
