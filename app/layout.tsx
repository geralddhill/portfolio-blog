import "../ui/globals.css";
import {barlow, playfair, poppins} from "@/ui/fonts";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en" className={`${playfair.variable} ${barlow.variable} ${poppins.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
