import { Poppins, Playfair_Display } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "600"],
  style: "normal",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: "normal",
});
