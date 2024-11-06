"use client"

import { useState } from "react"

import { IconSend } from "@tabler/icons-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { Textarea, Card, CardBody } from "@nextui-org/react"
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs"

export default function Home() {
  const [text, setText] = useState("")
  const [output, setOutput] = useState("")

  const exampleRecipes = [
    "Classic Pancakes: In a large bowl, whisk together 1 cup of flour, 1 tablespoon of sugar, 1 teaspoon of baking powder, and a pinch of salt. Add 3/4 cup of milk, 1 beaten egg, and 2 tablespoons of melted butter. Stir until smooth. Pour 1/4 cup of batter per pancake onto a hot griddle and cook until golden on both sides.",
    "Creamy Garlic Pasta: Boil 8 oz of pasta until al dente. In a pan, melt 2 tablespoons of butter and sauté 4 minced garlic cloves. Add 1 cup of heavy cream and bring to a simmer. Stir in 1/2 cup of grated Parmesan cheese, season with salt and pepper, then mix in the pasta. Garnish with fresh parsley before serving.",
    "Guacamole: Mash 3 ripe avocados in a bowl. Mix in 1 diced tomato, 1/4 cup of chopped onion, 1 minced garlic clove, and juice from 1 lime. Add salt, pepper, and chopped cilantro to taste. Stir well, and serve with tortilla chips or as a topping for tacos.",
  ]

  const generateOutput = () => {
    fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipe: text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data)
      })
  }

  return (
    <div className="flex flex-col items-center justify-center w-5/6 h-full">
      <div className="relative w-full h-full">
        <Textarea minRows={5} placeholder="Type your text here..." onChange={(e) => setText(e.target.value)} value={text} />
        <IconSend
          className="absolute right-4 bottom-4 cursor-pointer transition-[0.6s] hover:scale-105 hover:contrast-125"
          onClick={generateOutput}
          color="#333"
          size={24}
        />
      </div>
      <div className="items-center justify-between w-full gap-3 mt-4 grid grid-cols-1 sm:grid-cols-3">
        <Card className="bg-[#333] h-32" isPressable onPress={() => setText(exampleRecipes[0])}>
          <CardBody className="p-4 h-full">
            <div className="h-full overflow-hidden">
              <p className="text-sm line-clamp-5">{exampleRecipes[0]}</p>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-[#333] h-32" isPressable onPress={() => setText(exampleRecipes[1])}>
          <CardBody className="p-4 h-full">
            <div className="h-full overflow-hidden">
              <p className="text-sm line-clamp-5">{exampleRecipes[1]} </p>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-[#333] h-32" isPressable onPress={() => setText(exampleRecipes[2])}>
          <CardBody className="p-4 h-full">
            <div className="h-full overflow-hidden">
              <p className="text-sm line-clamp-5">{exampleRecipes[2]} </p>
            </div>
          </CardBody>
        </Card>
      </div>
      {output && (
        <div className="w-full mt-4">
          <SyntaxHighlighter
            language="json"
            style={monokaiSublime}
            customStyle={{ fontSize: "12px", borderRadius: "10px" }}
            showLineNumbers
          >
            {JSON.stringify(output, null, 2)}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
