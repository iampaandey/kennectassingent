

import Nav from "@components/Nav";
import "@styles/styles.css";

export const metadata = {
  title: 'Vimal Dada',
  description: 'Goat Developer of 90s',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Nav/>
      {children}</body>
    </html>
  )
}
