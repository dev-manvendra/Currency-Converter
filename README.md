# Currency Converter

A real-time currency converter built with **React + Vite**, styled with **Tailwind CSS**. Live exchange rates are fetched from the free [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api) service.

## Features

- 💱 Live exchange rates for 200+ world currencies
- 🔄 Swap "From" / "To" currencies with a single click
- ✨ Hover & active color transitions on Swap and Convert buttons
- 🔊 Click sound effects on button interaction
- 🖼️ Responsive UI with a background image and frosted-glass card design
- 📱 Fully responsive layout

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4
- JavaScript (JSX)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to view the app.

## Available Scripts

| Script          | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server with HMR     |
| `npm run build` | Create a production build         |
| `npm run lint`  | Run ESLint checks                 |
| `npm run preview` | Preview the production build    |

## Project Structure

```
src/
├── components/
│   └── input.jsx       # Reusable currency input + selector box
├── hook/
│   └── useCurrency.js  # Custom hook that fetches live rates
├── assets/
│   ├── images/         # Background image
│   └── sound/          # click.mp3 sound effect
├── App.jsx             # Main app
├── main.jsx            # Entry point
└── index.css           # Tailwind entry + base styles
```

## How It Works

1. The custom `useCurrency` hook fetches live exchange rates for the selected "From" currency.
2. Currency dropdowns are populated from the fetched rate data.
3. Enter an amount, choose currencies, and hit **Convert** to see the converted value.
4. The **Swap** button exchanges the From/To currencies and amount instantly.
