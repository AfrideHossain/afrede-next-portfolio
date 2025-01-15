import { Raleway, Montserrat, } from "next/font/google";
import "./globals.css";

// Raleway font
const raleway = Raleway({
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Afrede Hossain",
  description:
    "I am Afrede Hossain. I am a full stack web developer. I have expertise in html, css, javascript, react, nodejs and mongodb.",
  keywords:
    "Afrede Hossain, Afride Hossain, Web Developer, Full Stack Developer, React Developer, Node.js Developer, MERN Stack Developer, HTML, CSS, JavaScript, React, Node.js, MongoDB, Next.Js, Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} text-white`}>{children}</body>
    </html>
  );
}
