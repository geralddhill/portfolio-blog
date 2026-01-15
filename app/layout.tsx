import "../ui/globals.css";
import {barlow, playfair, poppins} from "@/ui/fonts";
import Header from "@/ui/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en" className={`${playfair.variable} ${barlow.variable} ${poppins.variable}`}>
      <body
        className={`antialiased xl:px-32 2xl:px-72`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
