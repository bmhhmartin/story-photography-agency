import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-50">
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}