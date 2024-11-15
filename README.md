# jsonAIze

## 📑 Table of Contents

- [❓ What is jsonAIze?](#-what-is-jsonaize)
- [⚙️ Installation](#%EF%B8%8F-installation)
  - [🔧 Prerequisites](#-prerequisites)
  - [📥 Clone the Repository](#-clone-the-repository)
  - [📄 Setup Environment Variables](#-setup-environment-variables)
  - [📦 Install Dependencies](#-install-dependencies)
- [▶️ Usage](#%EF%B8%8F-usage)
- [📜 License](#-license)

## ❓ What is **jsonAIze**?

**jsonAIze** is a simple tool to generate JSON-like data from diverse inputs using Gemini and AI SDK. Ideal for:

- **Testing purposes**: Quickly create structured datasets.
- **Machine learning**: Generate JSON datasets for model training or validation.

## ⚙️ Installation

### 🔧 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [pnpm](https://pnpm.io/) (Preferred package manager for this project)
- A valid [Gemini API Key](https://aistudio.google.com/apikey)

### 📥 Clone the Repository

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/jalvarezz13/jsonAIze.git
cd jsonAIze
```

### 📄 Setup Environment Variables

Configure your API key for authentication:

1. Copy the `.env.sample` file to `.env`:

   ```bash
   cp .env.sample .env
   ```

2. Replace the placeholder with your API key:

   ```plaintext
   GOOGLE_GENERATIVE_AI_API_KEY=YOUR_GOOGLE_GENERATIVE_AI_API_KEY_HERE
   ```

### 📦 Install Dependencies

Install the required packages using `pnpm`:

```bash
pnpm install
```

## ▶️ Usage

To build and start the application, use:

```bash
pnpm build; pnpm start
```

Once running, the tool will generate JSON-like outputs based on the provided input data.

## 📜 License

This project is distributed under the [AGPL-3.0 License](LICENSE). Feel free to use, modify, and distribute it as per the license terms.
