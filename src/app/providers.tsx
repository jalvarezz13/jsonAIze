import { NextUIProvider } from "@nextui-org/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="min-h-screen h-full w-full max-w-6xl mx-auto flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full h-full pt-6 my-auto">
          <div className="text-4xl font-extrabold text-center glow-lg tracking-wider">jsonAIze</div>
          <div className="text-md text-center text-gray-400 mt-1 mb-6">AI-powered text to JSON parser</div>
          {children}
        </div>
        <span className="text-md w-full p-4 text-center">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/jalvarezz13/"
            target="_blank"
            className="font-bold hover:text-blue-400 transition-all duration-300"
          >
            jalvarezz13
          </a>
        </span>
      </div>
    </NextUIProvider>
  )
}
