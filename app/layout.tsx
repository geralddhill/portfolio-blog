import "../ui/globals.css";
import {barlow, playfair, poppins} from "@/ui/fonts";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="en" className={`${playfair.variable} ${barlow.variable} ${poppins.variable}`}>
      <body
        className={`antialiased w-full flex flex-col justify-between min-h-screen`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
