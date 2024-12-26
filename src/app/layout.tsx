import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./ui/globals.css";

const catamaran = Catamaran({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lofi Pomodoro",
  description: "Pomodoro timer with lofi music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${catamaran.variable} antialiased`}
      >

        <div className="flex justify-between">

          <button className="flex items-center gap-2">
            <img src="/plus.svg" alt="plus button" />
            <span className="text-sm">
              Add Task
            </span>
          </button>

          <button>
            <img src="/dot-menu.svg" alt="menu" />
          </button>

        </div>

        {children}
      </body>
    </html>
  );
}
