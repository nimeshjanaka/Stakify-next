import "./globals.css";
import HomePage from "./view/Homepage";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <HomePage />
        {children}
        
        </body>
    </html>
  )
}

