import { NavigationItemsType } from "@/types/NavigationTypes";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const NavigationItems: NavigationItemsType[] = [
  { name: "Home" },
  { name: "Products" },
  { name: "About us" },
];

const LoginButtons: NavigationItemsType[] = [
  { name: "Login" },
  { name: "SignUp" },
];

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <section className="min-h-screen bg-white flex flex-col items-center justify-start py-3">
        <div className="w-full max-w-7xl px-6">
          <nav className="py-4 px-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">TuBancoApp.</h1>

            <div className="flex space-x-6">
              {NavigationItems.map((item, key) => (
                <Link
                  key={key}
                  href="/#"
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
                  href="/#"
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

          <div>
            <h1 className="text-8xl line-clamp-5 mt-10">
              Manage Your Finances, Transers & More With Just One Click
            </h1>

            <Link
              href="#"
              className="mt-10 bg-black w-96 h-14 py-4 rounded-md text-center text-white font-semibold flex items-center justify-center transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-100 hover:bg-neutral-950"
            >
              Let's dive in! What are we waiting for?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
