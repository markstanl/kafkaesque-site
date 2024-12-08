import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import konstaConfig from "konsta/config";

export default konstaConfig({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFF",
        secondary: "#000",
      },
      fontFamily: {
        nanum: ['Nanum Brush Script', 'cursive'],
      },
    },
  },
  plugins: [],
}) satisfies Config;
