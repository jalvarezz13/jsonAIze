import { generateObject } from "ai"
import { google } from "@ai-sdk/google"
import { z } from "zod"

export async function POST(req: Request) {
  const { recipe } = await req.json()

  const { object } = await generateObject({
    model: google("gemini-1.5-flash-8b", { structuredOutputs: true }),
    prompt: `Parse the given recipe webpage into a structured JSON format with specific fields for each part of the recipe. Extract the title, ingredients (including ingredient name and quantity), instructions (broken down into individual steps), and any notes provided with the recipe. Ensure quantities are separated from ingredient names where possible. Represent these sections as arrays or strings as detailed below. The recipe is: ${recipe}`,
    schema: z.object({
      title: z.string(),
      ingredients: z.array(
        z.object({
          name: z.string(),
          quantity: z.string(),
        })
      ),
      instructions: z.array(z.string()),
      notes: z.string(),
    }),
  })

  return new Response(JSON.stringify(object), {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
