'use server';

/**
 * @fileOverview Interactive FAQ Chatbot for HyS Tecnología SAS.
 *
 * - interactiveFAQChatbot - A function that processes user queries and returns answers based on FAQs.
 * - InteractiveFAQChatbotInput - The input type for the interactiveFAQChatbot function.
 * - InteractiveFAQChatbotOutput - The return type for the interactiveFAQChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InteractiveFAQChatbotInputSchema = z.object({
  query: z.string().describe('The user query about HyS Tecnología SAS products, services, or support.'),
});
export type InteractiveFAQChatbotInput = z.infer<typeof InteractiveFAQChatbotInputSchema>;

const InteractiveFAQChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query based on the provided FAQs.'),
});
export type InteractiveFAQChatbotOutput = z.infer<typeof InteractiveFAQChatbotOutputSchema>;

export async function interactiveFAQChatbot(input: InteractiveFAQChatbotInput): Promise<InteractiveFAQChatbotOutput> {
  return interactiveFAQChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'interactiveFAQChatbotPrompt',
  input: {schema: InteractiveFAQChatbotInputSchema},
  output: {schema: InteractiveFAQChatbotOutputSchema},
  prompt: `You are a chatbot for HyS Tecnología SAS, a company specializing in providing printing and technology solutions. Answer the following question based on the provided FAQs.\n\nFAQs:\n- What services does HyS Tecnología SAS offer? HyS Tecnología SAS offers equipment rental, sales, and maintenance services.\n- What types of products does HyS Tecnología SAS sell or rent? We sell and rent multifunctional equipment, printers, computers, and related technology solutions.\n- How can I contact HyS Tecnología SAS? You can contact us via email at info@hybsas.com or by phone at +57 324 659 4263.\n\nQuestion: {{{query}}}`,
});

const interactiveFAQChatbotFlow = ai.defineFlow(
  {
    name: 'interactiveFAQChatbotFlow',
    inputSchema: InteractiveFAQChatbotInputSchema,
    outputSchema: InteractiveFAQChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
