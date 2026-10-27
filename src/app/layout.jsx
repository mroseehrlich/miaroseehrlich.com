import "./globals.css";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Mia Rose Ehrlich",
  description:
    "Software engineer based in Santa Fe, New Mexico. Backend systems, web applications, writing, and digital spaces with a sense of place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page">
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}