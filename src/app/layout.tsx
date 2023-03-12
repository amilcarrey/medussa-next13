import "./globals.css";
import { Inter } from "@next/font/google";
import CartTemplate from "./Cart";
import Header from "@modules/header";



const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Medusa Store w/Next13",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
{/* @ts-expect-error Async Server Component */}
<Header/>
      {/* <CartTemplate /> */}

        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
