import { CardComponet } from "@/components/CardComponents";
import { StartAccountComponent } from "@/components/StartAccountCardComponent";
import { CardComponents } from "@/types/CardComponents";
import { StartAccountTypes } from "@/types/StartAccountCardType";
import Link from "next/link";

export default function Home() {
  const CardDescription: CardComponents[] = [
    {
      name: "Financial Convenience 💸",
      description:
        "With tuBanco, you can open your account in just moments — fully online, no paperwork required. Send and receive money instantly, and track all your expenses in one simple, powerful app.",
    },
    {
      name: "Security 🔐",
      description:
        "Security is our top priority. We use bank-level encryption to protect your data, along with two-factor authentication (2FA) for secure logins. Need to freeze your cards? Do it instantly with just a few taps.",
    },
    {
      name: "Smart Features 📱",
      description:
        "tuBanco is built to simplify your life. Enjoy bill reminders, automatic payments, and both virtual and physical debit cards. Going out with friends? Easily split bills with just a few taps.",
    },
    {
      name: "Access & Control 🌍",
      description:
        "Access all your accounts anytime, anywhere. We support multiple languages and currencies, so whether you’re spending in Italy or at home — no hidden fees, no surprises. Full transparency, always.",
    },
    {
      name: "Exclusive Perks 🎁",
      description:
        "Earn cashback on everyday purchases, enjoy special offers for new users, and get help fast with our dedicated customer support team.",
    },
  ];

  const CreateAccount: StartAccountTypes[] = [
    {
      name: "Create an Account",
      description:
        "Register and click on 'Start Account' to begin your journey with us!",
    },
    {
      name: "Request Your Debit Card",
      description:
        "Once your account is set up, request your debit card for purchases and ATM access.",
    },
    {
      name: "Start Spending!",
      description:
        "Activate your debit card and enjoy secure, easy spending with your new account.",
    },
  ];
  return (
    <>
      <div className="w-full max-w-7xl px-6">

        <div>
          <h1 className="text-8xl line-clamp-5 mt-20">
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

      <div className="mt-40 max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold ">
          Managing accounts was NEVER this easy!{" "}
        </h1>
        <p className="leading-relaxed font-normal text-lg">
          With tuBanco, managing your bank accounts has never been easier. From
          the very first moment, our goal was to create something simple, fast,
          and secure. Open your account today and discover the benefits waiting
          for you.
        </p>
      </div>

      <div className="mt-24">
        {/* Primera fila - 3 cartas */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {CardDescription.slice(0, 3).map((card, key) => (
            <div key={key}>
              <CardComponet name={card.name} description={card.description} />
            </div>
          ))}
        </div>

        {/* Segunda fila - 2 cartas centradas */}
        <div className="flex justify-center gap-4">
          {CardDescription.slice(3, 5).map((card, key) => (
            <div key={key + 3}>
              <CardComponet name={card.name} description={card.description} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <h1 className="font-bold text-6xl">
          Steps to Start an Account with Us.
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-18 ">
        {CreateAccount.map((item, key) => (
          <div key={key}>
            <StartAccountComponent
              number={key + 1}
              name={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <div className="mt-32">
        <h1 className="font-bold text-6xl">
          Get the latest updates from tuBanco
        </h1>
      </div>

      <div className="mt-24 flex items-center justify-evenly flex-row space-x-10">
        <div>
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-72 h-10 px-4 text-sm text-gray-800 placeholder:text-gray-500 placeholder:text-center bg-gray-100 rounded-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
        </div>
        <div>
          <button className="h-10 bg-blue-500 w-32 text-white rounded-sm transition delay-150 duration-200 ease-in-out :hover-translate-y-1 hover:scale-110">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
