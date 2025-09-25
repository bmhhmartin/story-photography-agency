import Footer from "@/components/Footer";
import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-50">
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}