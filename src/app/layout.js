import localFont from "next/font/local";
import "./globals.css";

const helvetica =  localFont({
    src: './fonts/Helvetica.woff',
    variable: "--font-helvetica",
    weight: "light regular bold",
})

const pretendard = localFont({
    src: "../static/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
});

export const metadata = {
  title: "gagu",
  description: "woodworking collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body
        className={`${helvetica.variable} ${pretendard.className} antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
