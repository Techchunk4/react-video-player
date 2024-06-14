import "./globals.css";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
        <header className="flex items-center justify-center w-full p-4 bg-black shadow-md">
          <Image src="/logo.png" alt="Logo" width={95} height={76} />
        </header>
        <main className="flex items-center justify-center flex-grow w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
