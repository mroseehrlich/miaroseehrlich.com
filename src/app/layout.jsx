import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import SiteFooter from "../components/SiteFooter";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-libre-baskerville",
});

export const metadata = {
  title: "Mia Rose Ehrlich",
  description:
    "Software engineer based in Santa Fe, New Mexico. Backend systems, web applications, writing, and digital spaces with a sense of place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={libreBaskerville.variable}>
      <body>
        <div className="page">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}