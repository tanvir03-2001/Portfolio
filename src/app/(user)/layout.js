import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./../globals.css";

export const metadata = {
  title: "Tanvir Ahmed | Front-End Developer",
  description:
    "Hi, I'm Tanvir Ahmed — a passionate front-end developer creating beautiful and performant web experiences.",
  keywords: ["Tanvir Ahmed", "Front-End Developer", "React", "Portfolio", "Web Developer"],
  authors: [{ name: "Tanvir Ahmed", url: "https://yourwebsite.com" }],
  creator: "Tanvir Ahmed",
  openGraph: {
    title: "Tanvir Ahmed | Front-End Developer",
    description:
      "Welcome to my portfolio — showcasing modern web design, UI/UX, and frontend engineering.",
    url: "https://yourwebsite.com",
    siteName: "Tanvir Ahmed Portfolio",
    images: [
      {
        url: "/og-image.png", // Put your og image here
        width: 1200,
        height: 630,
        alt: "Tanvir Ahmed Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
