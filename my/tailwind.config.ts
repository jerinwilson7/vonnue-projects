import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "copper":"#7B4800",
        "hubbo-yellow":"#FBB501",
        "hubbo-brown":'#472200',
        "copper-800":"#5F3800",
        "copper-500":"#AD6500",
        "disabled":"#f7f0e6",
        "disabled-100":"#C6BAB0",
        "hubbo-yellow-300":"#FCCD55",
        "hubbo-yellow-600":"#E4A501",
        "copper-600":"#411F00",
        "hubbo-yellow-400":"#FCC434",
        "hubbo-yellow-500":"#FBB501",

        

      }
    },
  },
  plugins: [],
};
export default config;
