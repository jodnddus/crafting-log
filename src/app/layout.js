import localFont from "next/font/local";
import "./globals.css";

const helvetica =  localFont({
    src: './fonts/Helvetica.woff',
    variable: "--font-helvetica",
    weight: "light regular bold",
})

const helveticaLight = localFont({
    src: './fonts/Helvetica-light.woff',
    variable: '--font-helvetica-light',
})

export const metadata = {
  title: "sawsaw",
  description: "wood working repository",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
