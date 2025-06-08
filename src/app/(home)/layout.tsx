import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { NavigationItemsType } from "@/types/NavigationTypes";
import Footer from "@/features/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TuBancoApp",
  description: "A banking app",
};

const NavigationItems: NavigationItemsType[] = [
  { name: "Home", navigationLink: '/' },
  { name: "Products", navigationLink: '/products' },
  { name: "About us", navigationLink: '/about-us'},
];

const LoginButtons: NavigationItemsType[] = [
  { name: "Login", navigationLink: '/login' },
  { name: "SignUp", navigationLink: '/signup'},
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <main className={`${inter.className}`}>
          {/* Navigation Header - Sticky */}
          <header className="sticky top-0 w-full bg-white z-50">
            <div className="w-full max-w-7xl mx-auto px-6">
              <nav className="py-4 px-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold text-black">tuBanco.</h1>
                
                <div className="flex space-x-6 mx-auto">
                  {NavigationItems.map((item, key) => (
                    <Link
                      key={key}
                      href={item.navigationLink}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  {LoginButtons.map((item, key) => (
                    <Link
                      key={key}
                      href={item.navigationLink}
                      className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                        item.name === "SignUp"
                          ? "bg-black text-white hover:bg-blue-700"
                          : "border border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </header>
          
          {/* Main Content Area */}
          <section className="min-h-screen bg-white flex flex-col items-center justify-start py-3">
            {children}
          </section>
        </main>
        
        {/* Footer */}
        <div className="flex flex-col mt-24">
          <Footer />
        </div>
      </body>
    </html>
  );
}