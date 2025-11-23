import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricoloage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "I’m Sorry!",
  description: "Sorry yr niks, I made this website to show how much you mean the world to me.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricoloage.className} antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
