import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HardClean - виїзна хімчистка м'яких меблів у Вінниці",
  description: "Професійна виїзна хімчистка диванів, матраців, крісел, стільців та килимів у Вінниці та області.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caveat.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
